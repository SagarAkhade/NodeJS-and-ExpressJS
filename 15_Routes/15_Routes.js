/*
* Routes in Express JS ->>>
    - Routes are used to define the APIs path in Express JS
    - Routes are used to nevigate to different different pages 
    - Here we use Express JS and create two routes ie. Home and About
    - To import the Express we do like this below
        const express = require('express');
    - And then we need to make express executable so we call it like this below
        const app = express();
    - Now we create the route and used the get method to show data on UI
        app.get('/routeName', (req, res) => {
            res.send("Welcome, this is Home Page");  // .send('data') method is used to send the data
        })
    - .get() method takes two parameters, 1st is route name and second is callback function
    - Now we create the port to start the server at 5000 we do like this below
        app.listen(5000);
    - Here we are sending the data from the browser using query params and getting that data in server
    - For sending data from the url(ie. query params) we first add ? and then data in key=value pair
        location: http://localhost:5000?key=value 
        location: http://localhost:5000?name=sagar -> this is sending data in url using query params
    - Now to show this data we do like this below
        app.get('/', (req, res) => {
            console.log("Data send from browser =>>> ", req.query.name);   //req.query is query params which gives the object of value send from url
            res.send("This is Home page!", req.query.name);
        })
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Data send from browser =>>> ", req.query.name);
    res.send("This is Home page! Welcome " + req.query.name);
})

app.get('/about', (req, res) => {
    res.send("This is About page!");
})

app.listen(5000);