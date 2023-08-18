const connection = require('../config/database');


function deletePerson(legajo) {
    return new Promise((resolve, reject) => {
        console.log(legajo);
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
    deletePerson
}