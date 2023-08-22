/*
* MySQL connect with NodeJS ->>>
    - MySQL is basically the structured query language
    - MySQL is a widely used relational database management system (RDBMS).
    - MySQL is a free and open-source database management system
    - MySQL is ideal for both small and large applications.
    - In MySQL, the data is stored in tables and in structured format
    - To use the MySQL we first download the XAMPP [Apache + MariaDB + PHP + Perl] from the below link
        https://www.apachefriends.org/index.html
    - XAMPP is basically works as the run time environment of MySQL
    - Now after downloading the XAMPP we need to install it 
    - The installation of XAMPP is very easy just click on Next buttons
    - Now after installation of XAMPP it will open the XAMPP control panel
    - Now just install the MySQL using the below command in terminal
        npm i mysql
    - After installing the MySQL package we need to create the connection with the MySQL database 
    - Now first import the MySQL module like done below
        const mysql = require('mysql');
    - Now create the connection with the database like done below and it is always done like below
        const connection = mysql.createConnection({
            host: 'localhost',                          // host is basically the IP address of the server (here we are using it locally so it is localhost)
            user: 'root',                               // user is basically the username which is generally root
            password: '',                               // password is password for the MySQL database, here we put just empty string
            database: 'test'                            // database is the name of the database in MySQL
        })
    - Now in XAMPP control panel we have click on start options for the Apache and MySQL and then in MySQL section click on Admin button
    - It will open the MySQL admin panel in the browser on below link
        http://localhost/phpmyadmin/index.php?route=/database/structure&db=test
    - Now from the MySQL admin panel we have created the test database (already created the default database)
    - In the test database we have created the users table and added some sample data
    - After that we have showed the data in console like done below
        connection.query("select * from users", (err, result) => {
            console.log("result", result);
        })
*/

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

connection.connect((err) => {
    if (err) {
        console.log('Error!');
    }
    else {
        console.log('Connected!');
    }
});

connection.query("select * from users", (err, result) => {
    console.log("result", result);
})