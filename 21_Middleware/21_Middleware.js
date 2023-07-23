/*
* Middleware in Express JS ->>>
    - Middlewares are basically the funtions which are only used with routes
    - With help of middleware we can access the request and response and modify them
    - Middlewares are used for authentication, checking the token, checking age, block site in 
      particular country, etc
    - Whenever we want to do some changes in request and responce we use middleware
    - Here first we have created simple server and added some routes as we do previously
    - Now we have created the simple middleware function as below 
        const reqFilter = (req, res, next) => {
            console.log('reqFilter');
            next();               // next() method is called to go to next route
        }
    - Middleware function has 3 parameters always, 1st is request, 2nd is response and 3rd is callback function
    - To use the middleware function we do like this below
        app.use(reqFilter);
    - Simple exapmle of Middleware function : check age of user and allow them to access the site if age > 18
        const reqFilter = (req, res, next) => {
            if (!req.query.age) {                 // req.query is query params which gives value send from url
                res.send("Please provide age");
            }
            else if (req.query.age < 18) {
                res.send("You are not allowed to access this page");
            }
            else {
                next();
            }
        }
    - The above is simple example of Application-level middleware
        
* Types of Middleware ->>
    - Application-level middleware
    - Router-level middleware
    - Error-handling middleware
    - Build-in middleware
    - Third-party middleware
*/

const express = require('express');
const app = express();

// Middleware function
const reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send(`<h1>Please provide age</h1>`);
    }
    else if (req.query.age < 18) {
        res.send("You are not allowed to access this page");
    }
    else {
        next();
    }
}

app.use(reqFilter);

app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
})

app.get('/users', (req, res) => {
    res.send("Welcome to Users Page");
})

app.listen(5000);