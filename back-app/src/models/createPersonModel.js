const connection = require('../config/database');


const person = {};

person.createPerson = (dataPerson) => {
    try {
        const legajo = dataPerson.legajo;
        const query = 'INSERT INTO empleados SET ?';
        const result = connection.query(query, dataPerson);

        // Insertar en la tabla puestoDeTrabajo
        const puestoDeTrabajoQuery = 'INSERT INTO puestoDeTrabajo (legajo) VALUES (?)';
        connection.query(puestoDeTrabajoQuery, [legajo]);

        // Insertar en la tabla direccion
        const direccionQuery = 'INSERT INTO direccion (legajo) VALUES (?)';
        connection.query(direccionQuery, [legajo]);

        // Insertar en la tabla direccion2
        const direccion2Query = 'INSERT INTO direccion2 (legajo) VALUES (?)';
        connection.query(direccion2Query, [legajo]);

        // Insertar en la tabla informacionPersonal
        const informacionPersonalQuery = 'INSERT INTO informacionPersonal (legajo) VALUES (?)';
        connection.query(informacionPersonalQuery, [legajo]);

        // Insertar en la tabla datosbancarios
        const datosBancariosQuery = 'INSERT INTO datosbancarios (legajo) VALUES (?)';
        connection.query(datosBancariosQuery, [legajo]);

        // Insertar en la tabla educacion
        const educacionQuery = 'INSERT INTO educacion (legajo) VALUES (?)';
        connection.query(educacionQuery, [legajo]);

        // Insertar en la tabla talleropa
        const talleropaQuery = 'INSERT INTO talleropa (legajo) VALUES (?)';
        connection.query(talleropaQuery, [legajo]);

        // Insertar en la tabla observaciones
        const observacionesQuery = 'INSERT INTO observaciones (legajo) VALUES (?)';
        connection.query(observacionesQuery, [legajo]);

        // Insertar en la tabla observaciones
        const contactoQuery = 'INSERT INTO contacto (legajo) VALUES (?)';
        connection.query(contactoQuery, [legajo]);


        const createdPerson = {
            legajo: result.legajo,
            ...dataPerson
        };

        return createdPerson;
    } catch (error) {
        throw error;
    };
};


module.exports = person;