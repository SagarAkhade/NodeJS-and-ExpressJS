/*
* Read data from MongoDB ->>>
    - Here we are reading data from MongoDB
    - In MongoDB connection with database is always done using single function and which is called
      multiple time where it required
    - The MongoDB connection is single file which we create
    - So we have created the file name as mongodb.js -> which for the common connection file
    - And connection code is written as simple we have done before
        const { MongoClient } = require('mongodb');
        const url = 'mongodb://127.0.0.1:27017';
        const database = 'e-comm';
        const client = new MongoClient(url);

        async function dbConnect() {
            let result = await client.connect();
            let db = result.db(database);
            return db.collection('products');
        }
        module.exports = dbConnect;
    - Here dbConnect function is promise, so to resolved the promise we use then() and catch() method. These are callback functions
        dbConnect().then((resp)=>{
            resp.find({}).toArray().then((data)=>{   // .toArray() method also returning the promise so we need to resolve it 
                console.log(data)
            })
        })

        dbConnect().then((resp)=>{
            resp.find({name:'U10'}).toArray().then((data)=>{     // .find({name:'U10'}) method returns the particular data
                console.log(data)
            })
        })
    - This above method is quite old method
    - The modern amd easy to use method to print the data as done below
        const main = async () => {
            let data = await dbConnect();
            data = await data.find().toArray();
            console.log(data, 'from main function');        // All data from the database is printed
        }
        main();

*/

const dbConnect = require('./mongodb');

dbConnect().then((resp) => {
    resp.find({}).toArray().then((data) => {        //For all data
        console.log(data)                           // All data from the database is printed
    })
})

dbConnect().then((resp) => {
    resp.find({ name: 'U10' }).toArray().then((data) => {      //For single data
        console.log(data)                                      // particular data from the database is printed
    })
})

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data, 'from main function');        // All data from the database is printed
}
main();
