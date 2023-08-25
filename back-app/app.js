const express = require('express');
const server = express();
const morganMiddleware = require('./src/middlewares/morgan');
const corsMiddleware = require('./src/middlewares/cors');
const expressJsonMiddleware = require('./src/middlewares/expressJson');
const personRoutes = require('./src/routes/personRoutes'); //trae el listado de personas (solo para mostrar lo principal, el detalle va en otra ruta)
const authRoutes = require('./src/routes/authRoutes');


server.use(corsMiddleware);
server.use(expressJsonMiddleware);
server.use(morganMiddleware);


//ruta para obetener a las personas, usuarios por id, crearlos, actualizarlos y eliminarlos
server.use('/home', personRoutes);

//ruta para la autenticacion
server.use('/auth', authRoutes);



server.listen(3001, '143.0.66.114', () => {
    console.log("Servidor con express corriendo en el puerto 3001");
});