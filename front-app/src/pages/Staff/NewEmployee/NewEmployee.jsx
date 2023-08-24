import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import styles from './NewEmployee.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { createPersonAction } from '../../../redux/actions';

const NewEmployee = () => {

    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado para controlar la carga
    const dispatch = useDispatch();
    const personal = useSelector((store) => store.person.person);
    const toggleModal = () => {
        setShowModal(!showModal);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true); // Iniciar la carga
        const formData = new FormData(event.target); //obtengo los datos del formulario (event.target) y los convierte en un obj
        const nuevoEmpleado = Object.fromEntries(formData);

        const empleadoExistente = personal.find((empleado) => empleado.legajo === parseInt(nuevoEmpleado.legajo));
        console.log("EMPLEADO EISTENTE",empleadoExistente);
        if (empleadoExistente) {
            setIsLoading(false); // Finalizar la carga
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ya existe un empleado con el mismo legajo.',
            });
            return;
        }

        try {
            await dispatch(createPersonAction(nuevoEmpleado));
            setIsLoading(false); // Finalizar la carga
            event.target.reset();
        } catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Ha ocurrido un error al cargar el empleado',
            });
        } finally {
            setIsLoading(false); // Finalizar la carga en caso de error
            toggleModal(); // Cerrar el modal
        }
    };

    useEffect(() => {
        if (isLoading) {
            Swal.fire({
                icon: 'info',
                title: 'Cargando',
                text: 'Espere mientras se agrega el empleado...',
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
        } else {
            Swal.close(); // Cerrar SweetAlert2 cuando isLoading sea false
        }
    }, [isLoading]);


    return (
        <>
            <button className={styles.btnAdd} onClick={toggleModal}>Agregar empleado</button>
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.modalClose} onClick={toggleModal}>
                           X
                        </span>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required />

                            <label htmlFor="apellido">Apellido:</label>
                            <input type="text" id="apellido" name="apellido" required />

                            <label htmlFor="dni">DNI:</label>
                            <input type="number" id="dni" name="dni" required />

                            <label htmlFor="cuil">CUIL:</label>
                            <input type="number" id="cuil" name="cuil" required />

                            <label htmlFor="legajo">Legajo:</label>
                            <input type="number" id="legajo" name="legajo" required />

                            <label htmlFor="sector">Sector:</label>
                            <select id="sector" name="sector" required>
                                <option value='Pregrado'>Pregrado</option>
                                <option value='Lab Calidad'>Lab Calidad</option>
                                <option value='Secadero'>Secadero</option>
                                <option value='Deposito'>Deposito</option>
                                <option value='Efluentes'>Efluentes</option>
                                <option value='Envasado'>Envasado</option>
                                <option value='Finca'>Finca</option>
                                <option value='Administracion'>Administracion</option>
                                <option value='Porteria'>Porteria</option>
                                <option value='Recursos Humanos'>Recursos Humanos</option>
                            </select>

                            <div className={styles.modalButtons}>
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