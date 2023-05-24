const connection = require('../config/database');





const updateUser = (data) => {
    return new Promise((resolve, reject) => {
        // Realizar la consulta SQL para actualizar los datos del empleado
        const sql = `UPDATE empleados SET nombre = ?, apellido = ?, dni = ?, sector = ?, cuil = ? WHERE legajo = ?`;
        const values = [data.nombre, data.apellido, data.dni, data.sector, data.cuil, data.legajo];

        connection.query(sql, values, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = {
    updateUser
};