import React, { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonDetailAction } from '../../redux/actions';

const StaffDetail = () => { //hay que traer los datos de una api o bd

  const { id } = useParams(); //el id lo uso como legajo
  const dispatch = useDispatch();
  const { nombre, apellido, dni, legajo, sector } = useSelector(store => store.person.personDetail); //traemos el detalle de la persona hay que traer absolutamente todo

  useEffect(() => {
    console.log('getPersonalDetailAction called');
    dispatch(getPersonDetailAction(id));
  }, [])


  const navigate = useNavigate();
  
  const data = {}
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState(data);
  



  const handleEdit = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value
    });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedData(data);
  };

  const handleSave = () => {
    setEditing(false);
    // Aquí es donde enviarías los datos editados a través de una función prop o una API
  };

  const handleBack = () => {
    navigate('/staff');
  };


  return (
    <div className="card">
      <div className="card-header">
        <h2>Detalles del empleado</h2>
        <button className="close-btn" onClick={() => handleBack()}>X</button>
      </div>
      <div className="card-body">
        <div className="field">
          <label>Legajo ID:</label>
          {editing ?
            <input type="text" value={editedData.legajoId} onChange={e => handleEdit('legajoId', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{legajo}</div>
          }
        </div>
        <div className="field">
          <label>DNI:</label>
          {editing ?
            <input type="text" value={editedData.dni} onChange={e => handleEdit('dni', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{dni}</div>
          }
        </div>
        <div className="field">
          <label>CUIL ID:</label>
          {editing ?
            <input type="text" value={editedData.cuilId} onChange={e => handleEdit('cuilId', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{'data.cuilId'}</div>
          }
        </div>
        <div className="field">
          <label>Nombre:</label>
          {editing ?
            <input type="text" value={editedData.nombre} onChange={e => handleEdit('nombre', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{nombre}</div>
          }
        </div>
        <div className="field">
          <label>Apellido:</label>
          {editing ?
            <input type="text" value={editedData.apellido} onChange={e => handleEdit('apellido', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{apellido}</div>
          }
        </div>
        <div className="field">
          <label>Sector:</label>
          {editing ?
            <input type="text" value={editedData.sector} onChange={e => handleEdit('sector', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{sector}</div>
          }
        </div>
        {/* Aquí van el resto de los campos */}
      </div>
      <div className="card-footer">
        {editing &&
          <div className="edit-buttons">
            <button className="save-btn" onClick={handleSave}>Guardar cambios</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancelar</button>
          </div>
        }
      </div>
    </div>
  );
};

export default StaffDetail;

