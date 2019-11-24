import { getDataFromStorage, setDataToStorage, removeDataFromStorage } from "../../services/LocalStorageService";

const USERS = 'users';
export const PASSWORDS = 'passwords';
export const AUTH_USER = 'authUser';
export const LOG_OUT = 'logOut';
export const ADD_PASSWORD = 'addPassword';
export const DELETE_PASSWORD = 'deletePassword';
export const EDIT_PASSWORD = 'editPassword';
export const UPDATE_PASSWORDS = 'updatePasswords';

export function registerUser(data) {
    return async dispatch => {
        const usersBase = await getDataFromStorage(USERS);
        const newUsers = Array.isArray(usersBase) ? [...usersBase, data] : [data];
        await setDataToStorage(newUsers, USERS);
        dispatch(loginUser(data));
    }
}

export const initFetch = () => {
    return async dispatch => {
        const passwords = await getDataFromStorage(PASSWORDS);
        const authUser = await getDataFromStorage(AUTH_USER);

        dispatch({
            type: UPDATE_PASSWORDS,
            passwords
        })
        dispatch({
            type: AUTH_USER,
            payload: authUser,
        })
    }

}


export const loginUser = data => {
    return dispatch => {
        setDataToStorage(data, AUTH_USER);
        dispatch({
            type: AUTH_USER,
            payload: data,
        })
    }
}

export const checkUser = async (data) => {
    const usersBase = await getDataFromStorage(USERS);
    return usersBase && usersBase.find(e => e.login === data.login && e.password === data.password);
}

export const logOut = () => {
    return dispatch => {
        setDataToStorage(null, AUTH_USER);
        dispatch({
            type: LOG_OUT,
        })
    }
}

export const addPassword = (data) => {
    return async dispatch => {
        dispatch({
            type: ADD_PASSWORD,
            payload: data,
        })
    }
}

export const deletePassword = (index) => {
    return async dispatch => {
        dispatch({
            type: DELETE_PASSWORD,
            payload: index,
        })
    }
}

export const editPassword = (data, index) => {
    return async dispatch => {
        dispatch({
            type: EDIT_PASSWORD,
            data,
            index,
        })
    }
}