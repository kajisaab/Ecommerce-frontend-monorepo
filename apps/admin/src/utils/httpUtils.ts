import { createHttpInstance } from './httpBaseUtils';

export function fetch(endpoint: string, data?: any, signal?: AbortSignal) {
    return createHttpInstance(false, signal).get(`/${endpoint}`, data);
}

export function store(endpoint: string, data: any, signal?: AbortSignal) {
    return createHttpInstance(false, signal).post(`/${endpoint}`, data);
}

export function update(endpoint: string, data?: any, signal?: AbortSignal) {
    return createHttpInstance(false, signal).put(`/${endpoint}`, data);
}

export function destroy(
    endpoint: string,
    data?: Record<string, any>,
    signal?: AbortSignal,
) {
    return createHttpInstance(false, signal).delete(`/${endpoint}`, { data });
}

export function download(endpoint: string, params?: AbortSignal) {
    return createHttpInstance(true).get(`/${endpoint}`, { params });
}

export function downloadFile(endpoint: string, data: any) {
    return createHttpInstance(true).post(`/${endpoint}`, data);
}
