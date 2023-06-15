import { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction, getPersonDetailAction } from '../../redux/actions';
import { fieldsPersonalInformation, fieldsJob, fieldAdress, fieldAdress2, fieldsContact, education, bankData, clothingSize, categories } from './Fields'
import RenderFields from './RenderFields';



const StaffDetail = ({ persona }) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {direccion} = persona;
  

  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  const handleEdit = (field, value) => {
    setEditedData({
      ...editedData,
      [field]: value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    console.log("ID", id);
    console.log("DATA MODIFICADA", editedData);
    dispatch(updatePersonAction(id, editedData))
      .then(() => {
        dispatch(getPersonDetailAction(id));
      });
  };

  const handleCancel = () => {
    setEditing(false);
    setEditedData(persona);
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };


  useEffect(() => {
    setEditedData(persona);
  }, [persona]);




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
            {RenderFields(fieldsPersonalInformation, editing, editedData, handleEdit,setEditing)}

            <h3>Puesto de trabajo</h3>
            {RenderFields(fieldsJob, editing, editedData, handleEdit,setEditing)}

            <h3>Contacto</h3>
            {RenderFields(fieldsContact, editing, editedData, handleEdit,setEditing)}

            <h3>Direccion</h3>
            {RenderFields(fieldAdress, editing, editedData, handleEdit,setEditing)}

            {editedData.otraDireccion === 'SI' && (
              <>
                <h3>Direccion</h3>
                {RenderFields(fieldAdress2, editing, editedData, handleEdit,setEditing)}
              </>
            )}

            <h3>Educacion</h3>
            {RenderFields(education, editing, editedData, handleEdit,setEditing)}

            <h3>Datos bancarios</h3>
            {RenderFields(bankData, editing, editedData, handleEdit,setEditing)}

            <h3>Talle de ropa</h3>
            {RenderFields(clothingSize, editing, editedData, handleEdit,setEditing)}

          </>
        )}


        {selectedCategory === "fieldsPersonalInformation" && (
          <>
            <h3>Información personal</h3>
            {RenderFields(fieldsPersonalInformation, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "fieldsJob" && (
          <>
            <h3>Puesto de trabajo</h3>
            {RenderFields(fieldsJob, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "fieldsContact" && (
          <>
            <h3>Contacto</h3>
            {RenderFields(fieldsContact, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "fieldAdress" && (
          <>
            <h3>Direccion</h3>
            {RenderFields(fieldAdress, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "fieldAdress2" && (
          <>
            {direccion.otraDireccion === 'SI' && (
              <>
                <h3>Direccion</h3>
                {RenderFields(fieldAdress2, editing, editedData, handleEdit,setEditing)}
              </>
            )}
          </>
        )}

        {selectedCategory === "education" && (
          <>
            <h3>Educacion</h3>
            {RenderFields(education, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "bankData" && (
          <>
            <h3>Datos bancarios</h3>
            {RenderFields(bankData, editing, editedData, handleEdit,setEditing)}
          </>
        )}

        {selectedCategory === "clothingSize" && (
          <>
            <h3>Talle de ropa</h3>
            {RenderFields(clothingSize, editing, editedData, handleEdit,setEditing)}
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

