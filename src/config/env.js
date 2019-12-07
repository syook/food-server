const serverPort = 4000;
const mlabURI= `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/test?retryWrites=true&w=majority`;
console.log("TCL: mlabURI", mlabURI)
const localDbURI = process.env.LOCAL_DB;
console.log("TCL: localDbURI", localDbURI)




module.exports = { serverPort, mlabURI, localDbURI };
