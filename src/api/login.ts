import api from './api';
import { IAuthenticatedUser } from '../types/user';

export function login(username: string, accessToken: string): Promise<IAuthenticatedUser> {
    return api.get('/user', { auth: { username, password: accessToken }});
}
