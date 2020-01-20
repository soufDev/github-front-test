import { put, call, take, fork, cancel } from 'redux-saga/effects';
import * as loginApi from '../../api/login';
import * as userActions from '../actions/user';
import * as organizationActions from '../actions/organizations';
import { IAuthenticatedUser } from '../../types/user';
import { formatUserData } from '../helpers/user';
import { fetchUserRepositories } from '../../api/repos';
import * as reposActions from '../actions/repos';
import { formatRepo } from '../helpers/repos';
import { IRepoApi } from '../../types/repos';
import { fetchOrgnizations } from '../../api/organization';
import { IOrgApi } from '../../types/organization';
import { formatOrganiation } from '../helpers/organizations';

export function* authorize(username: string, accessToken: string) {
    try {
        const user: IAuthenticatedUser = yield call(loginApi.login, username, accessToken);
        const formatedUser = formatUserData(user);
        yield put(userActions.getUserInfosSuccess(formatedUser));
    } catch (e) {
        yield put(userActions.getUserInfosError(e.message));
    }
}

export function* repositories(username: string) {
    try {
        const repos = yield call(fetchUserRepositories, `/users/${username}/repos`);
        const formatedRepos = repos.map((repo: IRepoApi) => formatRepo(repo));
        yield put(reposActions.fetchUserRepositoriesSuccess(formatedRepos));
        yield put(userActions.getReposNumber(formatedRepos.length));
    } catch (e) {
        yield put(reposActions.fetchUserRepositoriesError(e.message))
    }
}

export function* organizations(username: string) {
    try {
        yield put(organizationActions.fetchOrganizationRequest())
        const orgs = yield call(fetchOrgnizations, `/users/${username}/orgs`);
        const formatedOrgs = orgs.map((org: IOrgApi) => formatOrganiation(org));
        yield put(organizationActions.fetchOrganizationSuccess(formatedOrgs));
    } catch (e) {
        yield put(organizationActions.fetchOrganizationError(e.message));
    }
}

export function* watchLoginUser() {
    while(true) {
        const { username, accessToken } = yield take('LOGIN_REQUEST');
        const task = yield fork(authorize, username, accessToken);
        const { payload: { login: usernameLogin } } = yield take('GET_USER_INFOS_SUCCESS');
        const reposTask = yield fork(repositories, usernameLogin);
        const orgTask = yield fork(organizations, usernameLogin);
        const action = yield take(['LOGOUT', 'GET_USER_INFOS_ERROR']);
        if (action.type === 'LOGOUT') {
            yield cancel(task);
            yield cancel(reposTask);
            yield cancel(orgTask)
        }
    }
}