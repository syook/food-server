const serverPort = 4000;

const mLabURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/test?retryWrites=true&w=majority`;

const localDbURI = process.env.LOCAL_DB;

module.exports = { serverPort, mLabURI, localDbURI };
