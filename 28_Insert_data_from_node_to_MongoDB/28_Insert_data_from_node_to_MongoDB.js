/*
* Insert Data from NodeJS to MongoDB ->>>
    - To insert the data from NodeJS to MongoDB we first need to create the connection with MongoDB
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
    - Now to insert the single data do like this done below
        const insert = async () => {
            let db = await dbConnect();
            const result = await db.insertOne({objectToInsert})
            if(result.acknowledged) {         // result.acknowledged is a promise which return true if data inserted in database
                console.log("Data inserted successfully");
            }
        }
        insert();
    - Note : Donnot add id to the object because MongoDB will auto generate the id
    - To insert the multiple data do like this done below
        const result = await db.insertMany([
            { name: 'max 1', brand: 'micromax', price: 220, category: 'mobile' },
            { name: 'max 2', brand: 'micromax', price: 320, category: 'mobile' },
            { name: 'max 3', brand: 'micromax', price: 420, category: 'mobile' },
        ])
    - .insertMany([{multiple objects}]) method add multiple data at once
*/

const dbConnect = require('./mongodb');

const insert = async () => {
    let db = await dbConnect();
    // const result = await db.insertOne(   // To add single data
    //     { name: 'note 5', brand: 'vivo', price: 320, category: 'mobile' }
    // );
    const result = await db.insertMany([
        { name: 'max 1', brand: 'micromax', price: 220, category: 'mobile' },
        { name: 'max 2', brand: 'micromax', price: 320, category: 'mobile' },
        { name: 'max 3', brand: 'micromax', price: 420, category: 'mobile' },
    ])

    if (result.acknowledged) {
        console.log("Data inserted successfully");
    }
}
insert();