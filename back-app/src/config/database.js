const mysql = require('mysql2');
require('dotenv').config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbDataBase = process.env.DB_DATABASE;
const dbPort = process.env.DB_PORT;

const connection = mysql.createConnection({
  host: dbHost, // Nombre del host de la base de datos
  user: dbUser, // Nombre de usuario de la base de datos
  password: dbPassword, // Contraseña de la base de datos
  database: dbDataBase, // Nombre de la base de datos
  port: dbPort
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});


module.exports = connection;