import { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction } from '../../redux/actions';
import { fieldsPersonalInformation, fieldsJob, fieldsContact, fieldAdress, fieldAdress2, education, bankData, clothingSize, categories } from './fields';
import flattenObject from './flattenObject';
import RenderFields from './RenderFields';

const StaffDetail = ({ persona }) => {

  const { id } = useParams(); //traigo el id del params
  const dispatch = useDispatch(); //preparamos el dispatch para empezar a usarlo
  const navigate = useNavigate(); 
  const [editing, setEditing] = useState(false); //modo editar en falso
  const [editedData, setEditedData] = useState({...persona}); //traemos el objeto original y lo copiamos en editedData para poder editarlo sin modificar el original directamente
  const obj = flattenObject(editedData); //con la funcion flattenObjet convertimos el objeto original en objeto plano para poder renderizar bien la data de la lista de la persona




  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleEdit = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const handleCancel = () => {
    setEditing(false);
    window.location.reload();
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
          navigate('/home/user');
        });

    }
  };

  const handleBack = () => {
    navigate("/home/user");
  };



  useEffect(() => {
    setEditedData({...obj});
  },[]);




  const renderFields = (fields) => {
    return fields.map((field) => (
      <div className="field" key={field.name}>
        
        <label>{field.label}:</label>
        {editing ? (
          field.options ? (
            <select
              value={editedData[field.name] || ''}
              onChange={(e) => handleEdit(field.name, e.target.value)}
              disabled={field.disabled}
            >
              <option value="">Seleccionar</option>
              {field.options.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={editedData[field.name] || ''}
              onChange={(e) => handleEdit(field.name, e.target.value)}
              disabled={field.disabled}
            />
          )
        ) : (
          <div onDoubleClick={() => setEditing(true)}>{editedData[field.name]}</div>
        )}
      </div>
    ));
  };






  return (
    <div className="card">
      <div className="card-header">
        <h2>Detalles del empleado</h2>
        <button className="close-btn" onClick={() => handleBack()}>X</button>
      </div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="TODOS">Seleccionar categoría</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <div className="card-body">

        {selectedCategory === "TODOS" && (
          <>
            <h3>Información personal</h3>
            {renderFields(fieldsPersonalInformation)}

            <h3>Puesto de trabajo</h3>
            {renderFields(fieldsJob)}

            <h3>Contacto</h3>
            {renderFields(fieldsContact)}

            <h3>Direccion</h3>
            {renderFields(fieldAdress)}

            {editedData.otraDireccion === 'SI' && (
              <>
                <h3>Direccion</h3>
                {renderFields(fieldAdress2)}
              </>
            )}

            <h3>Educacion</h3>
            {renderFields(education)}

            <h3>Datos bancarios</h3>
            {renderFields(bankData)}

            <h3>Talle de ropa</h3>
            {renderFields(clothingSize)}

          </>
        )}


        {selectedCategory === "fieldsPersonalInformation" && (
          <>
            <h3>Información personal</h3>
            {renderFields(fieldsPersonalInformation)}
          </>
        )}

        {selectedCategory === "fieldsJob" && (
          <>
            <h3>Puesto de trabajo</h3>
            {renderFields(fieldsJob)}
          </>
        )}

        {selectedCategory === "fieldsContact" && (
          <>
            <h3>Contacto</h3>
            {renderFields(fieldsContact)}
          </>
        )}

        {selectedCategory === "fieldAdress" && (
          <>
            <h3>Direccion</h3>
            {renderFields(fieldAdress)}
          </>
        )}

        {selectedCategory === "fieldAdress2" && (
          <>
            {editedData.otraDireccion === 'SI' && (
              <>
                <h3>Direccion</h3>
                {renderFields(fieldAdress2)}
              </>
            )}
          </>
        )}

        {selectedCategory === "education" && (
          <>
            <h3>Educacion</h3>
            {renderFields(education)}
          </>
        )}

        {selectedCategory === "bankData" && (
          <>
            <h3>Datos bancarios</h3>
            {renderFields(bankData)}
          </>
        )}

        {selectedCategory === "clothingSize" && (
          <>
            <h3>Talle de ropa</h3>
            {renderFields(clothingSize)}
          </>
        )}

      </div>

      <div className="card-footer">
        {editing && (
          <div className="edit-buttons">
            <button className="cancel-btn" onClick={handleDelete}>
              Eliminar empleado
            </button>
            <button className="save-btn" onClick={handleSave}>
              Guardar cambios
            </button>
            <button className="cancel-btn" onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        )}
      </div>
      {
        !editing ? <button className="save-btn" onClick={() => setEditing(true)}>Editar</button> : ''
      }
    </div>
  );
};

export default StaffDetail;

