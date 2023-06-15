/*
* CRUD with File System in Node Js ->>>
    - CURD (Create, Update, Read, Delete)

* Create file -> 
    - For creating the file we need to import the fs module
    - Now we use .writeFileSync("nameOfFile.txt", 'content of file here') function to create the file
    - Here we are creating the file inside the folder so we use path module

* Read file ->
    - To read the content of the file we use .readFile() function
    - .readFile() takes the 3 parameters first is the path of the file and second is the 'utf8' for reading
      content and third is callback functin
        fs.readFile(filePath, 'utf8', (err, data) => {
            console.log(data)
        })
    
* Update file ->
    - To update the content of the file we use .appendFile() function
    - .appendFile() takes the 3 parameters first is the path of the file and second is the content
       that we want to update and third is callback function
            fs.appendFile(filePath, 'content that we want to update', (err) => {
                if(!err) console.log("File updated successfully");
            })

* Rename file ->
    - To rename the file we use .rename() function
    - .rename() takes the 3 parameters first is the old path of the file and second is the new file name
      with that path and third is callback function for handling the err
            fs.rename(filePath, `${dirPath}/newFileName.txt`, (err) => {
                if(!err) console.log("File renamed successfully");
            })

* Delete file ->
    - To delete the file we use .unlinkSync() function
        fs.unlinkSync(filePath);

* Interview Question ->
    Q. Whai is buffer in NodeJS? 
    Ans - Buffer is the temporary memory location required to perform the operation by NodeJS
*/

// Create file - 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CURD');
const filePath = `${dirPath}/apple.txt`;
fs.writeFileSync(filePath, 'This is simple text');

// Read file -
fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item);
})
// Output 
// This is simple text - Content of the targeted file

// Update file -    
fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
    if (!err) console.log('File updated successfully');
})

// Rename file -
fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
    if (!err) console.log("File renamed successfully");
})

// Delete file -
fs.unlinkSync(`${dirPath}/fruit.txt`);