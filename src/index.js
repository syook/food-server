const expressApp = require('./expressApp');

const { serverPort } = require('./config/env');

require('dotenv').config();

expressApp.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
