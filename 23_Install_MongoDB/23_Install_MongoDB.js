/*
* Install MongoDB ->>>
    - MongoDB is a NoSQL database
    - MongoDB is basically the compass tool which we use for the data base
    - To download the MongoDB go to google and type "donwload mongodb"
    - From there go to MongoDB Community Server Download and select the current vaersion (v6.0.8 when I download)
    - Download msi file from there for easy convenience
    - The below is direct download link for the msi file
        https://www.mongodb.com/try/download/community-kubernetes-operator
    - After downloading the msi file we need to install it 
    - Just click on downloaded msi file and finish the normal installation process it takes some time to install
    - To check that our mongoDB is perfectly install open command prompt and type the below command
        mongo
    - For the first time it may show error just search that error on google and fix it 
    - Also we can check number of database using below command in cmd
        show dbs
    - After installing the MongoDB we need to install MongoDB Shell to run above commands correctly in command prompt 
      as earlier it is giving me error
    - So we go to MongoDB download site from there inside the Tools section download the MongoDB Shell zip file
    - Extract this MongoDB shell zip file in this directory C:/Program Files/MongoDB/
    - This is complete installation process video plz prefer this 
        https://www.youtube.com/watch?v=gB6WLkSrtJk
    - We need to set the environment to use MongoDB commands in cmd
    - Go to search bar of windows type environment variables and open Edit System Environment Variables
    - From there add the path as done in above video
    - Now type the below command which shows that MongDB is installed successfully
        mongosh
    - Now we have open MongDB Compass which is GUI i.e. Graphical User Interface
    - In MongoDB Compass we have connected the deafult database by clicking on Connect option
    - It shows 3 default databses -> admin, config and local
    - Also we can check these databases using below command in cmd
        first type : mongosh
        then type : show dbs -> will show all the databases
    - We can also delete these databases
    - We can also create the new database by clicking on Create Database option
    - We have created the simple database, it asked for database name : code-step-by-step [any name]
       then asked for collection name : node-tut [any name] and then clicking on create button
       our new database is created successfully
    
*/