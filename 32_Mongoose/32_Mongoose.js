/*
* Mongoose ->>>
    - Mongoose is the npm package which we use to interact the NodeJS with MongoDB
    - MongoDB npm is official package of MongoDB but it has some limitations. To overcome these limitations 
      we use the Mongoose package
    - Mongoose is on the top of MongoDB package. Mongoose is basically the advance version of MongoDB npm package
    - Mongoose has some advance features like model, schema, etc
    - With Mongoose we can set the schema for the number of fields to be added ie. the fix the number of fields,
      which was not available in MongoDB npm
    - With Mongoose we can add the validations to field like differentiate the string and number fields
    - With Mongoose we can add validations, schemas, control the number of fields, etc
    - To install Mongoose use the below command in terminal
        npm install mongoose
    - Now we need to import the mongoose module as done below
        const mongoose = require('mongoose');
    - Now we create the connection with MongoDB using below and create the Schema and Model and add the data to the database
        const main = async () =>{
            await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
            const ProductSchema = new mongoose.Schema({     // Defining the Schema
                name: String,                               // This schema validation will take only input field that are define inside this object
                price: Number,                              // Here in this it will take only two field with name as String only and price as Number only
            });
            const ProductsModel = mongoose.model('products', ProductSchema);   // Defining the Model 
            let data = new ProductsModel({name:'m8', price:1000});
            let result = await data.save();                // .save() method is used to save the data to the database
            console.log(result);
        }
        main();

* Schema ->>
    - Schema is basically the validation using which we can control the number of fields to be added
    - All the fields are defined in MongoDB using the Schema
    - Schema is used to control the number of fields
    - Schema is created as done below
        const ProductSchema = new mongoose.Schema({     // Defining the Schema
            name: String,                               // This schema validation will take only the input that are define inside the object 
            keyOnWhichWeWantValidation: TypeOfDataToBeEnter(String/Number), 
        });

* Model ->>
    - Model is basically used to connect the NodeJS with MongoDB
    - Model basically use the Schemas to connect the NodeJS with MongoDB
    - Model is created as done below
        const nameOfModel = mongoose.model('collectionNameInDatabase', nameOfSchema);   
        Ex: const ProductsModel = mongoose.model('products', ProductSchema);   // Defining the Model 

*/

const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm');
    const ProductSchema = new mongoose.Schema({     // Defining the Schema
        name: String,                               // This schema validation will take only input field that are define inside the object
        price: Number,
    });
    const ProductsModel = mongoose.model('products', ProductSchema);   // Defining the Model 
    let data = new ProductsModel({ name: 'm8', price: 1020 });
    let result = await data.save();                // .save() method is used to save the data to the database
    console.log(result);
}
main();