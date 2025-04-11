// ? connect data base:
const mysql = require('mysql2');
const configs = require('./config')

const connection = mysql.createConnection({
    host: configs.db.host,
    port: configs.db.port,
    user: configs.db.user,
    password: configs.db.password,
    database: configs.db.name
})
connection.connect((err) => {
    if(err) {
        throw "error in connection: " + err
    }
    console.log("connected...");
})

module.exports = connection;