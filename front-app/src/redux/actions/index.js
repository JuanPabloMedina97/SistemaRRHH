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

export const createPersonAction = (person) => async (dispatch) => { //action que crea una persona nueva
    try {
        const response = await axios.post('http://localhost:3001/user', person)
        console.log('Empleado agregado con exito: ', response.data);
        dispatch({
            type: CREATE_PERSON,
            payload: person
        })
    } catch (error) {
        console.log('Log de person', person);
        console.error('Error al agregar el empleado:', error);
    }
}

export const updatePersonAction = (person) => async (dispatch) => { //action que modifica a la persona ya creada
    try {
        
        const response = await axios.put(`http://localhost:3001/user/${person.legajo}`, person);

        dispatch({
            type: UPDATE_PERSON,
            payload: response.data
        });
        dispatch(getPersonDetailAction(person.legajo));
    } catch (error) {
        console.log(error);
    }
}

export const deletePersonAction = (legajo) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3001/user/${legajo}`)
            .then(() => {
                dispatch({
                    type: DELETE_PERSON,
                    payload: legajo
                })
            })
            .catch((error) => {
                console.log(error);
            })

    }
}

