import { useEffect } from 'react';
import StaffDetail from './StaffDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPersonDetailAction } from '../../redux/actions';

const StaffParams = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const persona = useSelector((store) => store.person.personDetail[0]);
  const isLoading = useSelector((store) => store.person.isLoading);

  useEffect(() => {
    dispatch(getPersonDetailAction(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      {persona && <StaffDetail persona={persona} />}
    </>
  );
};

export default StaffParams;
