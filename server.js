const dotenv = require('dotenv');
const express = require('express');
const mailRouts = require('./routes/mailRout');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
dotenv.config({ path: './config/config.env' });

const PORT = 3000;

app.use('/api/v1/contactus', mailRouts);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
