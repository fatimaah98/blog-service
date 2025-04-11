// ? connect data base:
const mysql = require('mysql2/promise');
const configs = require('./config')

// ? create pool => when we have many requests in 1 seconds 

const connection = mysql.createPool({
    uri: configs.db.uri,
    waitForConnections: true,
    connectionLimit: configs.db.poolSize,
})
// connection.connect((err) => {
//     if(err) {
//         throw "error in connection: " + err
//     }
//     console.log("connected...");
// })

module.exports = connection;