const express = require('express');
const userRoutes = express.Router();
const data = require('../data');


userRoutes.get('/', (req, res)=>{
    res.json(data);
});



// userRoutes.get('/:id', (req, res) => {

//     const { id } = req.params;

//     if (id == 23) {
//         const user = {
//             "nombre": "Juan",
//             "apellido": "medina",
//             "Edad": 25,
//             "id": 23
//         }

//         return res.json(user)
//     }

//     res.status(404).send("hubo un error")

// });

// userRoutes.get('/', (req, res) => {
//     const { name } = req.query;

//     if (name) {
//         return res.send(`Me mandaron este name: ${name}`)
//     }
//     return res.send(`no hay name pero igual funciono`)
// })

// const usuarios = [];
// let id = 0;

// userRoutes.post('/posteo', (req, res) => {
//     console.log(req.body);


//     const { name, alumnos } = req.body;

//     const newUser = {
//         id: ++id,
//         name,
//         alumnos
//     }

//     usuarios.push(newUser);

//     res.send(usuarios);

// })

module.exports = userRoutes;