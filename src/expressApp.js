const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// Initiate app
const app = express();

app.options('*', cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('server is running');
});

// Error handler
app.use((error, _req, res, _next) => {
  console.error(error);
  const status = error.status || 500;
  const errorMessage = error.message || error.toString();
  res.status(status).json(response.error(errorMessage, 'Something went wrong. Please try again', null));
});

module.exports = app;
