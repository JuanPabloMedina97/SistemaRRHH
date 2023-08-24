import { useEffect, useState } from 'react';
import styles from './StaffDetail.module.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction } from '../../redux/actions';
import { fieldsPersonalInformation, fieldsJob, fieldsContact, fieldAdress, fieldAdress2, education, bankData, clothingSize, categories } from './fields';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'


const StaffDetail = ({ persona }) => {

  const { id } = useParams(); //traigo el id del params
  const dispatch = useDispatch(); //preparamos el dispatch para empezar a usarlo
  const navigate = useNavigate();
  const [editing, setEditing] = useState(false); //modo editar en falso
  const [editedData, setEditedData] = useState({ ...persona }); //traemos el objeto original y lo copiamos en editedData para poder editarlo sin modificar el original directamente





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

  const handleSave = () => {
    setEditing(false);

    Swal.fire({
      title: 'Guardando cambios...',
      allowOutsideClick: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    dispatch(updatePersonAction(editedData))
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Cambios guardados exitosamente',
        });
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al guardar los cambios',
        });
      });
  };

  const handleDelete = async () => {
    
    const confirmed = await Swal.fire({
      title: '¿Estás seguro de eliminar al empleado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });
    
    if (confirmed.isConfirmed) {
      // Muestra el cuadro de diálogo "Eliminando empleado..."
      const deletingAlert = Swal.fire({
        title: 'Eliminando empleado...',
        allowOutsideClick: false,
        showConfirmButton: true, // No mostrar el botón OK en este cuadro de diálogo
      });
  
      try {
        await dispatch(deletePersonAction(id));
        await dispatch(getAllPersonAction());
  
        // Cierra el cuadro de diálogo "Eliminando empleado..."
        deletingAlert.close();
  
        // Muestra un mensaje de éxito
        Swal.fire({
          icon: 'success',
          title: 'Empleado eliminado exitosamente',
          showConfirmButton: true,
          confirmButtonText: 'OK',
        });
  
        // Realiza la redirección
        navigate('/home/user');
      } catch (error) {
        // Cierra el cuadro de diálogo "Eliminando empleado..."
        deletingAlert.close();
  
        // Muestra un mensaje de error
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error al eliminar al empleado',
        });
      }
    }
  };

  const handleBack = () => {

    navigate('/home/user');

  };

  const handleCancelEditing = () => {
    if (editing) {
      Swal.fire({
        title: '¿Estás seguro de cancelar la edición?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setEditing(false); // Desactiva la edición al confirmar la cancelación.

        }
      });
    }
  }



  useEffect(() => {
    setEditedData({ ...persona });

  }, [persona]);


  const renderFields = (fields) => {
    return fields.map((field) => (
      <div className={styles.field} key={field.name}>

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
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2>Detalles del empleado</h2>
        <button className={styles.cancelBtn} onClick={() => handleBack()}>Atrás</button>
      </div>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="TODOS">Seleccionar categoría</option>
        {categories.map((category) => (
          <option key={category.value} value={category.value}>
            {category.label}
          </option>
        ))}
      </select>

      <div className={styles.cardBody}>

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

      <div className={styles.cardFooter}>
        {editing && (
          <div className={styles.editButtons}>
            <button className={styles.cancelBtn} onClick={handleDelete}>
              Eliminar empleado
            </button>
            <button className={styles.saveBtn} onClick={handleSave}>
              Guardar cambios
            </button>
            <button className={styles.cancelBtn} onClick={handleCancelEditing}>
              Cancelar
            </button>
          </div>
        )}
      </div>
      {
        !editing ? <button className={styles.saveBtn} onClick={() => setEditing(true)}>Editar</button> : ''
      }
    </div>
  );
};

export default StaffDetail;

