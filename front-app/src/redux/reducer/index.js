//ACTIONS
import {
    GET_ALL_PERSON,
    GET_PERSON_DETAIL,
    CREATE_PERSON,
    UPDATE_PERSON,
    DELETE_PERSON,
} from '../actions';


const initialState = {
    person: [],
    personDetail: []
}



export default function staffReducer(state = initialState, action) {
    switch (action.type){
        case GET_ALL_PERSON:
            return {...state, person: action.payload};
        case GET_PERSON_DETAIL:
            return {...state, personDetail: action.payload}
        case CREATE_PERSON:
            return {...state, person:[...state.person, action.payload]};
        default:
            return state;
    }
}