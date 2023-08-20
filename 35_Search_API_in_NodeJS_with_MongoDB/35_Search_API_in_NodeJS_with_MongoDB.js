/*
* Search API in NodeJS with MongoDB ->>>
    - Search API is used to search the data from the database 
    - There are two types of search like with 1) Single field search and 2) Multiple field search
    - In Single field search we search only using the on key-value pair 
    - And in Multiple field search we search using the multiple key-value pairs
    - Here same we have created the config file for the connection and products for creating the Schema and Model
    - And import these two files here
    - Now first we have created the simple get API and tested it on Postman
    - Now created the get API for the searching the value. This is for the single field search
        app.get('/search/:key', async (req, res) => {             // passing the query param to search the data
            console.log(req.params.key);
            let data = await Product.find(                         // Now to search we use that query param and below is syntax
                {
                    "$or":[
                        {"name":{$regex: req.params.key}},         // regex is used to search the data
                    ]
                }
            );
            res.send(data);
        })
    - Search will work with single charater also but it will always match the characters (ie. case sensitive)
    - For the multiple field search we just need to add the multiple key-value pairs like done below
        app.get('/search/:key', async (req, res) => {
            console.log(req.params.key);
            let data = await Product.find(
                {
                    "$or": [
                        { "name": { $regex: req.params.key } },
                        { "brand": { $regex: req.params.key } },
                        { "category": { $regex: req.params.key } },
                    ]
                }
            );
            res.send(data);
        })

*/

const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

app.get('/search/:key', async (req, res) => {
    console.log(req.params.key);
    let data = await Product.find(
        {
            "$or": [
                { "name": { $regex: req.params.key } },
                { "brand": { $regex: req.params.key } },
                { "category": { $regex: req.params.key } },
            ]
        }
    );
    res.send(data);
})

app.listen(5000);