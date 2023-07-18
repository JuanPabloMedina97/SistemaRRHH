import axios from 'axios';




//TYPES
export const GET_ALL_PERSON = "GET_ALL_PERSON";
export const GET_PERSON_DETAIL = "GET_PERSON_DETAIL";
export const CREATE_PERSON = "CREATE_PERSON";
export const UPDATE_PERSON = "UPDATE_PERSON";
export const DELETE_PERSON = "DELETE_PERSON";
export const CREATE_USER = "CREATE_USER";
export const LOGIN_USER = "LOGIN_USER";


//STAFF
export const getAllPersonAction = () => async (dispatch, getState) => { //action que trae la lista de personas
    try {
        const res = await axios.get("http://localhost:3001/home/user");
        dispatch({
            type: GET_ALL_PERSON,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const getPersonDetailAction = (legajo) => async (dispatch) => { //action que trae el detalle de la persona por su legajo

    axios(`http://localhost:3001/home/user/${legajo}`)
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
        const response = await axios.post('http://localhost:3001/home/user', person)
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

        const response = await axios.put(`http://localhost:3001/home/user/${person.legajo}`, person);

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
        axios.delete(`http://localhost:3001/home/user/${legajo}`)
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
        const response = await axios.post('Aqui va la ruta que se configura en el back, para el servidor', user);
        console.log('Usuario creado con exito.', response.data);
        dispatch({
            type: CREATE_USER,
            payload: user
        })
        console.log("Usuario creado desde el action", user);
    } catch (error) {
        console.log('Error al crear el usuario: ', error);
    }
};

export const getLoginAction = (user) => async (dispatch) => {

    try {
        const response = await axios.get('aqui hace la consulta de la base de datos para logearse', user);
        const data = response.data;
        console.log("Usuario desde el action", user);
        dispatch({
            type: GET_USER,
            payload: data
        })
    } catch (error) {
        console.log('Usuario o contraseña incorrectas');
    }
}
