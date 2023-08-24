const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '143.0.66.114', // Nombre del host de la base de datos
  user: 'root', // Nombre de usuario de la base de datos
  password: 'Pentagono767*', // Contraseña de la base de datos
  database: 'rrhh', // Nombre de la base de datos
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});


module.exports = connection;