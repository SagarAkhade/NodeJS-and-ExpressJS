/*
* Route level middleware in Express JS ->>>
    - Route level middleware used to apply the middleware to particular routes
    - Route level middleware are used to apply middleware to single route, multiple group 
      of routes or all routes
    - First we are setting the normal server and start the port at 5000
    - Now we are creating the simple middleware function as below
        const reqFilter = (req, res, next) => {
            console.log('reqFilter');
            next();
        }
    - For using the application level middleware we do like this below
        app.use(reqFilter);  // This will apply to the all routes
    - Now when we want to apply the middleware to single route remove app.use(reqFilter) and just do like this below 
        app.get('/users', middlewareFunctionNameForParticularRoute, (req, res) => {
            res.send("Welcome to Users Page");
        })
    - This above is single level route middleware
    - For applying the same middleware to other route just do same as done above
    - Now we have created the new file name middleware.js where we are passing the middleware function
      and accessing that middleware function here 
    - In middleware.js export like this below
        module.exports = reqFilter = (req, res, next) => {
            console.log('reqFilter');
            next();
        };
    - And to import this middleware function we do like this below
        const reqFilter = require('./fileNameOfMiddleware');
    - Generally middleware are written in different file for good file structure
    - The right way to apply the middleware to multiple routes we create the below instance
        const route = express.Router();
        route.use(reqFilter);
    - And to apply this middleware to multiple routes we do like this below
        route.get('/users', (req, res) => {
            res.send("Welcome to Users Page");
        })
    - And then do like this below for adding this middleware to multiple routes
        app.use('/', route);


*/

const express = require('express');
const reqFilter = require('./middleware')

const app = express();
// app.use(reqFilter);

const route = express.Router();
route.use(reqFilter);


app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
})

app.get('/users', reqFilter, (req, res) => {
    res.send("Welcome to Users Page");
})

app.get('/about', reqFilter, (req, res) => {
    res.send("Welcome to About Page");
})

// Right way to apply the middleware to multiple routes -->>>
route.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page");
})

route.get('/info', (req, res) => {
    res.send("Welcome to Info Page");
})

app.use('/', route);
app.listen(5000);