/*
* Remove extensions from URL in Express JS ->>>
    - Removing the file extensions from the URL in Express JS is important because we don't want to 
    show file extensions in the browser
    - For the security reasons we don't want to show the file extensions in the browser
    - First we created simple server to render the HTML page
    - Now we are creating the path of files as we have done below
        const path = require('path');
        const dirPath = path.join(__dirname, 'folderNameWhichWeWantToAccess');
        __dirname -> gives us current path of folder
    - Now we are using app.sendFile() method to render the HTML page in browser like below
        app.get('/', (req, res) => {
            res.sendFile(`${folderPath}/fileName.html`);
        })
    - res.sendFile(`${folderPath}/fileName.html`) method is used to directly send the page in get method
    - Similary for more routes do like this below
        app.get('/about', (req, res) => {
            res.sendFile(`${publicPath}/about.html`);
        })

* Page not found (404 page) -
    - If someone try to access the URL which is not valid then we show 404 page
    - For creating the route for 404 page we use the route as * 
    - Example of 404 page
        app.get('*', (req, res) => {
            res.sendFile(`${publicPath}/pageNotFound.html`);
        })
*/

const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

// For home page
app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/index.html`);
})

// For about page
app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`);
})

// For help page
app.get('/help', (req, res) => {
    res.sendFile(`${publicPath}/help.html`);
})

// For 404 page
app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/pageNotFound.html`);
})

app.listen(5000); 