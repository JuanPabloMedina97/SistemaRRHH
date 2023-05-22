const express = require('express');
const userRoutes = express.Router();
const data = require('../data');


userRoutes.get('/', (req, res)=>{
    res.json(data);
});

module.exports = userRoutes;