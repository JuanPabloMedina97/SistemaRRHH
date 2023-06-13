import { useEffect, useState } from 'react';
import './StaffDetail.css';
import { useNavigate, useParams, } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePersonAction, getAllPersonAction, updatePersonAction } from '../../redux/actions';



const StaffDetail = ({ persona }) => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const fieldsPersonalInformation = [
    { label: 'Legajo', name: 'legajo', disabled: true },
    { label: 'DNI', name: 'dni', disabled: false },
    { label: 'CUIL', name: 'cuil', disabled: false },
    { label: 'Nombre', name: 'nombre', disabled: false },
    { label: 'Apellido', name: 'apellido', disabled: false },
    { label: 'Sexo', name: 'sexo', options: ['Masculino', 'Femenino'], disabled: false },
    { label: 'Estado Civil', name: 'estadoCivil', options: ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Separado/a'], disabled: false },
    { label: 'Edad', name: 'edad', disabled: false },
    { label: 'Nacimiento', name: 'nacimiento', disabled: false },
    { label: 'lentes', name: 'lentes', options: ['Si', 'No'], disabled: false },
    { label: 'Anti Gripal ultimo año', name: 'antiGripal', options: ['Si', 'No'], disabled: false },
    { label: 'Carnet de vacuna', name: 'carnetVacuna', options: ['Si', 'No'], disabled: false },
    { label: 'Tratamiento medico', name: 'tratamientoMedico', options: ['Si', 'No'], disabled: false },
    { label: 'Medicacion', name: 'medicacion', disabled: false },
    { label: 'Nombre Medicacion', name: 'nombreMedicacion', disabled: false },
    { label: 'Movilidad', name: 'movilidad', disabled: false },
  ];

  const fieldsJob = [
    { label: 'Sector', name: 'sector', options: ['Pregrado', 'Lab Calidad', 'Secadero', 'Deposito', 'Efluentes', 'Envasado', 'Finca', 'Administracion', 'Porteria', 'Recursos Humanos'], disabled: false },
    { label: 'Linea', name: 'linea', disabled: false },
    { label: 'Turno', name: 'turno', disabled: false },
    { label: 'Empresa', name: 'empresa', disabled: false },
    { label: 'Condicion', name: 'condicion', disabled: false },
    { label: 'Tipo de pago', name: 'tipoDePago', disabled: false },
    { label: 'Ingreso', name: 'ingreso', disabled: false },
    { label: 'Alta', name: 'alta', disabled: false },
    { label: 'Baja', name: 'baja', disabled: false },
    { label: 'Categoria', name: 'categoria', disabled: false },
    { label: 'Convenio', name: 'convenio', disabled: false },
    { label: 'Sindicato', name: 'sindicato', disabled: false },
    { label: 'Solidario', name: 'solidario', disabled: false },
    { label: 'Condicion citricola', name: 'condicionCitricola', disabled: false },
    { label: 'ART', name: 'art', disabled: false },
    { label: 'Carnet sanidad', name: 'carnetSanidad', disabled: false },
  ];

  const fieldsContact = [
    { label: 'Correo', name: 'correo', disabled: false },
    { label: 'Correo', name: 'correo2', disabled: false },
    { label: 'Numero de celular', name: 'numTelefono', disabled: false },
    { label: 'Numero de celular', name: 'numTelefono2', disabled: false },
    { label: 'Nombre de pariente', name: 'nombrePariente', disabled: false },
    { label: 'Numero de celular', name: 'numeroPariente', disabled: false },
    { label: 'Nombre de pariente', name: 'nombrePariente2', disabled: false },
    { label: 'Numero de pariente', name: 'numeroPariente2', disabled: false },
  ];

  const fieldAdress = [
    { label: 'Provincia', name: 'provincia', disabled: false },
    { label: 'Localidad', name: 'localidad', disabled: false },
    { label: 'Codigo Postal', name: 'cp', disabled: false },
    { label: 'Calle', name: 'calle', disabled: false },
    { label: 'N°', name: 'numeroCalle', disabled: false },
    { label: 'Piso', name: 'piso', disabled: false },
    { label: 'Departamento', name: 'dpto', disabled: false },
    { label: 'Barrio', name: 'barrio', disabled: false },
    { label: 'Entre calles', name: 'entreCalles', disabled: false },
    { label: 'Informacion adicional', name: 'indicacionAdicional', disabled: false },
    { label: '¿Posee otro domicilio?', name: 'otraDireccion', options: ['SI', 'NO'], disabled: false },
  ];



  const fieldAdress2 = [
    { label: 'Provincia', name: 'provincia2', disabled: false },
    { label: 'Localidad', name: 'localidad2', disabled: false },
    { label: 'Codigo Postal', name: 'cp2', disabled: false },
    { label: 'Calle', name: 'calle2', disabled: false },
    { label: 'N°', name: 'numeroCalle2', disabled: false },
    { label: 'Piso', name: 'piso2', disabled: false },
    { label: 'Departamento', name: 'dpto2', disabled: false },
    { label: 'Barrio', name: 'barrio2', disabled: false },
    { label: 'Entre calles', name: 'entreCalles2', disabled: false },
    { label: 'Informacion adicional', name: 'indicacionAdicional2', disabled: false },
  ];

  const education = [
    { label: 'Primaria', name: 'primaria', options: ['Incompleto', 'Completo', 'Cursando'], disabled: false },
    { label: 'Secundaria', name: 'secundaria', options: ['Incompleto', 'Completo', 'Cursando'], disabled: false },
    { label: 'Cursando', name: 'cursando', disabled: false },
    { label: 'Cursos', name: 'cursos', disabled: false },
  ];

  const bankData = [
    { label: 'Banco', name: 'banco', disabled: false },
    { label: 'CBU', name: 'cbu', disabled: false },
    { label: 'Alias', name: 'alias', disabled: false },
    { label: 'Medio de cobro', name: 'medioDeCobro', disabled: false },
    { label: 'Direccion del banco', name: 'direccionBancaria', disabled: false },
    { label: 'Direccion del banco', name: 'direccionBancariaDos', disabled: false },
    { label: 'Direccion del banco', name: 'direccionBancariaTres', disabled: false },
  ];

  const clothingSize = [
    { label: 'Camisa', name: 'pantalon', disabled: false },
    { label: 'Pantalon', name: 'camisa', disabled: false },
    { label: 'Botin', name: 'botin', disabled: false },
    { label: 'Mameluco', name: 'mameluco', disabled: false },
    { label: 'Zapatilla', name: 'zapatilla', disabled: false },
    { label: 'Botas de goma', name: 'botasGoma', disabled: false },
    { label: 'Gorra', name: 'gorra', disabled: false },
    { label: 'Campera', name: 'campera', disabled: false },
    { label: 'Remera', name: 'remera', disabled: false },
    { label: 'Chomba', name: 'chomba', disabled: false },
    { label: 'Equipo de lluvia', name: 'equipoLluvia', disabled: false },
    { label: 'Delantal', name: 'delantal', disabled: false },
    { label: 'Chaqueta de defensa', name: 'chaquetaDefensa', disabled: false },
  ];



  const { legajo, dni, cuil, nombre, apellido, informacionPersonalDos, puestoDeTrabajo, contacto, direccion, direccion2, educacion, datosBancarios, talleRopa, observacion } = persona;
  const { sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedicoMedicacion, movilidad } = informacionPersonalDos
  const { medicacion, nombreMedicacion, tratamientoMedico } = tratamientoMedicoMedicacion;
  const { sector, linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad } = puestoDeTrabajo;
  const { numTelefono, numTelefono2, correo, correo2, pariente, pariente2 } = contacto;
  const { nombrePariente, numeroPariente } = pariente;
  const { nombrePariente2, numeroPariente2 } = pariente2;
  const { barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion } = direccion
  const { barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2 } = direccion2
  const { cursando, cursos, primaria, secundaria } = educacion;
  const { alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro } = datosBancarios;
  const { botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla } = talleRopa;


  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    legajo: "", dni: "", cuil: "", nombre: "", apellido: "", sexo: "", estadoCivil: "", edad: "", nacimiento: "", lentes: "", antiGripal: "", carnetVacuna: "", tratamientoMedico: "", movilidad: "",
    sector: "", linea: "", turno: "", empresa: "", condicion: "", tipoDePago: "", ingreso: "", alta: "", baja: "", categoria: "", convenio: "", sindicato: "", solidario: "", condicionCitricola: "", art: "", carnetSanidad: "",
    correo: "", correo2: "", numTelefono: "", numTelefono2: "", nombrePariente: "", numeroPariente: "", nombrePariente2: "", numeroPariente2: "",
    barrio: "", calle: "", numeroCalle: "", cp: "", detalle: "", dpto: "", entreCalles: "", indicacionAdicional: "", localidad: "", piso: "", provincia: "", otraDireccion: "",
    barrio2: "", calle2: "", numeroCalle2: "", cp2: "", detalle2: "", dpto2: "", entreCalles2: "", indicacionAdicional2: "", localidad2: "", piso2: "", provincia2: "",
    cursando: '', cursos: '', primaria: '', secundaria: '',
    alias: '', banco: '', cbu: '', direccionBancaria: '', direccionBancariaDos: '', direccionBancariaTres: '', medioDeCobro: '',
    botasGoma: '', botin: '', camisa: '', campera: '', chaquetaDefensa: '', chomba: '', delantal: '', equipoLluvia: '', gorra: '', mameluco: '', pantalon: '', remera: '', zapatilla: ''
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
      legajo, dni, cuil, nombre, apellido, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
      sector, linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad,
      numTelefono, numTelefono2, correo, correo2, pariente, pariente2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
      barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion,
      barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2,
      cursando, cursos, primaria, secundaria,
      alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro,
      botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla,

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
      legajo, dni, cuil, nombre, apellido, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
      sector, linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad,
      numTelefono, numTelefono2, correo, correo2, pariente, pariente2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
      barrio, calle, numeroCalle, cp, detalle, dpto, entreCalles, indicacionAdicional, localidad, piso, provincia, otraDireccion,
      barrio2, calle2, numeroCalle2, cp2, detalle2, dpto2, entreCalles2, indicacionAdicional2, localidad2, piso2, provincia2,
      cursando, cursos, primaria, secundaria,
      alias, banco, cbu, direccionBancaria, direccionBancariaDos, direccionBancariaTres, medioDeCobro,
      botasGoma, botin, camisa, campera, chaquetaDefensa, chomba, delantal, equipoLluvia, gorra, mameluco, pantalon, remera, zapatilla,

    });
  }, [
    legajo, dni, cuil, nombre, apellido, sector, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
    linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad,
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


  const [selectedCategory, setSelectedCategory] = useState("TODOS");
  const categories = [
    { value: 'TODOS', label: 'TODOS' },
    { value: 'fieldsPersonalInformation', label: 'Información Personal' },
    { value: 'fieldsJob', label: 'Puesto de Trabajo' },
    { value: 'fieldsContact', label: 'Contacto' },
    { value: 'fieldAdress', label: 'Dirección' },
    { value: 'fieldAdress2', label: 'Otra Dirección' },
    { value: 'education', label: 'Educación' },
    { value: 'bankData', label: 'Datos Bancarios' },
    { value: 'clothingSize', label: 'Talle de Ropa' },
  ];

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
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

