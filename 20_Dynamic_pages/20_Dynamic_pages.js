/*
* Dynamic pages in Express Js ->>>
    - Dynamic pages are the pages in which all the data comes from the database or dynamic data
    - Dynamic pages are created using the template engine
    - Here we first creat the normal server as we are creating earlier
    - We import the express module and start the server at 5000 port
    - We are using the profile.ejs file to render that we have created in the views folder of main directory
    - Now using the template engine we have used below as done before
        app.get('/routeName', (req, res) => {
            const user = {
                name: 'sagar',
                email: 'sagar@test.com',
                city: 'mumbai'
            }
            res.render('ejsFileNameWhichWeRendering', {user});  // .render('ejsFileNameWhichWeRendering') method is used to render the ejs file
        })
    - Now we are passing the dynamic data from the here to ejs file we just created the simple object like above
      and pass that object as second parameter of render() method as done above and
      that second paramete is always pass inside the curly brackets as done - {objectToPass}
    - Now to access the this data that we have passed for the ejs file is accessed using the below in ejs file
        <h1>Hello <%= user.name %></h1>   // this = sign is for accessing the object data
    - Now we want to iterate the data that we have pass 
      we do like below in ejs file to iterate the data
         <ul>
            <% user.skills.forEach((item) => {  %>
                <li> <%= item %> </li>
            <% }) %>
        </ul>
    - Now we have created the file login.ejs in views folder
    - Now we have simply created the route for accessing the login.ejs file 
    - Now we are creating the common folder in views folder and then creating the common header.ejs file 
    - This header.ejs file is used in other pages like in profile and login page as common file
    - And accessing the header.ejs file in profile.ejs and login.ejs file do like this below
        <%- include('pathName/fileToAccess.ejs') %>   // this - sign indicates that to load HTML
        <%- include('common/header.ejs') %>  
*/

const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'sagar',
        email: 'sagar@test.com',
        city: 'mumbai',
        skills: ['html', 'css', 'javascript', 'react', 'node', 'java']
    }
    res.render('profile', { user });
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.listen(5000);