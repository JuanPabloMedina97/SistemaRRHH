const express = require('express');
const userRoutes = express.Router();
const usuario = require('../models/createUserModel')

const empleadosController = require('../controllers/userController');




userRoutes.get('/home/user', async (req, res) => { //ruta para obtener los usuarios
    try {
        const result = await empleadosController.getUsers();
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
});

userRoutes.get('/home/user/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const user = await empleadosController.getUserDetail(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

userRoutes.post('/home/user', async (req, res) => { //ruta para crear un usuario
    try {
        const newUser = req.body;
        const createdUser = await usuario.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error al agregar el empleado:', error);
        res.status(500).json({ message: 'Error al agregar el empleado' }); 
    }
});

userRoutes.put('/home/user/:id', empleadosController.updateUser); //ruta para actualizar un usuario

userRoutes.delete('/home/user/:id', empleadosController.deleteUser);

module.exports = userRoutes;