/*
* CRUD with Mongoose ->>>
    - Here basically we are creating the CRUD opertion with Mongoose
    - For creating the CRUD operation with Mongoose we basically first connect with MongoDB
    - And then we are creating the Schemas and Model as done previously    
    - First we need to import the mongoose package as done below
        const mongoose = require('mongoose');
    - After that we have created the connection with MongoDB like done below using the mongoose
        mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    - Then we have created the Products Schema where we defined the number of fields with some validations as done below
        const ProductSchema = new mongoose.Schema({     // Defining the Schema
            name: String,                               // This schema validation will take only input field that are define inside the object
            price: Number,
            brand: String,
            category: String,
        });

* Create the Data in MongoDB using mongoose ->>>
    - To create data we have created the function which will create the new data in MongoDB
    - In that funtion we need to add Schemas and Model as done below
        const saveInDB = async () => {
            const ProductsModel = mongoose.model('products', ProductSchema);   // Defining the Model 
            let data = new ProductsModel({                                     // Adding the data in Database
                name: 'Note Pro',
                price: 250,
                brand: 'max',
                category: 'mobile'
            });
            let result = await data.save();                // .save() method is used to save the data to the database
            console.log(result);
        }
    - Then we are calling the saveInDB function as done below
        saveInDB();

* Update the Data in MongoDB using mongoose ->>>
    - To update the data we have created the function which will update the data in MongoDB
    - To update the data we have created the function as done below
        const updateInDB = async () => {
            const Product = mongoose.model('products', ProductSchema);   // Defining the Model
            let data = await Product.updateOne(                          // .updateOne() method is used to update the data
                { name: 'nokia 1100' },                                  // {keyWhoseDataToBeUpdated : valueWhoseDataToBeUpdated}
                { $set: { price: 700 } }                                 // { $set: { keyWhoseDataToBeUpdated: 'newUpdatedValue', multipleKeys: 'multipleNewUpdatedValues' } }
            )
            console.log(data);
        }
    - Then we are calling the updateInDB function as done below
        updateInDB();
    - To update many data at once we have to use the .updateMany() method

* Delete the Data in MongoDB using mongoose ->>>
    - To delete the data we have created the function which will delete the data in MongoDB
    - To delete the data we have created the function as done below
        const deleteInDB = async () => {
            let Product = mongoose.model('products', ProductSchema);
            let data = await Product.deleteOne({ name: 'm8' });       // .deleteOne({keyWhoseDataToBeDeleted : valueWhoseDataToBeDeleted}) method is used to delete the data
            // let data = await Product.deleteMany({ name: 'm8' });   // .deleteMany() method is used to delete the many datas at once
            console.log(data);                                        // {key-value pair should be exactly the same to be deleted}
        }
    - Then we are calling the deleteInDB function as done below
        deleteInDB();

* Read the Data in MongoDB using mongoose ->>>
    - To read the data we have created the function which will read the data in MongoDB
    - To read the data we have created the function as done below
        const findInDB = async () => {
            const Product = mongoose.model('products', ProductSchema);
            // let data = await Product.find();                          // .find() method is used to read all the data,
            let data = await Product.find({ name: 'Note Pro' });         // .find({ name: 'Note Pro' }) method gives all the data matches the this key-value pair
            // let data = await Product.findOne({ name: 'Note Pro' });   // .findOne({ name: 'Note Pro' }) method gives first data matches the this key-value pair
            console.log(data);
        }
    - Then we are calling the findInDB function as done below
        findInDB();

*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-comm');

const ProductSchema = new mongoose.Schema({     // Defining the Schema
    name: String,                               // This schema validation will take only input field that are define inside the object
    price: Number,
    brand: String,
    category: String,
});

// Create the data in MongoDB 
const saveInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);   // Defining the Model 
    let data = new ProductsModel({
        name: 'Note Pro',
        price: 250,
        brand: 'max',
        category: 'mobile'
    });
    let result = await data.save();                // .save() method is used to save the data to the database
    console.log(result);
}

// saveInDB();

// Update the data in MongoDB 
const updateInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);   // Defining the Model
    let data = await Product.updateOne(
        { name: 'nokia 1100' },
        { $set: { price: 700, name: 'nokia 110', } }
    )
    console.log(data);
}

// updateInDB();

// Delete the data in MongoDB
const deleteInDB = async () => {
    let Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({ name: 'm8' });       // .deleteOne() method is used to delete the data
    // let data = await Product.deleteMany({ name: 'm8' });   // .deleteMany() method is used to delete the many datas at once
    console.log(data);
}

// deleteInDB();

// Read/find the data in MongoDB
const findInDB = async () => {
    const Product = mongoose.model('products', ProductSchema);
    // let data = await Product.find();                              // .find() method is used to read all the data,
    let data = await Product.find({ name: 'Note Pro' });             // .find({ name: 'Note Pro' }) method gives all the data matches the this key-value pair
    // let data = await Product.findOne({ name: 'Note Pro' });       // .findOne({ name: 'Note Pro' }) method gives first data matches the this key-value pair
    console.log(data);
}

findInDB();