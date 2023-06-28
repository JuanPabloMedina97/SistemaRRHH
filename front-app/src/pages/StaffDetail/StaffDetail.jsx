import { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction } from '../../redux/actions';
import { fieldsPersonalInformation, fieldsJob, fieldsContact, fieldAdress, fieldAdress2, education, bankData, clothingSize, categories } from './fields';



const StaffDetail = ({ persona }) => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("TODOS");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  

  const { legajo, dni, cuil, nombre, apellido, informacionPersonalDos, puestoDeTrabajo, contacto, direccion, direccion2, educacion, datosBancarios, talleRopa, observacion } = persona;
  const { sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedicoMedicacion, movilidad } = informacionPersonalDos
  const { medicacion, nombreMedicacion, tratamientoMedico } = tratamientoMedicoMedicacion;
  const { sector, linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, estadoEmpleado, puesto, rotativo } = puestoDeTrabajo;
  const { numTelefono, numTelefono2, correo, correo2, pariente, pariente2 } = contacto;
  const { nombrePariente, numeroPariente } = pariente;
  const { nombrePariente2, numeroPariente2 } = pariente2;
  const { barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion } = direccion
  const { barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2 } = direccion2
  const { cursando, cursos, primaria, secundaria } = educacion;
  const { alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro } = datosBancarios;
  const { botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla } = talleRopa;
  




  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({...persona});


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
          navigate('/user');
        });

    }
  };

  const handleBack = () => {
    navigate("/user");
  };



  useEffect(() => {
    setEditedData({
      legajo, dni, cuil, nombre, apellido, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
      sector, linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, estadoEmpleado, puesto, rotativo,
      numTelefono, numTelefono2, correo, correo2, pariente, pariente2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
      barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion,
      barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2,
      cursando, cursos, primaria, secundaria,
      alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro,
      botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla,

    });
  }, [
    legajo, dni, cuil, nombre, apellido, sector, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
    linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, estadoEmpleado, puesto, rotativo,
    numTelefono, numTelefono2, correo, correo2, pariente, pariente2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
    barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion,
    barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2,
    cursando, cursos, primaria, secundaria,
    alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro,
    botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla,

  ]);




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

            {otraDireccion === 'SI' && (
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
            {otraDireccion === 'SI' && (
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

