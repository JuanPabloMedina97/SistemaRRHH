const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes'); //trae el listado de personas (solo para mostrar lo principal, el detalle va en otra ruta)
const detailUserRoutes = require('./src/routes/detailUserRoutes');



server.use(cors());
server.use(express.json());
server.use(morgan('dev'));



//ruta para obetener los usuarios
server.use('/user', userRoutes);

//ruta para obtener un usuario por su id
server.use('/user/', detailUserRoutes);




server.listen(3001, ()=>{
    console.log("Servidor con express corriendo en el puerto 3001");
});