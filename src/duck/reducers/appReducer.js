import {UPDATE_PASSWORDS, AUTH_USER, LOG_OUT, ADD_PASSWORD, DELETE_PASSWORD, EDIT_PASSWORD, PASSWORDS} from '../actions';
import { setDataToStorage } from "../../services/LocalStorageService";

const initialState = {
    authUser: false,
    passwords: [],
}

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authUser: action.payload,
            }
        case LOG_OUT:
            return {
                ...state,
                authUser: false,
            }
        case UPDATE_PASSWORDS:
            return {
                ...state,
                passwords: action.passwords || [],
            }
        case ADD_PASSWORD:
            const passwordsWithNew = [...state.passwords, action.payload]
            setDataToStorage(passwordsWithNew, PASSWORDS);
            return {
                ...state,
                passwords: passwordsWithNew,
            }
        case DELETE_PASSWORD:
            const passwordsWithoutDeleted = state.passwords.filter((e, i) => i !== action.payload)
            setDataToStorage(passwordsWithoutDeleted, PASSWORDS);
            return {
                ...state,
                passwords: passwordsWithoutDeleted,
            }
        case EDIT_PASSWORD:
            const passwordsWithEdited = state.passwords.map((e, i) => {
                if (action.index === i) {
                    return action.data;
                }
                return e;
            });
            setDataToStorage(passwordsWithEdited, PASSWORDS);
            return {
                ...state,
                passwords: passwordsWithEdited,
            }
        default:
            return state
    }
}