import { FETCH_ORGANIZATIONS_REQUEST, FETCH_ORGANIZATIONS_ERROR, FETCH_ORGANIZATIONS_SUCCESS, FETCH_ORGANIZATIONS_CANCEL } from '../constants/orgnizations';
import { IOrg } from '../../types/organization';

export const fetchOrganizationRequest = () => ({
    type: FETCH_ORGANIZATIONS_REQUEST
});


export const fetchOrganizationError = (payload: string) => ({
    type: FETCH_ORGANIZATIONS_ERROR,
    payload: payload
});


export const fetchOrganizationSuccess = (payload: IOrg[]) => ({
    type: FETCH_ORGANIZATIONS_SUCCESS,
    payload
})

export const fetchOrganizationCancel = () => ({
    type: FETCH_ORGANIZATIONS_CANCEL
})