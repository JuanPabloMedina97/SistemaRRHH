const express = require('express');
const personRoutes = express.Router();
const person = require('../models/createPersonModel')

const empleadosController = require('../controllers/personController');




personRoutes.get('/user', async (req, res) => { //ruta para obtener los usuarios
    try {
        const result = await empleadosController.getPerson();
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los empleados' });
    }
});

personRoutes.get('/user/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const person = await empleadosController.getPersonDetail(id);
      if (person) {
        res.json(person);
      } else {
        res.status(404).json({ message: 'Persona no encontrada' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

personRoutes.post('/user', async (req, res) => { //ruta para crear un usuario
    try {
        const newPerson = req.body;
        const createdPerson = await person.createPerson(newPerson);
        res.status(201).json(createdPerson);
    } catch (error) {
        console.error('Error al agregar el empleado:', error);
        res.status(500).json({ message: 'Error al agregar el empleado' }); 
    }
});

personRoutes.put('/user/:id', empleadosController.updatePerson); //ruta para actualizar un usuario

personRoutes.delete('/user/:id', empleadosController.deletePerson);

module.exports = personRoutes;