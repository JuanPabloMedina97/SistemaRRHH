const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Nombre del host de la base de datos
  user: 'root', // Nombre de usuario de la base de datos
  password: 'Medina40530509**', // Contraseña de la base de datos
  database: 'PersonalRRHH', // Nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});


module.exports = connection;