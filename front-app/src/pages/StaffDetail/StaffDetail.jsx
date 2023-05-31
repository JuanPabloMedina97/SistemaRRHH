import { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction } from '../../redux/actions';



const StaffDetail = ({ persona }) => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const { legajo, dni, cuil, nombre, apellido, informacionPersonalDos,  } = persona;
  const { sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedicoMedicacion, movilidad } = informacionPersonalDos






  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    legajo: "",
    dni: "",
    cuil: "",
    nombre: "",
    apellido: "",
    sector: "",
    sexo: "",
    estadoCivil: "",
    edad: "",
    nacimiento: "",
    lentes: "",
    antiGripal: "",
    carnetVacuna: "",
    tratamientoMedicoMedicacion: "",
    movilidad: ""
  });
  

  const handleEdit = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedData({
      legajo,
      dni,
      cuil,
      nombre,
      apellido,
      // sector,
    });
  };

  const handleSave = () => {
    setEditing(false);
    dispatch(updatePersonAction(editedData));
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('¿Estás seguro de que deseas eliminar este empleado?');
    if (confirmDelete) {
      dispatch(deletePersonAction(id));
      dispatch(getAllPersonAction())
        .then(() => {
          navigate('/user');
        });

    }
  };

  const handleBack = () => {
    navigate("/user");
  };



  useEffect(() => {
    setEditedData({
      legajo,
      dni,
      cuil,
      nombre,
      apellido,
      // sector,
    });
  }, [legajo, dni, cuil, nombre, apellido,]);


  return (
    <div className="card">
      <div className="card-header">
        <h2>Detalles del empleado</h2>
        <button className="close-btn" onClick={() => handleBack()}>X</button>
      </div>
      <div className="card-body" >
        <h3>Informacion personal</h3>
        <div className="field">
          <label>Legajo:</label>
          {editing ?
            <input type="text" value={editedData.legajo} onChange={e => handleEdit('legajo', e.target.value)} disabled />
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
          <label>CUIL:</label>
          {editing ?
            <input type="text" value={editedData.cuil} onChange={e => handleEdit('cuil', e.target.value)} />
            :
            <div onDoubleClick={() => setEditing(true)}>{cuil}</div>
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
            <select id="sector" name="sector" onChange={e => handleEdit('sector', e.target.value)} required>
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
            :
            <div onDoubleClick={() => setEditing(true)}>{'sector'}</div>
          }
        </div>
        
        <div className="field">
          <label>Sexo:</label>
          {editing ?
            <input type="text" value={editedData.sexo} onChange={e => handleEdit('sexo', e.target.value)} disabled />
            :
            <div onDoubleClick={() => setEditing(true)}>{sexo}</div>
          }
        </div>
        <div className="field">
          <label>Estado civil:</label>
          {editing ?
            <input type="text" value={editedData.estadoCivil} onChange={e => handleEdit('estadoCivil', e.target.value)} disabled />
            :
            <div onDoubleClick={() => setEditing(true)}>{estadoCivil}</div>
          }
        </div>
        <div className="field">
          <label>Edad:</label>
          {editing ?
            <input type="text" value={editedData.edad} onChange={e => handleEdit('edad', e.target.value)} disabled />
            :
            <div onDoubleClick={() => setEditing(true)}>{edad}</div>
          }
        </div>
        <div className="field">
          <label>Nacimiento:</label>
          {editing ?
            <input type="text" value={editedData.nacimiento} onChange={e => handleEdit('nacimiento', e.target.value)} disabled />
            :
            <div onDoubleClick={() => setEditing(true)}>{nacimiento}</div>
          }
        </div>
        <div className="field">
          <label>Lentes:</label>
          {editing ?
            <input type="text" value={editedData.lentes} onChange={e => handleEdit('lentes', e.target.value)} disabled />
            :
            <div onDoubleClick={() => setEditing(true)}>{lentes}</div>
          }
        </div>

        {/* Aquí van el resto de los campos */}
      </div>
      <div className="card-footer">
        {editing &&
          <div className="edit-buttons">
            <button className="cancel-btn" onClick={handleDelete}>Eliminar empleado</button>
            <button className="save-btn" onClick={handleSave}>Guardar cambios</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancelar</button>
          </div>
        }
      </div>
    </div>
  );
};

export default StaffDetail;

