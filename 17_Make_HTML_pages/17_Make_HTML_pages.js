/*
* Make HTML pages in Express JS ->>>
    - For making large HTML pages we make them separately and then combine them using routes
    - We have made simple folder which has our all websites HTML pages
    - First we create the simple express server to load the pages as we are doing earlier
    - To import the particular file we need to get its correct path first, so we use path module like below
        const path = require('path');
    - Now to get the exact path do like this below
        const dirPath = path.join(__dirname, 'folderNameWhichWeWantToAccess');
        __dirname -> gives us current path of folder
    - Now to access that HTML page we have created we use app.use() method
        app.use(express.static(dirPath));  //This path we have already extracted
        express.static(dirPath)  //This .static() method is used to load that static HTML page or content
    - For creating the root page just name file as index.js and this file becomes the root page
    - To access these pages in browser do like this below
        http://localhost:5000/nameOfFile.html
        Ex: http://localhost:5000/about.html
            http://localhost:5000/help.html
            
*/
const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));

app.listen(5000);