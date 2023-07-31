/*
* Connect Node with MongoDB ->>> 
    - MongoDB is a NoSQL database which has collections of data
    - To connect the MongoDB to NodeJS first we need to install mongoDB npm in node project 
    - To install mongoDB use the below command
        npm i mongodb
    - Now to use mongoDB first import like this below 
        const { MongoClient } = require('mongodb');
    - Then we need to integrate the url of MongoDB with NodeJS like done below
        const url = "mongodb://localhost:27017" -> By default the URL is same for the localhost
        Note : In my local server it is not working so I did like this below
        const url = "mongodb://0.0.0.0:27017"
        - OR we can like to this also localhost -> 127.0.0.1
        const url = 'mongodb://127.0.0.1:27017';   // this is exactly the localhost url
    - Generally the database name is comman so it writen at top like done below
        const database = "databaseNameOfMongoDB";
        Ex: const database = "e-comm";
    - Now to connect Node with MongoDB we do connection like this below
        const client = new MongoClient(url);
    - Now we have created the async function to fetch the data from MongoDB database
        async function getData () {
            let result = await client.connect();    // .connect() method is used to connect with MongoDB
            let db = result.db(database);
            let collection = db.collection('collectionName');
            let response = await collection.find({}).toArray();  // this .toArray() method is used for getting data in array format
            console.log(response);
        }
        getData();
    
*/

const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';  // By default the URL is same for the localhost but not worked for me
// const url = 'mongodb://0.0.0.0:27017';
const url = 'mongodb://127.0.0.1:27017';
const database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection('products');
  let response = await collection.find({}).toArray();
  console.log(response);
}
getData();

// Output :- All the data from MongoDB shown in array format
/*
[
  {
    _id: new ObjectId("64c66e3d46213bb8dc8aa74e"),
    name: 'm 40',
    brand: 'samsung',
    price: 250,
    category: 'mobile'
  },
  {
    _id: new ObjectId("64c6776146213bb8dc8aa751"),
    name: 'U10',
    brand: 'oppo',
    price: 500,
    category: 'mobile'
  },
  {
    _id: new ObjectId("64c68acc5de3dda191760efd"),
    name: 'nokia 1100',
    brand: 'Nokia',
    price: 100,
    category: 'mobile'
  }
]
*/

