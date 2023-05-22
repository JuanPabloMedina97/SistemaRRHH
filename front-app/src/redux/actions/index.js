import axios from 'axios';




//TYPES
export const GET_ALL_PERSON = "GET_ALL_PERSON";
export const GET_PERSON_DETAIL = "GET_PERSON_DETAIL";
export const CREATE_PERSON = "CREATE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";



export const getAllPersonAction = () => async (dispatch, getState) => { //action que trae la lista de personas
    try {
        const res = await axios.get("http://localhost:3001/user");
        dispatch({
            type: GET_ALL_PERSON,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getPersonDetailAction = (legajo) => async (dispatch, getState) => { //action que trae el detalle de la persona por su legajo

    axios(`http://localhost:3001/user/${legajo}`)
        .then(response => {
            const result = response.data;

            dispatch({
                type: GET_PERSON_DETAIL,
                payload: result
            });
        }).catch(err => {
            console.log(err.response.data.error);
        })

}

export const createPersonAction = (person) => async (dispatch, getState) => { //action que crea una persona nueva
    try {
        dispatch({
            type: CREATE_PERSON,
            payload: person
        })
    } catch (error) {
        console.log(error);
    }
}

export const updatePersonAction = () => { //action que modifica a la persona ya creada
    return function () {

    }
}

export const deletePersonAction = () => { //action que elimina la persona
    return function () {

    }
}