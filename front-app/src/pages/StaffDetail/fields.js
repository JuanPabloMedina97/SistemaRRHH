const fieldsPersonalInformation = [
    { label: 'Legajo', name: 'legajo', disabled: true },
    { label: 'DNI', name: 'dni', disabled: true },
    { label: 'CUIL', name: 'cuil', disabled: true },
    { label: 'Nombre', name: 'nombre', disabled: true },
    { label: 'Apellido', name: 'apellido', disabled: true },
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
    { label: 'Sector', name: 'sector', options: ['Administracion', 'Autoelevador', 'Centrifugas', 'Compras', 'Concentrador', 'Depósito', 'Descerado', 'Despacho', 'Destilador', 'Electricidad', 'Envasado', 'Extractoras', 'Finca', 'Intendencia', 'Jefe de planta', 'Lab Calidad', 'Ma y Efluentes', 'Mandos medios', 'Mecánico', 'Pintura', 'Porteria', 'Pregrado', 'Secadero', 'Sistemas', 'Volcador'], disabled: false },
    { label: 'Linea', name: 'linea', options: ['Autoelevador', 'Balanza', 'Centrifugas', 'Concentrador', 'Descarte', 'Descerado', 'Destilador', 'EDA', 'Electrico', 'Envasado', 'Envasado de jugo', 'Espacios verdes', 'Extractoras de copa', 'Gestion de calidad', 'Hornos', 'Intendencia', 'Laboratorio', 'Limpieza', 'Mecanico', 'Medio ambiente', 'Personal', 'Pinturas', 'Porteria', 'Produccion', 'Proveedores', 'Prueba', 'Sistemas', 'Volcado'], disabled: false },
    { label: 'Puesto', name: 'puesto', options: ['Analista', 'Ayudante', 'Coordinador', 'Jefe', 'Limpieza', 'Operador', 'Responsable', 'Supervisor'], disabled: false },
    { label: 'Turno', name: 'turno', options: ['Mañana', 'Tarde', 'Noche'], disabled: false },
    { label: 'Rotativo', name: 'rotativo', options: ['Si', 'No'], disabled: false },
    { label: 'Empresa', name: 'empresa', options: ['Acheral S.A', 'Noben SRL', 'VEGA'], disabled: false },
    { label: 'Condicion', name: 'condicion', options: ['Temporario', 'Permanente'], disabled: false },
    { label: 'Tipo de pago', name: 'tipoDePago', options: ['Mensual', 'Por Hora'], disabled: false },
    { label: 'Ingreso', name: 'ingreso', placeholder: 'Fecha de inicio de actividades', disabled: false },
    { label: 'Alta', name: 'alta', placeholder: 'Fecha de inicio de temporada', disabled: false },
    { label: 'Baja', name: 'baja', placeholder: 'Fecha de baja de temporada', disabled: false },
    { label: 'Categoria', name: 'categoria', disabled: false },
    { label: 'Convenio', name: 'convenio', options: ['Alimentacion', 'Agrario'], disabled: false },
    { label: 'Sindicato', name: 'sindicato', options: ['Si', 'No'], disabled: false },
    { label: 'Solidario', name: 'solidario', options: ['Si', 'No'], disabled: false },
    { label: 'Condicion citricola', name: 'condicionCitricola', disabled: true },
    { label: 'ART', name: 'art', options: ['Asociar', 'Prevencion'], disabled: false },
    { label: 'Carnet sanidad', name: 'carnetSanidad', disabled: false },
    { label: 'ESTADO', name: 'estadoEmpleado', options: ['ACTIVO', 'INACTIVO', 'DESPEDIDO'], disabled: false },
];

const fieldsContact = [
    { label: 'Correo Acheral', name: 'correo', disabled: false },
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




  export {fieldsPersonalInformation, fieldsJob, fieldsContact, fieldAdress, fieldAdress2, education, bankData, clothingSize, categories};