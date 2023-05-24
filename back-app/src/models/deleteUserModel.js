const connection = require('../config/database');


function deleteUser(legajo) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM empleados WHERE legajo = ?`;

        connection.query(query, [legajo], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    deleteUser
}