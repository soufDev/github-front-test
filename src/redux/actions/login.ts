import { LOGIN_REQUEST } from '../constants/login';

export function loginRequest(username: string, accessToken: string): {type: 'LOGIN_REQUEST', username: string, accessToken: string } {
    return {
        type: LOGIN_REQUEST,
        username,
        accessToken
    }
}