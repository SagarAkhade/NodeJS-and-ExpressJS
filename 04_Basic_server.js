/*
* Make basic server output on browser ->>>
    - To make basic server in NodeJS we import http module
    - In NodeJS http module handles the request and responce
    - To import the http sever we do like below 
        const http = require('http');
    - To create the server we do like below
        const server = http.createServer((req, res) => {
            res.write("Hello this is sagar");   //.write("anyString OR <HTML code>") -> is used to write to the browser
            res.end();                          //.end() -> is used to end process 
        }).listen(portNumberHere);              //.listen(portNumberHere) -> is used to start the server at given port number
    - createServer() function takes the two function as parameter (req, res)
    - Now to run this server at given port number, open terminal and run this file using below 
        node nameOfFile.extension
    - Whenever we do any change in the server we need to restart the server
*/

// creating and importing the http server
const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hello this is Sagar</h1>");
    res.end();
}).listen(4500)