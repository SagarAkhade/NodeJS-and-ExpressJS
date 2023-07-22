/*
* Template Engine in Express JS ->>>
    - Dynamic pages are the pages in which all the data comes from the database
    - And static pages are the pages in which all the data comes from the static files itself
    - Template engine is basically are the npm packages
    - Ejs is most popular template engine (Embedded Javascript Templates)
    - To install the ejs package use the below command in terminal
        npm install ejs 
    - To use the ejs first we need to tell the Node that we are using it like done below
        app.set('view engine', 'ejs');
    - Now we are using the ejs template engine and for this we always first needs to create the views folder 
    - The name of folder that we are creating is always 'views' only for following the standard conventions
    - That 'views' folder must be created in main folder directory not inside any sub-folder
    - Now we are creating the files in the views folder and use the extension for the files as .ejs
    - Inside the .ejs file we are simply using the HTML
    - Now we are using this .ejs file first we import the express module and call it using the app as done before 
    - Here that 'view' folder must be created in main folder structure, for understanding we have created that folder
      inside this sub-folder but it is not accessable folder, 
    - Now we have simply created the route for accessing the ejs file like done below
        app.get('/routeName', (req, res) => {
            res.render('ejsFileNameWhichWeRendering');  // .render('ejsFileNameWhichWeRendering') method is used to render the ejs file
        })
    - Now we are passing the dynamic data from the here to ejs file we just created the simple object like below
      and pass that object as second parameter of render() method as done below and 
      that second paramete is always pass inside the curly brackets as done - {objectToPass}
        app.get('/routeName', (req, res) => {
            const user = {      // This is just normal data object we are passing to ejs file
                name: 'sagar',
            }
            res.render('ejsFileNameWhichWeRendering', {user});   // this second parameter is access to ejs file
        })
    - Now to access the this data that we have passed for the ejs file is accessed using the below in ejs file
        <h1>Hello <%= user.name %></h1>

*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'sagar',
        email: 'sagar@test.com',
        city: 'mumbai'
    }
    res.render('profile', { user });
})

app.listen(5000);
