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

function getUserDetail(id) {
  return new Promise((resolve, reject) => {

    const query = `SELECT * FROM empleados e
    LEFT JOIN puestoDeTrabajo pt ON e.legajo = pt.legajo
    LEFT JOIN direccion d ON e.legajo = d.legajo
    LEFT JOIN direccion2 d2 ON e.legajo = d2.legajo
    LEFT JOIN contacto c ON e.legajo = c.legajo
    LEFT JOIN informacionPersonal ip ON e.legajo = ip.legajo
    LEFT JOIN datosbancarios db ON e.legajo = db.legajo
    LEFT JOIN educacion ed ON e.legajo = ed.legajo
    LEFT JOIN talleropa tr ON e.legajo = tr.legajo
    LEFT JOIN observaciones ob ON e.legajo = ob.legajo
    WHERE e.legajo = ${id}`



    // // const query = 'SELECT * FROM empleados';
    // connection.query(query, (err, results) => {
    //   if (err) {
    //     console.log("Error al obtener los empleados: ", err);
    //     reject(err);
    //     return;
    //   }
    //   resolve(results);
    // });
    connection.query(query, (err, results) => {
      if (err) {
        console.log("Error al obtener los empleados: ", err);
        reject(err);
        return;
      }

      if (results.length === 0) {
        resolve([]); // No se encontraron empleados con ese ID
        return;
      }


      const empleados = results.map((row) => {
        const {
          legajo, cuil, dni, nombre, apellido, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
          sector, linea, puesto, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, carnetManipuladorAlimentos, estadoEmpleado, rotativo,
          provincia, localidad, cp, calle, numeroCalle, piso, dpto, barrio, detalle, entreCalles, indicacionAdicional, otraDireccion,
          provincia2, localidad2, cp2, calle2, numeroCalle2, piso2, dpto2, barrio2, detalle2, entreCalles2, indicacionAdicional2,
          numTelefono, numTelefono2, correo, correo2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
          primaria, secundaria, terciario, cursando, cursos,
          banco, cbu, alias, medioDeCobro, direccionBancaria, direccionBancariaDos, direccionBancariaTres,
          pantalon, camisa, botin, mameluco, zapatilla, botasGoma, gorra, campera, remera, chomba, equipoLluvia, delantal, chaquetaDefensa,
          descripcion, fecha,
        } = row;

        const empleado = {
          legajo,
          dni,
          cuil,
          nombre,
          apellido,
          puestoDeTrabajo: {
            sector,
            linea,
            puesto,
            turno,
            empresa,
            condicion,
            tipoDePago,
            ingreso,
            alta,
            baja,
            categoria,
            convenio,
            sindicato,
            solidario,
            condicionCitricola,
            art,
            carnetSanidad,
            carnetManipuladorAlimentos,
            estadoEmpleado,
            rotativo
          },
          direccion: {
            provincia,
            localidad,
            cp,
            calle,
            numeroCalle,
            piso,
            dpto,
            barrio,
            detalle,
            entreCalles,
            indicacionAdicional,
            otraDireccion
          }, direccion2: {
            provincia2,
            localidad2,
            cp2,
            calle2,
            numeroCalle2,
            piso2,
            dpto2,
            barrio2,
            detalle2,
            entreCalles2,
            indicacionAdicional2,
          },
          contacto: {
            numTelefono,
            numTelefono2,
            correo,
            correo2,
            pariente: {
              nombrePariente,
              numeroPariente,
            },
            pariente2: {
              nombrePariente2,
              numeroPariente2,
            },
          },
          informacionPersonalDos: {
            sexo,
            estadoCivil,
            edad,
            nacimiento,
            lentes,
            antiGripal,
            carnetVacuna,
            tratamientoMedicoMedicacion: {
              tratamientoMedico,
              medicacion,
              nombreMedicacion,
            },
            movilidad,
          },
          educacion: {
            primaria,
            secundaria,
            terciario,
            cursando,
            cursos,
          },
          datosBancarios: {
            banco,
            cbu,
            alias,
            medioDeCobro,
            direccionBancaria,
            direccionBancariaDos,
            direccionBancariaTres,
          },
          talleRopa: {
            pantalon,
            camisa,
            botin,
            mameluco,
            zapatilla,
            botasGoma,
            gorra,
            campera,
            remera,
            chomba,
            equipoLluvia,
            delantal,
            chaquetaDefensa,
          },
          observacion: [
            {
              fecha: fecha,
              descripcion: descripcion,
            },
          ],
        };

        return empleado;
      });

      resolve(empleados);
    });

  });
};



module.exports = {
  getUsers,
  getUserDetail
}