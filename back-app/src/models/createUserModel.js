const connection = require('../config/database');


const usuario = {};

usuario.createUser = async (dataUser) => {
    try {
        const legajo = dataUser.legajo;
        const query = 'INSERT INTO empleados SET ?';
        const result = await connection.query(query, dataUser);
        
        // Insertar en la tabla puestoDeTrabajo
        const puestoDeTrabajoQuery = 'INSERT INTO puestoDeTrabajo (legajo) VALUES (?)';
        await connection.query(puestoDeTrabajoQuery, [legajo]);

        // Insertar en la tabla direccion
        const direccionQuery = 'INSERT INTO direccion (legajo) VALUES (?)';
        await connection.query(direccionQuery, [legajo]);

        // Insertar en la tabla direccion2
        const direccion2Query = 'INSERT INTO direccion2 (legajo) VALUES (?)';
        await connection.query(direccion2Query, [legajo]);

        // Insertar en la tabla informacionPersonal
        const informacionPersonalQuery = 'INSERT INTO informacionPersonal (legajo) VALUES (?)';
        await connection.query(informacionPersonalQuery, [legajo]);

        // Insertar en la tabla datosbancarios
        const datosBancariosQuery = 'INSERT INTO datosbancarios (legajo) VALUES (?)';
        await connection.query(datosBancariosQuery, [legajo]);

        // Insertar en la tabla educacion
        const educacionQuery = 'INSERT INTO educacion (legajo) VALUES (?)';
        await connection.query(educacionQuery, [legajo]);

        // Insertar en la tabla talleropa
        const talleropaQuery = 'INSERT INTO talleropa (legajo) VALUES (?)';
        await connection.query(talleropaQuery, [legajo]);

        // Insertar en la tabla observaciones
        const observacionesQuery = 'INSERT INTO observaciones (legajo) VALUES (?)';
        await connection.query(observacionesQuery, [legajo]);

        // Insertar en la tabla observaciones
        const contactoQuery = 'INSERT INTO contacto (legajo) VALUES (?)';
        await connection.query(contactoQuery, [legajo]);


        const createdUser = {
            legajo: result.legajo,
            ...dataUser
        };

        return createdUser;
    } catch (error) {
        throw error;
    };
};

module.exports = usuario;