require('dotenv').config();

const expressApp = require('./expressApp');
const { serverPort } = require('./config/env');

const db = require('./config/db')
expressApp.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
