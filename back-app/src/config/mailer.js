let nodemailer = require('nodemailer');

const user = process.env.MAILER_USER;
const password = process.env.MAILER_PASSWORD;

const transporter = nodemailer.createTransport({
    host: "vz000430.ferozo.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: user,
      pass: password
    }
  });

  transporter.verify().then(()=>{
    console.log('Listo para mandar correos');
  });

  module.exports = {
    transporter
  }