/*
* Delete data from Node to MongoDB ->>>
    - To delete the data from NodeJS to MongoDB we first need to create the connection with MongoDB
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
    - Now to delete the single data do like this done below
        const deleteData = async () => {
            let data = await dbConnect();
            let result = await data.deleteOne({name: 'note pro 10'});    // .deleteOne({name: 'note pro 10'}) -> any key-value pair of that particular item to be deleted
            console.log(result)
        }
        deleteData();
    - On successful delete the data this message will be shown in console [console.log(result)]
        { acknowledged: true, deletedCount: 1 }
    - Now to delete the many records at same time do like this done below
        const deleteData = async () => {
            let data = await dbConnect();
            let result = await data.deleteMany({name: 'note pro 10'});    // .deleteMany({name: 'note pro 10'}) -> any key-value pair to be deleted
            console.log(result)
        }
        deleteData();
    - All the data matching this given key-value pair will be deleted

*/

const dbConnect = require('./mongodb');

const deleteData = async () => {
    let data = await dbConnect();
    // let result = await data.deleteOne({name: 'note pro 10'});  // delete single data
    let result = await data.deleteMany({ name: 'max pro 2' });
    console.log(result)
    if (result.acknowledged) {
        console.log("Data deleted successfully");
    }
}
deleteData();