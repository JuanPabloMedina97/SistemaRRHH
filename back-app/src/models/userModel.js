const connection = require('../config/database');

function getUsers() {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM empleados';
    connection.query(query, (err, results) => {
      if (err) {
        console.log("Error al obtener los empleados: ", err);
        reject(err);
        return;
      }
      resolve(results);
    });
  });
};



module.exports = {
  getUsers
}