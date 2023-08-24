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
    personDetail: [],
    isLoading: true,
}



export default function staffReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PERSON:
            return {
                ...state, person: action.payload,
                isLoading: false
            };
        case GET_PERSON_DETAIL:
            return {
                ...state, personDetail: action.payload,
                isLoading: false
            }
        case CREATE_PERSON:
            return {
                ...state, person: [...state.person, action.payload],
                isLoading: false
            };
        case UPDATE_PERSON: {

            const updateUserLegajo = state.person.findIndex(person => person.legajo === action.payload.legajo); //busca la persona con el mismo legajo del estado inciial
            if (updateUserLegajo === -1) {
                return state; // Si no se encuentra la persona, se devuelve el estado actual sin cambios
            }
            const updatedPersonList = [...state.person];
            updatedPersonList[updateUserLegajo] = action.payload;
            return { ...state, person: updatedPersonList, isLoading: false };

        }
        case DELETE_PERSON: {
            const legajo = action.payload;
            const newList = state.person.filter((user) => user.legajo !== legajo);
            return {
                ...state,
                person: newList,
                isLoading: false
            }
        }

        default:
            return state;
    }
}