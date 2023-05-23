const express = require('express');
const userRoutes = express.Router();

const empleadosController = require('../controllers/userController')

userRoutes.get('/user', async (req, res) => {
    try {
        const result = await empleadosController.getUsers();
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
});

userRoutes.get('/user/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const user = await empleadosController.getUsers();
        const result = user.find( persona => persona.legajo == id);
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Persona no encontrada' });
    }
});

module.exports = userRoutes;