const connection = require('../config/database');




const updateUser = (data) => {
    return new Promise((resolve, reject) => {
        const {
            nombre, apellido, dni, cuil,
            legajo, sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad,
            linea, turno, rotativo, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, sector, puesto, estadoEmpleado,
            provincia, localidad, cp, calle, numeroCalle, piso, dpto, barrio, detalle, entreCalles, indicacionAdicional, otraDireccion,
            provincia2, cp2, calle2, numeroCalle2, piso2, dpto2, barrio2, detalle2, entreCalles2, indicacionAdicional2,
            numTelefono, numTelefono2, correo, correo2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2,
            primaria, secundaria, nivelSuperior, cursando, cursos,
            banco, cbu, alias, medioDeCobro, direccionBancaria, direccionBancariaDos, direccionBancariaTres,
            pantalon, camisa, botin, mameluco, zapatilla, botasGoma, remera, chomba, equipoLluvia, delantal, chaquetaDefensa,
            fechaObservacion, descripcion
        } = data;
        console.log("Esta es la data que recibo para actualizar", data);

        // Actualizar campos en la tabla "empleados"
        const empleadoSql = `UPDATE empleados SET nombre = ?, apellido = ?, dni = ?, sector = ?, cuil = ? WHERE legajo = ?`;
        const empleadoValues = [nombre, apellido, dni, sector, cuil, legajo];
        connection.query(empleadoSql, empleadoValues, (error, empleadoResults) => {
            if (error) {
                reject(error);
            } else {
                // Actualizar campos en la tabla "informacionpersonal"
                const informacionPersonalSql = `UPDATE informacionpersonal SET sexo = ?, estadoCivil = ?, edad = ?, nacimiento = ?, lentes = ?, antiGripal = ?, carnetVacuna = ?, tratamientoMedico = ?, medicacion = ?, nombreMedicacion = ?, movilidad = ? WHERE legajo = ?`;
                const informacionPersonalValues = [sexo, estadoCivil, edad, nacimiento, lentes, antiGripal, carnetVacuna, tratamientoMedico, medicacion, nombreMedicacion, movilidad, legajo];
                connection.query(informacionPersonalSql, informacionPersonalValues, (error, informacionPersonalResults) => {
                    if (error) {
                        reject(error);
                    } else {
                        // Actualizar campos en la tabla "puestodetrabajo"
                        const puestoDeTrabajoSql = `UPDATE puestodetrabajo SET linea = ?, turno = ?, empresa = ?, condicion = ?, tipoDePago = ?, ingreso = ?, alta = ?, baja = ?, categoria = ?, sindicato = ?, solidario = ?, convenio = ?, condicionCitricola = ?, art = ?, carnetSanidad = ?, puesto = ?, rotativo = ?, estadoEmpleado = ? WHERE legajo = ?`;
                        const puestoDeTrabajoValues = [linea, turno, empresa, condicion, tipoDePago, ingreso, alta, baja, categoria, convenio, sindicato, solidario, condicionCitricola, art, carnetSanidad, puesto, rotativo, estadoEmpleado, legajo];
                        connection.query(puestoDeTrabajoSql, puestoDeTrabajoValues, (error, puestoDeTrabajoResults) => {
                            if (error) {
                                reject(error);
                            } else {
                                const direccionSql = `UPDATE direccion SET provincia = ?,localidad = ?, cp = ?, calle = ?, numeroCalle = ?, piso = ?, dpto = ?, barrio = ?, detalle = ?, entreCalles = ?, indicacionAdicional = ?, otraDireccion = ? WHERE legajo = ?`;
                                const direccionValues = [provincia, localidad, cp, calle, numeroCalle, piso, dpto, barrio, detalle, entreCalles, indicacionAdicional, otraDireccion, legajo];
                                connection.query(direccionSql, direccionValues, (error, direccionResults) => {
                                    if (error) {
                                        reject(error);
                                    } else {
                                        const direccionDosSql = `UPDATE direccion2 SET provincia2 = ?, cp2 = ?, calle2 = ?, numeroCalle2 = ?, piso2 = ?, dpto2 = ?, barrio2 = ?, detalle2 = ?, entreCalles2 = ?, indicacionAdicional2 = ? WHERE legajo = ?`;
                                        const direccionDosValues = [provincia2, cp2, calle2, numeroCalle2, piso2, dpto2, barrio2, detalle2, entreCalles2, indicacionAdicional2, legajo];
                                        connection.query(direccionDosSql, direccionDosValues, (error, direccionDosResults) => {
                                            if (error) {
                                                reject(error);
                                            } else {
                                                const contactoSql = `UPDATE contacto SET numTelefono = ?, numTelefono2 = ?, correo = ?, correo2 = ?, nombrePariente = ?, numeroPariente = ?, nombrePariente2 = ?, numeroPariente2 = ? WHERE legajo = ?`;
                                                const contactoValues = [numTelefono, numTelefono2, correo, correo2, nombrePariente, numeroPariente, nombrePariente2, numeroPariente2, legajo];
                                                connection.query(contactoSql, contactoValues, (error, contactoResults) => {
                                                    if (error) {
                                                        reject(error);
                                                    } else {
                                                        const educacionSql = `UPDATE educacion SET primaria = ?, secundaria = ?, nivelSuperior = ?, cursando = ?, cursos = ? WHERE legajo = ?`;
                                                        const educacionValues = [primaria, secundaria, nivelSuperior, cursando, cursos, legajo];
                                                        connection.query(educacionSql, educacionValues, (error, educacionResults) => {
                                                            if (error) {
                                                                reject(error);
                                                            } else {
                                                                const datosBancariosSql = `UPDATE datosbancarios SET banco = ?, cbu = ?, alias = ?, medioDeCobro = ?, direccionBancaria = ?, direccionBancariaDos = ?, direccionBancariaTres = ? WHERE legajo = ?`;
                                                                const datosBancariosValues = [banco, cbu, alias, medioDeCobro, direccionBancaria, direccionBancariaDos, direccionBancariaTres, legajo];
                                                                connection.query(datosBancariosSql, datosBancariosValues, (error, datosBancariosResults) => {
                                                                    if (error) {
                                                                        reject(error);
                                                                    } else {
                                                                        const talleRopaSql = `UPDATE talleropa SET pantalon = ?, camisa = ?, botin = ?, mameluco = ?, zapatilla = ?, botasGoma = ?, remera = ?, chomba = ?, equipoLluvia = ?, delantal = ?, chaquetaDefensa = ?  WHERE legajo = ?`;
                                                                        const talleRopaValues = [pantalon, camisa, botin, mameluco, zapatilla, botasGoma, remera, chomba, equipoLluvia, delantal, chaquetaDefensa, legajo];
                                                                        connection.query(talleRopaSql, talleRopaValues, (error, talleRopaResults) => {
                                                                            if (error) {
                                                                                reject(error);
                                                                            } else {
                                                                                const observacionesSql = `UPDATE observaciones SET fecha = ?, descripcion = ? WHERE legajo = ?`;
                                                                                const observacionesValues = [fechaObservacion, descripcion, legajo];
                                                                                connection.query(observacionesSql, observacionesValues, (error, observacionesResults) => {
                                                                                    if (error) {
                                                                                        reject(error);
                                                                                    } else {

                                                                                        // Finalmente, resuelve la promesa
                                                                                        const results = {
                                                                                            empleados: empleadoResults,
                                                                                            informacionpersonal: informacionPersonalResults,
                                                                                            puestodetrabajo: puestoDeTrabajoResults,
                                                                                            contacto: contactoResults,
                                                                                            datosbancarios: datosBancariosResults,
                                                                                            direccion: direccionResults,
                                                                                            direccionDosResults: direccionDosResults,
                                                                                            educacion: educacionResults,
                                                                                            observaciones: observacionesResults,
                                                                                            talleropa: talleRopaResults,
                                                                                        }
                                                                                        resolve(results);
                                                                                    };
                                                                                });
                                                                            };
                                                                        });
                                                                    };
                                                                });
                                                            };
                                                        });
                                                    };
                                                });
                                            };
                                        });
                                    };
                                });
                            };
                        });
                    };
                });
            };
        });
    });
};

module.exports = {
    updateUser
};

