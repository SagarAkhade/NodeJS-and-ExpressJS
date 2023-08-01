/*
* Update data from Node to MongoDB ->>>
    - To update the data from NodeJS to MongoDB we first need to create the connection with MongoDB
    - To create the connection with MongoDB we create the single common file as done previously
        const { MongoClient } = require('mongodb');
        const url = 'mongodb://127.0.0.1:27017';
        const database = 'e-comm';
        const client = new MongoClient(url);

        async function dbConnect(){
            let result = await client.connect();
            let db = result.db(database);
            return db.collection('products');
        }
        module.exports = dbConnect;
    - Now we have to import the MongoDB connection function from that common connection file like done below
        const dbConnect = require('./mongodb');
    - To update the single data from the node to MongoDB we do like done below
        const updateData = async () => {
            let data = await dbConnect();
            let result = await data.updateOne(               // .updateOne() method update single data which take two key-value pair
                {name  : 'max 1'},                           // first it take {key:value} pair whose data to be updated
                {$set: {name: 'max pro 1', price: 520}},     // second it take {$set : {keyNameWhoseValueToUpdate : 'newUpdatedValue', multiple key-value pair can changed}}
                { upsert: true }                             // third it take {upsert: true} which is optional that is it adds this object in list when donnot find the match
            )
            console.log(result);
        }
        updateData();
    - When we want to update many we use .updateMany() method, it updates all the data at once when finds the match of single key-value pair
        const updateData = async () => {
            let data = await dbConnect();
            let result = await data.updateMany(
                { name: 'note 5' },                           // all entries with { name = 'note 5' } will be updated
                { $set: { name: 'note pro 5', price: 520 } },
            )
            console.log(result);
        }
        updateData();

*/

const dbConnect = require('./mongodb');

const updateData = async () => {
    let data = await dbConnect();
    let result = await data.updateMany(
        { name: 'note 5' },
        { $set: { name: 'note pro 5', price: 520 } },
    )
    console.log(result);
}
updateData();