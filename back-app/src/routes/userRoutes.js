const express = require('express');
const userRoutes = express.Router();
const usuario = require('../models/createUserModel')

const empleadosController = require('../controllers/userController');




userRoutes.get('/user', async (req, res) => { //ruta para obtener los usuarios
    try {
        const result = await empleadosController.getUsers();
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
});

userRoutes.get('/user/:id', async (req, res) => { //ruta para obtener el detalle de un usuario por su id (legajo)
    try {
        const { id } = req.params;
        const user = await empleadosController.getUsers();
        const result = user.find(persona => persona.legajo == id);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Persona no encontrada' });
    }
});

userRoutes.post('/user', async (req, res) => { //ruta para crear un usuario
    try {
        const newUser = req.body;
        const createdUser = await usuario.createUser(newUser);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Error al agregar el empleado:', error);
        res.status(500).json({ message: 'Error al agregar el empleado' }); 
    }
});

userRoutes.put('/user/:id', empleadosController.updateUser); //ruta para actualizar un usuario

userRoutes.delete('/user/:id', empleadosController.deleteUser);

module.exports = userRoutes;