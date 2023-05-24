const connection = require('../config/database');


const usuario = {};

usuario.createUser = async (dataUser) => {
    try {
        const query = 'INSERT INTO empleados SET ?';
        const result = await connection.query(query, dataUser);

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