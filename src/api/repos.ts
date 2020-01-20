import api from './api';
import { IRepo } from '../types/repos';

export const fetchUserRepositories = async (url: string): Promise<IRepo[]> => {
    const reponse = await api.get(`${url}?per_page=10000`);
    return reponse;
}