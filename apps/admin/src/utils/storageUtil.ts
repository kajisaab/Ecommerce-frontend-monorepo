import { LOCAL_STORAGE_PREFIX } from '../constant';

/**
 * Store string record in the storage
 *
 * @param {string} key
 * @param {string | array | object} value
 */
export const setLocalStorage = (key: string, value: string | [] | object) => {
    if (value && typeof value === 'string') {
        localStorage.setItem(
            `${LOCAL_STORAGE_PREFIX}.${key}`,
            JSON.stringify(value),
        );
    } else {
        localStorage.setItem(
            `${LOCAL_STORAGE_PREFIX}.${key}`,
            JSON.stringify(value),
        ); // convert arrays or objects into strings
    }
};

/**
 * Retrieve record from the storage using the key
 *
 * @param {string} key
 */
export const getLocalStorage = (key: string): string => {
    const data = localStorage.getItem(`${LOCAL_STORAGE_PREFIX}.${key}`)!;
    try {
        return JSON.parse(data); // converts a JSON string into a Javascript Object
    } catch (e) {
        return data;
    }
};

/**
 * Clear records from the storage using the key
 *
 * @param {string} key
 */
export const clearLocalStorage = (key: string) =>
    localStorage.removeItem(`${LOCAL_STORAGE_PREFIX}.${key}`);

/**
 * Clear all records from the storage
 *
 */
export const clearAllLocalStorage = () =>
    Object.keys(localStorage)
        .filter((x) => x.startsWith(LOCAL_STORAGE_PREFIX))
        .forEach((x) => localStorage.removeItem(x));
