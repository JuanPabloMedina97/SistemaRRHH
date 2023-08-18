import { useEffect, useState } from 'react';
import StaffDetail from './StaffDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPersonDetailAction } from '../../redux/actions';
import flattenObject from './flattenObject'; // Importa la función flattenObject
import Swal from 'sweetalert2'; // Importa SweetAlert2

const StaffParams = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const persona = useSelector((store) => store.person.personDetail[0]);
  const [flattenedPersona, setFlattenedPersona] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Agrega un estado para controlar el tiempo de carga

  useEffect(() => {
    // Simula una carga de 2 segundos utilizando setTimeout
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); // Después de 2 segundos, establece isLoading en false
    }, 2000);

    dispatch(getPersonDetailAction(id));

    // Limpia el timeout cuando el componente se desmonte o el ID cambie
    return () => clearTimeout(loadingTimeout);
  }, [dispatch, id]);

  useEffect(() => {
    if (persona) {
      setFlattenedPersona(flattenObject(persona));
    }
  }, [persona]);

  useEffect(() => {
    if (isLoading) {
      Swal.fire({
        title: 'Cargando...',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
    } else {
      Swal.close();
    }
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {flattenedPersona && <StaffDetail persona={flattenedPersona} />}
    </>
  );
};

export default StaffParams;
