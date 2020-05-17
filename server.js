const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: './config/config.env' });

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL, // generated ethereal user
    pass: process.env.PASSWORD, // generated ethereal password
  },
});

let info = {
  from: 'pratikfolio@gmail.com', // sender address
  to: 'meetpratiik@gmail.com', // list of receivers
  subject: 'testing the nodemailer', // Subject line
  text: 'Hello world', // plain text body
  html: '<b>Hello world?</b>', // html body
};

transporter.sendMail(info, (err, data) => {
  if (err) {
    console.log('cant send mail');
  } else {
    console.log('Emai send');
  }
});
