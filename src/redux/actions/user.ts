import { IUser } from '../../types/user';
import { GET_USER_INFOS_ERROR, GET_USER_INFOS_SUCCESS, GET_USER_INFOS_CANCEL, GET_REPOS_NUMBER } from '../constants/user';

export function getUserInfosSuccess(user: IUser) {
    return {
        type: GET_USER_INFOS_SUCCESS,
        payload: user,
    }
}

export function getUserInfosError(message: string) {
    return {
        type: GET_USER_INFOS_ERROR,
        payload: message,
    }
}

export function getUserInfosCancel() {
    return {
        type: GET_USER_INFOS_CANCEL,
        payload: false
    }
}

export function getReposNumber(payload: number) {
    return {
        type: GET_REPOS_NUMBER,
        payload
    }
}