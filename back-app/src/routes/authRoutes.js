const express = require('express');
const bcrypt = require('bcrypt');
const connection = require('../config/database');


const router = express.Router();

//Ruta para el registro de usuarios
router.post('/register', async (req, res) => {
    try {
        const { legajo, contrasena, nombre, apellido, usuario, correo, tipoDeUsuario, isActive } = req.body; //traemos el usuario y contraseña del front
        const [existingUser] = await connection.promise().query( //consultamos si el usuario ya existe
            'SELECT * FROM usuarios WHERE usuario = ? OR correo = ? OR legajo = ?',
            [usuario, correo, legajo]

        );
        if (existingUser.length > 0) { //en el caso de que exista, lance error
            return res.status(409).json({ message: 'El usuario ya existe' });
        }


        //encriptamos la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        await connection.promise().query(
            'INSERT INTO usuarios (legajo, usuario, contraseña, nombre, apellido, correo, tipoDeUsuario, isActive) VALUES (?, ?, ?, ?, ?, ?, ? ,?)',
            [legajo, usuario, hashedPassword, nombre, apellido, correo, tipoDeUsuario, isActive]
        )

        return res.status(201).json({ message: 'Usuario registrado exitosamente' })

    } catch (error) {
        console.error('Error en el registro:', error);
        return res.status(500).json({ message: 'Error en el registro' });
    }
})


//Ruta para la autenticacion e inicio de sesion
router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(req.body);

        //se busca el usuario en la base de datos
        const [users] = await connection.promise().query(
            'SELECT * FROM usuarios WHERE usuario = ? OR correo = ?',
            [username, username]
        );

        if (users.length === 0) {
            return res.status(401).json({ message: 'Credenciales invalidas' });
        }

        const user = users[0];


        //se compara la contraseña ingresada con la almacenada en la base de datos
        const isPasswordValid = await bcrypt.compare(password, user.contraseña);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales invalidas' });
        }

        await connection.promise().query(
            'UPDATE usuarios SET isActive = 1 WHERE usuario = ?',
            [username]
        )

        console.log(user);

        return res.status(200).json({ message: 'Inicio de sesion exitoso', nombre: user.nombre, usuario: user.usuario, isActive: user.isActive });
    } catch (error) {
        console.error('Error en el inicio de sesion: ', error)
        return res.status(500).json({ messaje: 'Error en el inicio de sesion' })
    }
});

router.get('/isactive/:usuario', async (req, res) => {
    try {
        const usuario = req.params.usuario;
        // Realiza una consulta a la base de datos para obtener el estado isActive del usuario
        const [user] = await connection.promise().query(
            'SELECT nombre, usuario, isActive FROM usuarios WHERE usuario = ? or correo = ?',
            [usuario, usuario]
        );


        if (!user) {
            // Si no se encuentra el usuario, significa que no está activo
            return res.status(401).json({ isActive: false });
        }


        // Devuelve el estado isActive del usuario
        return res.status(200).json({ isActive: user[0].isActive, nombre: user[0].nombre, usuario: usuario });
    } catch (error) {
        console.error('Error al verificar el estado del usuario:', error);
        return res.status(500).json({ message: 'Error al verificar el estado del usuario' });
    }
});

router.put('/logout/:user', async (req, res) => {
    try {
        const usuario = req.params.user;

        await connection.promise().query(
            'UPDATE usuarios SET isActive = 0 WHERE usuario = ? OR correo = ?',
            [usuario, usuario]
        );

        return res.status(200).json({ message: 'Logout exitoso', usuario: usuario });
    } catch (error) {
        console.error('Error al cerrar sesion:', error);
        return res.status(500).json({ message: 'Error al cerra sesion' });
    }
})





module.exports = router;