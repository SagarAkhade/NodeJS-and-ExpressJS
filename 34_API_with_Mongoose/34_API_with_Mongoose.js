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

* GET API with Mongoose ->>>
    - GET API is used to get the data from the database
    - .get() method is used to get the data from the database
    - GET API is created as done below
        app.get('/list', async (req, res) => {
            let data = await Product.find();                         //.find() method is used to get the all data from the database
            // let data = await Product.find({ name: "u20" });       //.find({ name: "u20" }) method is used to get the all data which match the key-value pair
            // let data = await Product.findOne({ name: "u20" });    //.findOne({ name: "u20" }) method is used to get the first data which match the key-value pair
            res.send(data);                                          //.send() method is used to send responce from the API
        })

* DELETE API with Mongoose ->>>
    - DELETE API is used to delete the data from the database
    - .delete() method is used to delete the data from the database
    - For deleting the data we dynamically pass the id of object using the request parameter as done below
        app.delete('/delete/:_id', async (req, res)=>{
            console.log(req.params);
            let data = await Product.deleteOne(req.params);        //.deleteOne() method is used to delete the data which match the key-value pair
            // let data = await Product.deleteMany(req.params);    // .deleteMany() method is used to delete all data that match the key-value pair
            res.send(data)
        })
    - And we are hitting the below URL in Postman
        http://localhost:5000/delete/64db95840c557101d6ebdc87

* PUT API with Mongoose ->>>
    - PUT API is used to update the data in the database
    - .put() method is used to update the data in the database
    - For updating the data we dynamically pass the id of object using the request parameter as done below
        app.put('/update/:_id', async (req, res) => {
            console.log(req.params);
            let data = await Product.updateOne(
                req.params,                       // This is condition key-value pair
                { $set: req.body }                // This is the update key-value pairs
            );
            res.send(data)
        })
    - .updateMany() method is used to update all the data at once which match the key-value pair
    - For updating the data we are hitting the below URL in Postman
        http://localhost:5000/update/64db95840c557101d6ebdc87
    - For the PUT method we have to pass the data in the body as done below
        go to Body -> select row -> then select JSON -> write the object to update like done below
        { "price": 400, "brand": "Samsung", "category": "mobile"}


*/

const express = require('express');
require('./config');
const Product = require('./product');

const app = express();
app.use(express.json());

// POST API
app.post('/create', async (req, res) => {
    let data = new Product(req.body);
    let result = await data.save();

    console.log(result);
    res.send(result);
})

// GET API
app.get('/list', async (req, res) => {
    let data = await Product.find();
    // let data = await Product.find({ name: "u20" });      //.find({ name: "u20" }) method is used to get all data which match the key-value pair
    // let data = await Product.findOne({ name: "u20" });   //.findOne({ name: "u20" }) method is used to get the first data which match the key-value pair
    res.send(data);
})

// DELETE API
app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params);
    let data = await Product.deleteOne(req.params);
    res.send(data)
})

// PUT API
app.put('/update/:_id', async (req, res) => {
    console.log(req.params);
    let data = await Product.updateOne(
        req.params,
        { $set: req.body }
    );
    res.send(data)
})

app.listen(5000);