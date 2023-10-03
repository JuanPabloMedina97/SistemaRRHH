const { transporter } = require('./../config/mailer');

async function sendPassword(userMail) {

    await transporter.sendMail({
        from: 'Recuperacion de contraseña <no-reply@acheral.com.ar>', // sender address
        to: userMail, // list of receivers
        subject: "Recuperacion de contraseña", // Subject line
        text: "Hola, tu contraseña es: ", // plain text body
        // html: "<b>Hello world?</b>", // html body
    });
};

module.exports = {
    sendPassword
}