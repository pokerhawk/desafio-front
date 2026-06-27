import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { destroyCookie, parseCookies } from 'nookies';
import { COOKIE_ACCESS_TOKEN } from './auth';

const baseURL = import.meta.env.VITE_BASE_URL;
const apiKEY = import.meta.env.VITE_API_KEY;

const api = axios.create({ baseURL });
export const ipApi = axios.create({ 
    baseURL: "https://api.ipify.org",
});

export const brasilAPI = axios.create({
    baseURL: 'https://brasilapi.com.br/api/banks/v1',
    headers: {
    'Accept': 'application/json',
    },
});

export const cepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    'Accept': 'application/json',
  },
});

api.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (error) => {
        if (error.config.url === '/') {
            destroyCookie(null, COOKIE_ACCESS_TOKEN, { path: '/' });
            // error.destroyCookie(null, 'cookie_access_token', { path: '/' });
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

api.interceptors.request.use((config: AxiosRequestConfig): any => {
    const { [COOKIE_ACCESS_TOKEN]: token } = parseCookies();

    if(config.url === '/auth/login' || config.url === '/auth/register'){
        return config
    }
    if(
        config.url?.startsWith('/back-office') ||
        config.url?.startsWith('/sales') && config.method != 'get' ||
        config.url?.startsWith('/sales/byId') ||
        config.url?.startsWith('/abandonments') ||
        config.url?.startsWith('/checkout') ||
        config.url?.startsWith('/links/info') && config.method === 'get'
    ) {
        config.headers!['api-key'] = `${apiKEY}`
    } else {
        config.headers!['Authorization'] = `Bearer ${token}`
    }

    return config;
}
);

export default api;

export const fetcher = (path: string) => api.get(path).then((res) => res.data);
