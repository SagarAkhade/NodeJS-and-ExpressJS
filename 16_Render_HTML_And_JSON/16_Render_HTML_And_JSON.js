/*
* Render HTML and JSON from Express JS ->>>
    - Rendering HTML and JSON means displaying the data in the browser
    - To render HTML in browser simply write the HTML tags in .send() method like below
        app.get('/about', (req, res) => {
            res.send(`
            <input type="text" placeholder="User Name" />
            <button>Submit</button>
            `)
        })
    - And to display the JSON data just write the object directly like below
        app.get('/help', (req, res) => {
            res.send([
                {name:'sagar', email:'sagar@test.com'},
                {name:'anil', email:'anil@test.com'},
            ])
        })
    - We can also link the different pages just using the <a> tag like this below
        app.get('/', (req, res) => {
        res.send(`
            <h1>Hello World!</h1>
            <a href="/about">Go to About page</a>
        `);

* Query Params in Express JS ->>>
    - To get the values from the URL we first pass the value in URL like this below
        location: http://localhost:5000/about?key=value
        location: http://localhost:5000/about?name=sagar
    - Now to access the values from the URL we do like this below
        app.get('/', (req, res) => {
            console.log("Data send from browser =>>> ", req.query.name);
        })
})

*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello World!</h1>
        <a href="/about">Go to About page</a>
    `);
})

app.get('/about', (req, res) => {
    res.send(`
        <input type="text" placeholder="User Name" value="${req.query.name}"/>
        <button>Click Me</button>
        <a href="/">Go to Home page</a>
    `)
})

app.get('/help', (req, res) => {
    res.send([
        { name: 'sagar', email: 'sagar@test.com' },
        { name: 'anil', email: 'anil@test.com' },
    ])
})

app.listen(5000);