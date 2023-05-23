const Empleados = require('../models/userModel');


async function getUsers() {
    try {
        const result = await Empleados.getUsers();
        return result;
    } catch (error) {
        console.log(error);
        return error
    };
};

module.exports = {
    getUsers,
}