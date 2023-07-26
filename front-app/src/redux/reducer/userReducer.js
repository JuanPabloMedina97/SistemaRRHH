//ACTIONS
import {
    CREATE_USER,
    LOGIN_USER,
    STATUS_USER,
    LOGOUT_USER
} from '../actions';


const userState = {
    user: [],
    status: [],
    isLoading: true,
}

export default function userReducer(state = userState, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state, user: [...state.user, action.payload], isLoading: false,
            }
        case LOGIN_USER:
            return {
                ...state, user: action.payload, isLoading: false,
            }
        case STATUS_USER:
            return {
                ...state, status: action.payload, isLoading: false,
            }
        case LOGOUT_USER:
            return {
                ...state, status: action.payload, isLoading: false,
            }
        default:
            return state;
    }
}