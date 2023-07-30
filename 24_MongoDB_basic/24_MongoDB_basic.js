/*
* MongoDB basic ->>>
    - MongoDB is a NoSQL database
    - The data stored in a collection
    - Collection don't have row and columns
    - Data is stored in form of object
    - In MongoDB data is not in structured form which gives advantage for the optional 
      info to stored, but in case of SQL already we have specific column is created to store 
      that particular info which takes the more space
    - In SQL(Structured Query Language) data is stored in table, which covers almost all databases 
      like MySQL, Oracle, SQL Server
    - To access mongoDB we can use cmd and type the command 'mongosh' OR we can directly 
       use Mongodb Compass (mostly preffered)
    - We can connect multiple project to our multiple database 
    - Now we have open the MongoDB Compass which is GUI i.e. Graphical User Interface
    - Where we first connect the database by clicking on Connect option
    - We can also use the MongoDB using the cmd and type the below commands
        first type : mongosh
        then type : show dbs -> will show all the databases
    - We have have the terminal inside the MongoDB Compass itself just click on bottom left corner where 
       _MONGOSH is written and type the commonds like show dbs
    - We can create the new database by clicking on Create Database option in GUI itself
    - We have created the simple database, it asked for database name : code-step-by-step [any name]
        then asked for collection name : node-tut [any name] and then clicking on create button
        our new database is created successfully
    - Now to delete Database we can click on Delete icon in GUI itself 
    - To create the database using MongoDB command shell use below command
        firts type : use databaseName       -> will create the database  Ex: use youtube
    - Now the new database is created but it will not shown until we add the collection to it
    - For adding the collection we can use below command in MongoDB command shell
        db.createCollection('collectionName')  -> will create the collection in database   Ex: db.createCollection('videos')
    - Now the new database with collection is successfully created it give success message as below
        { "ok" : 1 }
    - In particular databas to see collections use the below command in MongoDB command shell
        show collections  -> It will show all the collections in particular database
    - Now we can add multiple collection in particular database just use below command
        db.createCollection('collectionName') 
    - Now to delete the particular collection we can use below command
        db.collectionName.drop()  -> will delete the collection in particular database,   Ex: db.videos.drop()
    - Now for the confirmation that collection has deleted it gives the message as 'true'
    - For creating and deleting collection can also done using the GUI also
    - To switch the different databases we can use below command in MongoDB command shell
        use databaseName       -> will switch the database  Ex: use youtube
    - Now to delete the complete database use below command in MongoDB command shell
        First go to that database   :  use databaseName
        now to delete that database :  db.dropDatabase()
    - Now the database is deleted successfully and below confirmation message is shown
        { "ok" : 1, dropped : "databaseName" }


*/