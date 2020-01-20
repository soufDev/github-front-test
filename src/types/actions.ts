import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { IUser } from './user';
import { IRepo } from './repos';

export type TActions = 
    { type: 'GET_USER_INFOS_SUCCESS', payload: IUser }
    | { type: 'GET_USER_INFOS_ERROR', payload: string }
    | { type: 'GET_USER_INFOS_CANCEL', payload: boolean }
    | { type: 'LOGIN_REQUEST', username: string, accessToken: string }
    | { type: 'LOGOUT' }
    | { type: 'FETCH_REPOS_REQUEST' }
    | { type: 'FETCH_REPOS_SUCCESS', payload: IRepo[] }
    | { type: 'FETCH_REPOS_ERROR', payload: string }
    | { type: 'FETCH_REPOS_CANCEL', payload: boolean }
    | { type: 'GET_REPOS_NUMBER', payload: number }

export interface IUserReducerState {
    entity: IUser,
    error: null | string;
    isLoading: boolean;
    isConnected: boolean;
}

export interface IReposReducerState {
    repositories: IRepo[];
    error: null | string;
    isLoading: boolean;
}

export interface IState {
    user: IUserReducerState;
    repos: IReposReducerState;
}

export type ReduxInitAction = { type: '@@INIT' };
export type Action = ReduxInitAction | TActions;

export type Store = ReduxStore<IState, Action>
export type Dispatch = ReduxDispatch<Action>