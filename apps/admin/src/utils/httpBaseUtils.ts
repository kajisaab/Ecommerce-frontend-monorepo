import axios, { AxiosError, AxiosInstance } from 'axios';
import { BASE_URL, JWT_TOKEN } from '../constant';
import {
    clearLocalStorage,
    getLocalStorage,
    setLocalStorage,
} from './storageUtil';

interface HttpHeaders {
    Accept: string;
    'Content-Type': string;
    'X-XSRF-TOKEN'?: string;
}

export const createHttpInstance = (
    isDownloadable: boolean = false,
    signal?: AbortSignal,
): AxiosInstance => {
    const headers: HttpHeaders = {
        Accept: isDownloadable ? '*/*' : 'application/json',
        'Content-Type': 'application/json',
    };

    if (!isDownloadable) {
        headers['X-XSRF-TOKEN'] = getLocalStorage(JWT_TOKEN);
    }

    const api = axios.create({
        baseURL: BASE_URL,
        headers: {
            ...headers,
        },
        responseType: isDownloadable ? 'blob' : 'json',
        withCredentials: true,
        signal,
    });

    api.interceptors.response.use(
        (response) => {
            const xsrfToken = response.headers['x-xsrf-token'];
            if (xsrfToken) {
                setLocalStorage(JWT_TOKEN, xsrfToken);
            }
            return response;
        },
        (error: AxiosError) => {
            if (error.response?.status === 401) {
                clearLocalStorage(JWT_TOKEN);
            }
            // Uncomment this if you want to handle 503 error
            // if (error.response?.status === 503) {
            //     // Handle 503 error
            // }
            return Promise.reject(error);
        },
    );

    return api;
};
