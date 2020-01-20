import { TActions } from '../../types/actions';
import { FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR, FETCH_REPOS_REQUEST, FETCH_REPOS_CANCEL } from '../constants/repos';
import { sortRepos } from '../helpers/repos';

const initialReposState = {
    repositories: [],
    isLoading: false,
    error: null
}

export default function reposReducer(
    state = initialReposState,
    action: TActions
) {
    switch (action.type) {
        case FETCH_REPOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_REPOS_SUCCESS: {
            return {
                ...state,
                repositories: sortRepos(action.payload),
                isLoading: false,
                error: null
            };
        }
        case FETCH_REPOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            };
        case FETCH_REPOS_CANCEL:
            return {
                ...state,
                isLoading: action.payload,
            }
        default: return state;
    }
}