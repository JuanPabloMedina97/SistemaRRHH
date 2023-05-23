const express = require('express');
const server = express();
const morganMiddleware = require('./src/middlewares/morgan');
const corsMiddleware = require('./src/middlewares/cors');
const expressJsonMiddleware = require('./src/middlewares/expressJson');
const userRoutes = require('./src/routes/userRoutes'); //trae el listado de personas (solo para mostrar lo principal, el detalle va en otra ruta)



server.use(corsMiddleware);
server.use(expressJsonMiddleware);
server.use(morganMiddleware);


//ruta para obetener los usuarios y usuarios por id
server.use('/', userRoutes);



server.listen(3001, ()=>{
    console.log("Servidor con express corriendo en el puerto 3001");
});