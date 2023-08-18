const Empleados = require('../models/personModel');
const updatePersonModel = require('../models/updatePersonModel');
const deletePersonModel = require('../models/deletePersonModel');


async function getPerson() {
    try {
        const result = await Empleados.getPerson();
        return result;
    } catch (error) {
        console.log(error);
        return error
    };
};

async function getPersonDetail(id) {
    try {
        const result = await Empleados.getPersonDetail(id);
        return result;
    } catch (error) {
        console.log(error);
        return error
    };
};

const updatePerson = (req, res) => {
    const { nombre, apellido, dni, sector, cuil, legajo, ...extraData } = req.body;

    const person = {
        nombre,
        apellido,
        dni,
        sector,
        cuil,
        legajo,
        ...extraData
    };

    updatePersonModel.updatePerson(person)
        .then(() => {
            res.status(200).json({ message: 'Empleado actualizado correctamente' });
        })
        .catch(error => {
            console.error('Error al actualizar el empleado:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar el empleado' });
        });
};

const deletePerson = async (req, res) => {
    try {
      const legajo = req.params.id;
      console.log(req.params);
      
  
      // Realizar la operación de eliminación utilizando tu modelo o clase de acceso a datos
      await deletePersonModel.deletePerson(legajo);
  
      res.json({ mensaje: `Empleado con el legajo ${legajo} eliminado correctamente`});
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
    }
  };

module.exports = {
    getPerson,
    updatePerson,
    deletePerson,
    getPersonDetail
}