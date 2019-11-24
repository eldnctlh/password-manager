import localforage from "localforage";

export const setDataToStorage = (data, key) => {
    localforage.setItem(key, data)
}
export const getDataFromStorage = (key) => {
    return localforage.getItem(key)
}

export const removeDataFromStorage = (key) => {
    return localforage.removeItem(key)
}