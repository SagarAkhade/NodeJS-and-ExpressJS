/*
* Make Simple API in Node Js ->>>
    - Here we are making the simple API for that we create the server
    - To create the server we do like below
        const http = require('http');           // 'http' is the name of the module
        http.createServer((req, resp) => {      
            resp.writeHead(responceCode, {'Content-Type': 'application/json'});    //Here we are passing the head
            resp.write(JSON.stringify({AnyObject}));          // Here we are passing the body of API passing as JSON.stringify
            resp.end();                                       // Here we are ending the process
        }).listen(5000);                      // .listen(6000) -> is used to start the server at given port number

    - Then we pass header and API body then creating the API with static data
    - For chencking the API we have downloaded the Postman 
    - Now we are storing this data in another file and importing that data here
    - For storing the data in another folder and export it we do like this below
        module.exports = {name:'sagar'}
    - And to import that data in another file we do like this
        const data = require('./pathOfFileHere');
*/
const data = require('./07_2_Simple_API_data');
const http = require('http');
http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'application/json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000)