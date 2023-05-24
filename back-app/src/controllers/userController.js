const Empleados = require('../models/userModel');
const updateUserModel = require('../models/updateUserModel');
const deleteUserModel = require('../models/deleteUserModel');


async function getUsers() {
    try {
        const result = await Empleados.getUsers();
        return result;
    } catch (error) {
        console.log(error);
        return error
    };
};

const updateUser = (req, res) => {
    const { nombre, apellido, dni, sector, cuil, legajo } = req.body;

    const user = {
        nombre,
        apellido,
        dni,
        sector,
        cuil,
        legajo
    };

    updateUserModel.updateUser(user)
        .then(() => {
            res.status(200).json({ message: 'Empleado actualizado correctamente' });
        })
        .catch(error => {
            console.error('Error al actualizar el empleado:', error);
            res.status(500).json({ error: 'Ocurrió un error al actualizar el empleado' });
        });
};

const deleteUser = async (req, res) => {
    try {
      const legajo = req.params.id;
      console.log(req.params);
      
  
      // Realizar la operación de eliminación utilizando tu modelo o clase de acceso a datos
      await deleteUserModel.deleteUser(legajo);
  
      res.json({ mensaje: `Empleado con el legajo ${legajo} eliminado correctamente`});
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: 'Error al eliminar el empleado' });
    }
  };

module.exports = {
    getUsers,
    updateUser,
    deleteUser
}