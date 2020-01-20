import { FETCH_REPOS_REQUEST, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from '../constants/repos';
import { IRepo } from '../../types/repos';

export const fetchUserRepositoriesRequest = () => ({
    type: FETCH_REPOS_REQUEST,
});

export const fetchUserRepositoriesSuccess = (repos: IRepo[]) => ({
    type: FETCH_REPOS_SUCCESS,
    payload: repos
});

export const fetchUserRepositoriesError = (error: null | string) => ({
    type: FETCH_REPOS_ERROR,
    payload: error
});


export const fetchUserRepositoriesCancel = () => ({
    type: FETCH_REPOS_ERROR,
    payload: false
})