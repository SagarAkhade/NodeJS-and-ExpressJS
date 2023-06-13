/*
* Show file list in Node Js ->>>
    - Here we are creating the multiple file inside the particular folder
    - When we need to create the multiple files in particular folder we can create them using loop
      in NodeJS
    - To create a simple file and add content in it we import fs and do like this below
        fs.writeFileSync('nameOfFile.txt', 'content of file here');
    - Now here we want to create multiple files inside the particular folder so first we get the path of the folder
    - For getting the path of folder we import path module and do like this below
        const path = require('path');
    - Now we get the path of the folder and create multiple files inside the particular folder
    - __dirname -> is used to get the path of the folder
    - Now to get the complete path first do like this below
        const dirPath = path.join(__dirname, 'folderInWhichYouWantToCreateMultipleFiles');
    - Now using the loop and writeFileSync we have successfully created multiple files in particular folder

* File listing ->>
    - Now to show the file listing we use .readdir() function
    - .readdir() -> is used to show the file listing
    - .readdir() takes the 2 parameters first is the path of the folder and second is the callback function
    - Below is use of .readdir() function
        fs.readdir(dirPath, (err, files) => {
            files.map((item) => {                  //files is array of files list so we use map
                console.log("File name is : " + item);
            })
        })
*/

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

for (let i = 0; i < 5; i++) {
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, "a simple text file");
}

// Showing list of files -
fs.readdir(dirPath, (err, files) => {
    files.map((item) => {
        console.log("File name is : " + item);
    })
})

// Ouput -
// File name is : hello0.txt
// File name is : hello1.txt
// File name is : hello2.txt
// File name is : hello3.txt
// File name is : hello4.txt


