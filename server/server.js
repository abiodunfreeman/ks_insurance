const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// inits app
const app = express();

// Load env variables
dotenv.config({ path: './config/config.env' });

// serve static files in /public
app.use(express.static(__dirname + '/public'));

// Body Parser
app.use(express.json());

//Cors
app.use(cors());

//Routes
app.get('/', (req, res, next) => {
  res.status(200).json({ fuck: 'you' });
});
const leadRoute = require('./routes/lead');
app.use('/lead', leadRoute);
const contactUsRoute = require('./routes/contactUs');
app.use('/contact-us', contactUsRoute);
// starts server
const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  const portString = `${PORT}`.brightYellow;
  await connectDB();
  const server = app.listen(PORT, () => {
    console.log(
      ` Server running in ${process.env.NODE_ENV} , App listening on port ${portString}!`
        .yellow.bold
    );
  });
};
startServer();
