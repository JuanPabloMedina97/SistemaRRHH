import React, { useEffect, useState } from 'react'

import './NewEmployee.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPersonAction } from '../../../redux/actions';

const NewEmployee = () => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => { //cambia el estado del modal
        setShowModal(!showModal);
    };

    const dispatch = useDispatch();
    const personal = useSelector(store => store.person.person)

    const [person, setPerson] = useState(null)

    const handleSubmit = (event) => { //creamos el nuevo objeto 
        event.preventDefault(); // Previene el comportamiento por defecto del formulario

        const formData = new FormData(event.target); // Crea un objeto FormData con los valores del formulario

        const nuevoEmpleado = Object.fromEntries(formData); // Convierte el objeto FormData en un objeto plano

        setPerson(nuevoEmpleado)

        event.target.reset();


    };

    useEffect(() => {
        if (person) {
            dispatch(createPersonAction(person));
            console.log("nueva lista:", personal);
            
        }
    }, [dispatch, person]);













    return (
        <>
            <button className='btn-add' onClick={toggleModal}>Agregar empleado</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-close" onClick={toggleModal}>
                            &times;
                        </span>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required />

                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" required />

                            <label htmlFor="dni">DNI:</label>
                            <input type="number" id="dni" name="dni" required />

                            <label htmlFor="legajo">Legajo:</label>
                            <input type="number" id="legajo" name="legajo" required />

                            <label htmlFor="sector">Sector:</label>
                            <input type="text" id="sector" name="sector" required />

                            <div className="modal-buttons">
                                <button type="button" onClick={toggleModal}>
                                    Cancelar
                                </button>
                                <button type="submit">Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}

export default NewEmployee