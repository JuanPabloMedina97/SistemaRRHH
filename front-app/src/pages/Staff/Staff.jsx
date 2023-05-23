import React, { useEffect, useState } from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
import NewEmployee from './NewEmployee/NewEmployee';
import Swal from 'sweetalert2'




import { useDispatch, useSelector } from 'react-redux';
import { getAllPersonAction, getPersonDetailAction } from '../../redux/actions'


const Staff = () => {

  const dispatch = useDispatch();
  const personal = useSelector(store => store.person.person); //traemos el estado global del store

  useEffect(() => {
    console.log("getAllPersonAction called");
    // dispatch(getAllPersonAction());
    Swal.showLoading();

    dispatch(getAllPersonAction()).then(() => {
      Swal.close();
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ha ocurrido un error al cargar los empleados',
      });
    })
  }, [])


  const [filter, setFilter] = useState('');
  const filteredPersonal = personal.filter((p) => //funcion para filtrar personas
    `${p.nombre} ${p.apellido} ${p.dni} ${p.legajo} ${p.sector}`
      .toLowerCase()
      .includes(filter.toLowerCase())
  );


  return (
    <div className="personal-list">
      <NewEmployee personal={personal} /> {/*Modal para agregar empleado nuevo */}
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
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {i + 1}
                </Link>
              </td>
              <td>
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {p.nombre}
                </Link>
              </td>
              <td>
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {p.apellido}
                </Link>
              </td>
              <td>
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {p.dni}
                </Link>
              </td>
              <td>
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {p.legajo}
                </Link>
              </td>
              <td>
                <Link to={`/user/${p.legajo}`} className='link-table'>
                  {p.sector}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Staff;
