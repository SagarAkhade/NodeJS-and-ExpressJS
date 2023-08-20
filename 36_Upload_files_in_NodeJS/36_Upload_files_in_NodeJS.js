/*
* Upload files in NodeJS ->>>
    - Using the NodeJS we can upload files 
    - For uploading the files we need to import the multer npm package
    - To install the multer package use the following command in terminal
        npm install multer
    - After installing the multer package we need to import it like done below
        const multer = require('multer');
    - Now we need to import the express package for creating the POST API which will upload the file 
    - Then we have created the multer function, we can take reference from the multer documentation
    - The multer function is as done below
        const upload = multer({
            storage: multer.diskStorage({                                       // This is basic syntax to upload files
                destination: (req, file, cb) => {                               // cb is callback function
                    cb(null, "./36_Upload_files_in_NodeJS/uploads");            // cb(null, "nameOfExactFolderPathToStoreUploadedFiles")
                },
                filename: (req, file, cb) => {
                    cb(null, file.fieldname + "_" + Date.now() + ".jpg");       // This is the name of the file that we are uploading 
                }                                                               // Asuming that file is always the image file (.jpg)
            })
        }).single("user_file")                                                  // .single("hereFieldNameComes") for uploading single file
    - To add the multiple files at once we use .array() method
    - Now to upload the file from the postman we create the post request for this URL 
    - Now from the Postman we go to the body -> then select the form data -> add the key as user_file -> and then select the file option
    - Now we use this multer function as middleware for the post request as done below
        app.post('/upload', upload, (req, res) => {
            res.send('File uploaded successfully');
        })
    - Now we need to start the server as done below
        app.listen(5000);
    - We can also upload the files using the normal NodeJS module but molter package is better and simple to use

*/

const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, "./36_Upload_files_in_NodeJS/uploads");
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "_" + Date.now() + ".jpg");
        }
    })
}).single("user_file")

app.post('/upload', upload, (req, res) => {
    res.send('File uploaded successfully');
})

app.listen(5000);