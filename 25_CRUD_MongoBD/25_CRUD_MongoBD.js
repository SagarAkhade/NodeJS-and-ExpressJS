/*
* CRUD Operations in MongoDB ->>>
    - CRUD - Create, Read, Update, Delete
    - In MongoDB we can create, read, update and delete the data
    - Using MongoDB we have created a new Database called e-comm and added the collection name as products

* Create data in MongoDB ->
    - Now we have to first go to products table to insert the data 
    - There are two ways to insert the data in MongoDB : 1) using Mongosh command line  2) using MongoDB compass GUI
        1) Using Mongosh command line
            - first go to that particular database using below command
                use databaseName       -> will go to that database  Ex: use e-comm
            - Then we can add the single data in collection using below command
                db.collectionName.insertOne({dataInFormOfObject})
                Ex : db.products.insertOne({name : 'm 40',brand : 'samsung', price : 250, category : 'mobile'})
                Note : donnot add id key to the data, MongoBD will add it automatically
            - Now on successfull addition of the data it gives the message as below
                {
                    acknowledged: true,
                    insertedId: ObjectId("64c66e3d46213bb8dc8aa74e")
                }
            - Similarly we can add more data
            - To add multiple data at once use [] to wrap all objects like done below
                db.products.insertMany([{name:'i phone', brand:'apple', price:1250, category:'mobile'}, {name:'U10', brand:'oppo', price:500, category:'mobile'}])
        2) Using MongoDB compass GUI
            - Go to particular database in GUI and go to that particular collection
            - From there click on Add Data then Insert Document : [Add Data -> Insert Document]
            - And add the data inside the GUI directly like done below
                {
                    "_id": {
                    "$oid": "64c66ff05de3dda191760ef9"
                    },
                    "name":"U10",
                    "brand":"vivo",
                    "price":200,
                    "category":"mobile"
                }
            - Note : id is automatically generated donnot change it, also use "key":"value" format double inverted commas are must

* Read data in MongoDB ->
    - To check the data in Mongosh cmd use the below command 
        db.collectionName.find()
        Ex : db.products.find()  -> All data in collection printed

* Update data in MongoDB ->
    - To update the data in MongoDB we can easily update using GUI just click on edit button and then update
    - Now to update data using Mongosh command line use the below command
        db.collectionName.updateOne({keyWhoseDataToBeUpdated : valueWhoseDataToBeUpdated},{$set : {keyWhoseDataToBeUpdated : newValueToBeUpdated}})
            keyWhoseDataToBeUpdated -> any columns key : value pair whose data to update
        Ex : db.products.updateOne({name:'U10'}, {$set:{brand:'oppo'}})

* Delete data in MongoDB ->
    - To delete the data in MongoDB we can easily delete using GUI just click on delete button of particular data and then update
    - Now to delete data using Mongosh command line use the below command
        db.collectionName.deleteOne({keyWhoseDataToBeDeleted : valueWhoseDataToBeDeleted})
            keyWhoseDataToBeDeleted -> any columns key : value pair whose data to delete
        Ex : db.products.deleteOne({brand:'apple'})
    - On success of deletion it gives the message as below
        {
            acknowledged: true,
            deletedCount: 1
        }
*/