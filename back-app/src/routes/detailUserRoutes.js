const express = require('express');
const detailUserRoutes = express.Router();
const data = require('../data');

detailUserRoutes.get('/:id',(req, res)=>{
    const {id} = req.params;
    
    const result = data.find(persona => persona.legajo == id);

    if(!result) return res.status(404).json({error: "Persona no encontrada"});

    res.json(result);
});


module.exports = detailUserRoutes;