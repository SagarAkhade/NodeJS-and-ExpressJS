/*
* Express JS ->>>
    - Express JS is framework for Node JS
    - Making of APIs using the Express JS is much easier
    - All methods of API are easily done using Express JS
    - Also we can integrate the HTML and CSS with Express JS
    - Less coding is required in Express JS

* Installation of Express JS ->>
    - To install Express JS we go to the google and search for npm express js
    - Now we use the following command in terminal to install Express JS
        npm i express
    - Now Express is successfully installed 

* Usage of Express JS ->>
    - To import the express we do like this below
        const express = require('express');
    - Now to make it executable we do like this
        const app = express();
    - .get() method is get the data from the server
    - .get() method has two parameters, 1st is route and second is callback function
       in which request and response are passed

            app.get("/routeName", (req, res) => {
                res.send("dataToSend");           //.send('data') method is used to send the data
            })

    - Now to execute this we need to create a port
    - .listen(anyPortNumber) method is used to start the server
            app.listen(5000);
*/

const express = require('express');
const app = express();
// Making simple Home, About and Help page
// Home page-->
app.get('/', (req, res) => {
    res.send("Welcome, this is Home Page");
})
// About page-->
app.get('/about', (req, res) => {
    res.send("Welcome, this is About Page");
});
// Help page-->
app.get('/help', (req, res) => {
    res.send("Welcome, this is Help Page");
});
app.listen(5000);