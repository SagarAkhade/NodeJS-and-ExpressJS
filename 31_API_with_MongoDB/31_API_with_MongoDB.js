/*
* API with MongoDB ->>>
    - There are various operation done on API such major operations are
        get(get the data from database), 
        post(save the data to database), 
        put(update the data in database),
        delete(delete the data from database)
    - From now we are creating the common connection MongoDB function in global and use the same file
        const { MongoClient } =  require("mongodb");
        const url = "mongodb://127.0.0.1:27017";
        const database = "e-comm";
        const client = new MongoClient(url);

        async function dbConnect(){
            let result = await client.connect();
            let db = result.db(database);
            return db.collection('products');
        }
        module.exports = dbConnect;
    - Now we have to import the MongoDB connection function from that common connection file like done below
        const dbConnect = require('../mongodb');
    - Now we are importing the express module like done below
        const express = require('express');
    - Now we have to made that express module executable like done below
        const app = express();

* GET method of API ->>
    - Now are creating the simple get API using the express module
    - The Get API is done by using the .get() method of express module
    - Now we are showing the data from the database to the browser as done below
        app.get('/', async (req, res) => {
            let data = await dbConnect();
            data = await data.find().toArray();     // .find().toArray(); -> give structured form of data
            res.send(data);                         // .send(data) method is used to send the data 
        })
    - Now after creating the API we have to run the server as done below
        app.listen(portNumber);
        Ex : app.listen(5000);
    - Now we can test this API on Postman just do the following steps
        1. Go to Postman
        2. Select the GET method
        3. Now enter this URL -> http://localhost:5000/  [Basically the API URL]
        4. The data will be shown in JSON format

* POST method of API ->>>
    - POST method of API is used to add the data to the database
    - The POST API is done by using the .post() method of express module
    - To post the data from Postman we need to add this line for posting the data as done below
        app.use(express.json());       // this will make the data to post using the Postman
    - Now to post data in Postman first go to the "Body" from there select "raw" and then select "JSON"
        Body -> raw -> JSON
    - Now we are posting the data from Postman to our MongoDB database as done below
        app.post('/', async (req, res) => {
            let data = await dbConnect();
            let result = await data.insertOne(req.body);
            res.send(result);
        })
    - In the successfull post of the data from Postman we can see the responce in Postman as shown below 
        {
            "acknowledged": true,
            "insertedId": "64ce5c1748e8a58be287bb9b"
        }
    - To post the multiple data at once we have to pass the data in an array as done below
        [{name:'i phone', brand:'apple', price:1250, category:'mobile'}, {name:'U10', brand:'oppo', price:500, category:'mobile'}]

* PUT method of API ->>>
    - PUT method of API is used to update the data in the database
    - The PUT API is done by using the .put() method of express module
    - We can also update the data in database using the POST method but for the right practice always use 
      PUT method to upate
    - Here we are updating the data from the Postman to the MongoDB database as done below
        * Static data updated ->
            app.put('/', async (req, res) => {
                console.log(req.body);          // Output : All the data which we update from the Postman is shown in console
                let data = await dbConnect();
                let result = await data.updateOne(        
                    { name: 'samsung m21' },          // This is condition for which key-value pair data to be updated
                    { $set: {price:5550} }            // This is for the data whose value to be update
                )
                res.send({ result: 'update' });      // This is just for the responce of the Update
            })
        * Dynamic data updated ->
            app.put('/', async (req, res) => {
                console.log(req.body);          // Output : All the data which we update from the Postman is shown in console
                let data = await dbConnect();
                let result = await data.updateOne(
                    { name: 'samsung m21' },
                    { $set: req.body }          // res.body is complete object which will be updated
                )
                res.send({ result: 'update' });
            })
        * Dynamic condition for key value pair ->
            app.put('/', async (req, res) => {
                console.log(req.body);          // Output : All the data which we update from the Postman is shown in console
                let data = await dbConnect();
                let result = await data.updateOne(
                    { name: req.body.name },    // This condition we have dynamically get from the Postman itself
                    { $set: req.body }
                )
                res.send({ result: 'update' });
            })
        * Dynamic update conditions key-value pair from query params ->
            app.put('/:name', async (req, res) => {
                console.log(req.body);          // Output : All the data which we update from the Postman is shown in console
                let data = await dbConnect();
                let result = await data.updateOne(
                    { name: req.params.name },
                    { $set: req.body }
                )
                res.send({ result: 'update' });
            })
            - Here we are passing the condition from the params itself just we need to hit in postman as done below
                http://localhost:5000/nameOfParticularObjectToBeUpdated
                Ex: http://localhost:5000/samsung m21
    - Similarly to POST we have to done same for the PUT method in Postman just do the following
        Body -> raw -> JSON
    
* DELETE method of API ->>>
    - DELETE method of API is used to delete the data from the database
    - The DELETE API is done by using the .delete() method of express module
    - To delete the data from MongoDB database using the API in Postman we need to do like this 
        app.delete('/:id', async (req, res) => {
            console.log(req.params.id);
            const data = await dbConnect();
            const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });   // new mongodb.ObjectId(IDWhichWeWantToDelete)
            res.send(result);
        })
    - For deleting the particular ID we need to import the intance of mongodb like done below
        const mongodb = require('mongodb');
    - And then now to target that particular ID we need to use this mongodb instance as done below
        { _id: new mongodb.ObjectId(req.params.id) }      // because ID in MongoDB is object itself
    - For Delete method in Postman just do the following
        Body -> raw -> JSON

*/

const mongodb = require('mongodb');
const dbConnect = require('../mongodb')
const express = require('express');
const app = express();

app.use(express.json());    // This is very important

// Get API
app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    res.send(data);
});

// Post API
app.post('/', async (req, res) => {
    let data = await dbConnect();
    // let result = await data.insertOne(req.body);    // Add single data
    let result = await data.insertMany(req.body);      // Add multiple data
    res.send(result);
})

// Put API
app.put('/:name', async (req, res) => {
    console.log(req.body);          // Output : All the data which we update from the Postman is shown in console
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    // res.send( req.body );
    res.send({ result: 'update' });
})

// Delete API
app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send(result);
})



app.listen(5000);