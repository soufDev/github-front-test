import { TActions } from '../../types/actions';
import { GET_USER_INFOS_ERROR, GET_USER_INFOS_SUCCESS, GET_USER_INFOS_CANCEL } from '../constants';
import { LOGIN_REQUEST, LOGOUT } from '../constants/login';
import { GET_REPOS_NUMBER } from '../constants/user';

export const initialUserValue = {
    avatar: '',
    login: '',
    name: '',
    bio: '',
    reposNumber: 0,
    commitsNumber: 0,
    reposUrl: '',
}

const initialState = {
    entity: initialUserValue,
    error: null,
    isLoading: false,
    isConnected: false,
}

export default function userReducer(
    state = initialState,
    action: TActions
) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_USER_INFOS_SUCCESS:
            return {
                ...state,
                entity: action.payload,
                isLoading: false,
                isConnected: true,
                error: null,
            }
        case GET_USER_INFOS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case GET_USER_INFOS_CANCEL:
            return {
                ...state,
                isLoading: action.payload,
            }
        case LOGOUT:
            return {
                ...state,
                isLoading: false,
                isConnected: false,
            }
        case GET_REPOS_NUMBER:
            return {
                ...state,
                entity: {
                    ...state.entity,
                    reposNumber: action.payload
                }
            }
        default: return state;
    }
}