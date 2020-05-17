const express = require('express');
const router = express.Router();

const { getMail, createMail } = require('../controllers/mail');

router.route('/').get(getMail).post(createMail);

module.exports = router;
