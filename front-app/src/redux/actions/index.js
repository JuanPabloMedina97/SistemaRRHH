import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_URL;




//TYPES
export const GET_ALL_PERSON = "GET_ALL_PERSON";
export const GET_PERSON_DETAIL = "GET_PERSON_DETAIL";
export const CREATE_PERSON = "CREATE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";
export const STATUS_USER = "STATUS_USER";
export const LOGOUT_USER = "LOGOUT_USER";


//STAFF
export const getAllPersonAction = () => async (dispatch) => { //action que trae la lista de personas
    
    try {
        const res = await axios.get(`http://${apiUrl}/home/user`);
        dispatch({
            type: GET_ALL_PERSON,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getPersonDetailAction = (legajo) => async (dispatch) => { //action que trae el detalle de la persona por su legajo

    axios(`http://${apiUrl}/home/user/${legajo}`)
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
        const response = await axios.post(`http://${apiUrl}/home/user`, person)
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
        const response = await axios.put(`http://${apiUrl}/home/user/${person.legajo}`, person);
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
        axios.delete(`http://${apiUrl}/home/user/${legajo}`)
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


//USER
export const createUserAction = (user) => async (dispatch) => {
    try {
        const response = await axios.post(`http://${apiUrl}/auth/register`, user);
        console.log('Usuario creado con exito.', response.data);
        dispatch({
            type: CREATE_USER,
            payload: user
        })
    } catch (error) {
        console.log('Error al crear el usuario: ', error.response.data.message);
    }
};

export const getLoginAction = (user) => async (dispatch) => {

    try {
        const response = await axios.post(`http://${apiUrl}/auth/`, user);
        const data = response.data;
        dispatch({
            type: LOGIN_USER,
            payload: data
        })
        return data;
    } catch (error) {
        throw new error('Credenciales invalidas')

    }
}

export const getStatusUser = (user) => async (dispatch) => {
    try {
        const res = await axios.get(`http://${apiUrl}/auth/isactive/${user}`);
        dispatch({
            type: STATUS_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const logoutUserAction = (user) => async (dispatch) => {
    try {
        const res = await axios.put(`http://${apiUrl}/auth/logout/${user}`, user)
        dispatch({
            type: LOGOUT_USER,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}