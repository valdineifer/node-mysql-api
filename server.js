const express = require('express');
const requireDir = require('require-dir');
const cors = require('cors');
const Sequelize = require('sequelize');

// Starting app
const app = express();
app.use(express.json());
app.use(cors());


// Option 1: Passing parameters separately
const sequelize = new Sequelize('test', 'root', 'cuscuz', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

requireDir('./src/models'); // Import every model with 'require-dir' package

// Routes
app.use('/api', require("./src/routes"));

app.listen(3001); // The application will "listen" the port 3001