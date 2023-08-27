const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',                          // host is basically the IP address of the server (here we are using it locally so it is localhost)
    user: 'root',                               // user is basically the username which is generally root
    password: '',                               // password is password for the MySQL database, here we put just empty string
    database: 'test'                            // database is the name of the database in MySQL
})
// Checking our connection with MySQL database
connection.connect((err) => {
    if (err) {
        console.log('Error!');
    }
})

module.exports = connection;