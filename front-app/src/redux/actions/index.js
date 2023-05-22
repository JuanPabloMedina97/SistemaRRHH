import axios from 'axios';




//TYPES
export const GET_ALL_PERSON = "GET_ALL_PERSON";
export const GET_PERSON_DETAIL = "GET_PERSON_DETAIL";
export const CREATE_PERSON = "CREATE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";



export const getAllPersonAction = () => async (dispatch, getState) => {
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

export const getPersonDetailAction = (legajo) => async (dispatch, getState) => {
    try {
        axios.get('https://run.mocky.io/v3/20857017-5729-4774-ba8e-10b02369fb97') //cuando se agrega una persona nueva saltará error porque esa persona no esta en la api y aqui se consume los datos de la api, no del estado local
            .then(response => {
                const data = response.data;
                const result = data.find(obj => obj.legajo == legajo);
                dispatch({
                    type: GET_PERSON_DETAIL,
                    payload: result
                })
            })
            .catch(error => console.error(error));
    } catch (error) {
        console.log(error);
    }
}

export const createPersonAction = (person) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CREATE_PERSON,
            payload: person
        })
    } catch (error) {
        console.log(error);
    }
}

export const updatePersonAction = () => {
    return function () {

    }
}

export const deletePersonAction = () => {
    return function () {

    }
}