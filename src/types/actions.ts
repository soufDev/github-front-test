import { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import { IUser } from './user';
import { IRepo } from './repos';
import { IOrg } from './organization';

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
    | { type: 'FETCH_ORGANIZATIONS_REQUEST' }
    | { type: 'FETCH_ORGANIZATIONS_CANCEL' }
    | { type: 'FETCH_ORGANIZATIONS_SUCCESS', payload: IOrg[] }
    | { type: 'FETCH_ORGANIZATIONS_ERROR', payload: string }

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

export interface IOrganizationsReducerState {
    entity: IOrg[];
    isLoading: boolean;
    error: boolean;
}

export interface IState {
    user: IUserReducerState;
    repos: IReposReducerState;
    organizations: IOrganizationsReducerState;
}

export type ReduxInitAction = { type: '@@INIT' };
export type Action = ReduxInitAction | TActions;

export type Store = ReduxStore<IState, Action>
export type Dispatch = ReduxDispatch<Action>