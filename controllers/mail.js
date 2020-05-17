const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: '../config/config.env' });

exports.getMail = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

exports.createMail = (req, res, next) => {
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
    subject: `${req.body.subject}`, // Subject line
    text: `${req.body.description}`, // plain text body
    html: `<h1>${req.body.description}</h1>`, // html body
  };

  transporter.sendMail(info, (err, data) => {
    if (err) {
      console.log('cant send mail');
    } else {
      console.log('Emai send');
    }
  });

  res.status(200).json({ success: true, msg: 'Mail send' });
};
