/*
* Post API with Mongoose ->>>
    - POST API is used to add the data to the database
    - With mongoose npm package we can add the validations on fields that can be enter in the database
      using the Schema and Models
    - For the project level we always prefer the mongoose npm over the mongodb npm package
    - Here first we have created the config.js file 
    - Where we have created the connection with MongoDB like done below
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    - Now we have created the another file product.js for defining the schema and model
    - In the product.js file we have defined the schema and model and then we have to export that model to use it here
      as done below :
        const mongoose = require('mongoose');
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            brand: String,
            category: String
        })
        module.exports = mongoose.model('products', productSchema);
    - Now for creating the POST API we first import the express as done below
        const express = require('express');
    - Then we have to import the config file where we have created the connection with MongoDB and products for creating the Model
        require('./config');
        const Product = require('./product');
    - Then we have to create the POST API and check it using the POSTMAN
    - Now we have send the data from the Postman, now to see this data in NodeJS we have to add this line of code
      which will parse the JSON object
        app.use(express.json());     
    - To post the data in API using the POSTMAN we do like this
        go to Body -> select row -> then select JSON -> write the object to post like done below
        {"name": "m 40", "price": 400, "brand": "Samsung", "category": "mobile"}
    - Now we have created the Post API using the .post() method as 
        app.use(express.json());
        app.post('/create', async (req, res) => {
            let data = new Product(req.body);
            let result = await data.save();          //.save() method is used to save the data to the database

            console.log(result);
            res.send(result);
        })
    - And then we have to start the server at any port number like done below
        app.listen(5000);
*/

const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());
app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();

    console.log(result);
    res.send(result);
})

app.listen(5000);