/*
* APIs with MySQL ->>>
    - Here we are creating the API operations with MySQL database
    - Basically we are creating the CRUD APIs which we will use for the MySQL database
    - For connection with MySQL we are creating the config.js file
    - The connection with MySQL is done like below in config.js file
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
    - Now we import the connection like done below
        const connection = require('./config');
    - And then after the import we use this connection with our MySQL database

* GET API with MySQL ->>>
    - Now for creating the get API we have to import the express module as done below
        const express = require('express');
    - Now create the API like done below
        app.get('/', (req, res) => {
            connection.query("select * from users", (err, result) => {    // We need to pass the query and the callback function
                if (err) {                                                // users is table name
                    res.send("error");
                }
                else {
                    res.send(result);
                }
            })
        })
    - In result we get the data from the MySQL database table

* POST API with MySQL ->>>
    - When we want to insert the data in MySQL database we use the POST API's
    - Now we are creating the POST API for inserting the static data from NodeJS to MySQL database
        app.post('/', (req, res) => {
            const dataThatWeWantToInsert = {name:'bhasaker', password:'3030', user_type:'visitor'};            // static object we are passing to the MySQL, the ID is automatically generated so no need to pass
            connection.query("INSERT INTO nameOfMySQLTable SET ?", dataThatWeWantToInsert, (error, result, fields) => {    // syntax for the post
                if(error) throw error;
                res.send(result);
            })
        })
    - This code for the reference we can check the npm mysql package site
    - Now we are passing the data to inserted in MySQL database dynamically 
    - For sending the data dynamically from the Postman we do like this settings in Postman
        first select Body -> then select Raw -> then select JSON -> and write the object like done below
            {"name":"sam", "password":"4040", "user_type":"visitor"}
    - To use the object send from the Postman in NodeJS we have use below line of code
        app.use(express.json());
    - Now for inserting the dynamic data from the Postman to MySQL we do like this done below
        app.post('/', (req, res) => {
            // const data = {name:'bhasaker', password:'3030', user_type:'visitor'};       // static data
            const data = req.body;                                                         // dynamic data 
            connection.query("INSERT INTO users SET ?", data, (error, result, fields) => {
                if(error) throw error;
                res.send(result);
            })
        })

* PUT API with MySQL ->>>
    - When we want to update the data in MySQL database we use the PUT API's
    - First we are updating the static data from NodeJS to MySQL database like done below
        app.put('/', (req, res) => {
            const data = ["Adom", "1010", "reader", 2];      // here this array has the value which updating and resembles below as name : "Adom" same for others
            connection.query("UPDATE users SET name = ?, password = ?, user_type = ? where ID = ?", data, (error, result, fields) => {     // Syntax for the put
                if (error) throw error;
                res.send(result);
            })
        })
        - The last "where ID = ?" is we are targeting the particular column which we want to update
    - Now we are updating the dynamic data from the Postman to MySQL database like done below
    - For updating the data dynamically from the Postman we do like this settings in Postman
        first select Body -> then select Raw -> then select JSON -> and write the object like done below
            {"name":"sam", "password":"4040", "user_type":"visitor"}
    - Now for inserting the dynamic data from the Postman to MySQL we do like this done below
        app.put('/:id', (req, res) => {
            const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];           // dynamic data 
            connection.query("UPDATE users SET name = ?, password = ?, user_type = ? where ID = ?", data, (error, result, fields) => {
                if (error) throw error;
                res.send(result);
            })
        })

* DELETE API with MySQL ->>>
    - When we want to delete the data in MySQL database we use the DELETE API's
    - Now we are deleting the data from the Postman to MySQL database like done below
        app.delete('/:id', (req, res) => {
            connection.query("DELETE FROM users WHERE ID =" + req.params.id, (error, result, fields) => {
                if (error) throw error;
                res.send(result);
            })
        })

*/

const connection = require('./config');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    connection.query("select * from users", (err, result) => {
        if (err) {
            res.send("error");
        }
        else {
            res.send(result);
        }
    })
})

app.post('/', (req, res) => {
    // const data = {name:'bhasaker', password:'3030', user_type:'visitor'};       // static data
    const data = req.body;
    connection.query("INSERT INTO users SET ?", data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.put('/:id', (req, res) => {
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    connection.query("UPDATE users SET name = ?, password = ?, user_type = ? where ID = ?", data, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.delete('/:id', (req, res) => {
    connection.query(`DELETE FROM users WHERE ID = ${req.params.id}`, (error, result, fields) => {
        if (error) throw error;
        res.send(result);
    })
})

app.listen(5000);