import { IOrg } from '../../types/organization';
import { TActions } from '../../types/actions';
import { FETCH_ORGANIZATIONS_REQUEST, FETCH_ORGANIZATIONS_ERROR, FETCH_ORGANIZATIONS_SUCCESS, FETCH_ORGANIZATIONS_CANCEL } from '../constants/orgnizations';

const initialState = {
    entity: [] as IOrg[],
    isLoading: false,
    error: null
};

export default function organizationReducer(
    state = initialState,
    action: TActions
) {
    switch (action.type) {
        case FETCH_ORGANIZATIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_ORGANIZATIONS_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            };
        case FETCH_ORGANIZATIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                entity: action.payload
            };
        case FETCH_ORGANIZATIONS_CANCEL:
            return {
                ...state,
                isLoading: false,
                error: null,
            }
        default: return state
    }
}