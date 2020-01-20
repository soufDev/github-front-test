import api from './api';
import { IOrg } from '../types/organization';

export const fetchOrgnizations = async (url: string): Promise<IOrg[]> => {
    const response = await api.get(url);
    return response;
}