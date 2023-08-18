import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Staff.module.css';
import NewEmployee from './NewEmployee/NewEmployee';
import Swal from 'sweetalert2';

import { getAllPersonAction } from '../../redux/actions';

const Staff = () => {
  const dispatch = useDispatch();
  const personal = useSelector(store => store.person.person);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("getAllPersonAction called");
    Swal.showLoading();

    dispatch(getAllPersonAction())
      .then(() => {
        Swal.close();
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error al cargar los empleados',
        });
      });
  }, []);

  const [filter, setFilter] = useState('');
  const filteredPersonal = personal.filter((p) =>
    `${p.nombre} ${p.apellido} ${p.dni} ${p.legajo} ${p.sector}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );

  const handleNavigate = (legajo) => {
    navigate(`/home/user/${legajo}`);
  };

  return (
    <div className={styles.personalList}>
      <NewEmployee personal={personal} />
      <input
        type="text"
        placeholder="Busqueda"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Legajo</th>
            <th>Sector</th>
          </tr>
        </thead>
        <tbody>
          {filteredPersonal.map((p, i) => (
            <tr key={p.legajo}>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {i + 1}
                </button>
              </td>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {p.nombre}
                </button>
              </td>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {p.apellido}
                </button>
              </td>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {p.dni}
                </button>
              </td>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {p.legajo}
                </button>
              </td>
              <td>
                <button onClick={() => handleNavigate(p.legajo)} className={styles.linkTable}>
                  {p.sector}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;
