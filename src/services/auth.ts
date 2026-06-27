import api from './api';

type LoginRequestProps = {
    email: string;
    password: string;
}

type RegisterRequestProps = {
    operator: string;
    email: string;
    password: string;
}

export const COOKIE_ACCESS_TOKEN = 'cookie_access_token';
export const COOKIE_REFRESH_TOKEN = 'cookie_refresh_token';

export const loginRequest = async ({ email, password }: LoginRequestProps) => {
    try {
        const { data } = await api.post('/auth/login', { email, password });
        return data;
    } catch (err) {
        throw err;
    }
}

export const registerRequest = async ({ operator, email, password }:RegisterRequestProps) => {
    try {
        const { data } = await api.post('/auth/register', { operator, email, password });
        return data;
    } catch (err) {
        throw err;
    }
}
