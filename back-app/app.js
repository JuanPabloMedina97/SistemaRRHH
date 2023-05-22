const express = require('express');
const server = express();
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes'); //trae el listado de personas (solo para mostrar lo principal, el detalle va en otra ruta)

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));

server.use('/user', userRoutes);

server.listen(3001, ()=>{
    console.log("Servidor con express corriendo en el puerto 3001");
});