const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const { mlabURI, localDbURI } = require('./env');

const URI = process.env.NDOE_ENV == 'production' ? mlabURI : localDbURI;

const db = mongoose.createConnection(URI, { poolSize: 3, useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.set('debug', true); // enable logging collection methods + arguments to the console

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function() {
  console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = db;
