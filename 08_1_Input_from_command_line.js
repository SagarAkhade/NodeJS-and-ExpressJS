/*
* Input from Command line in Node Js ->>>
    - Here we taking the input from the command line of terminal and use them in our main files
    - process is object which contains the all the information about the node
    - To see the process do like this below
        console.log(process);
    - In command line first run the node file and pass some arguments like this below
        node nameOfFile.js anyNumberOfArguments
    - process.argv - argument vector is used to get the argument from the command line
        console.log(process.argv);
    - process.argv -> is an array whose first two elements are fix ie. node directory path and file directory path
    - process.argv[2] -> is used to get the second argument from the command line which we pass and that argument 
      can be used in our main files
        console.log(process.argv[2]);

* Creating the file and add data in it using Command Line ->>
    - To create the file we have to use 'fs' module(file system)
    - .writeFileSync(nameofFile.txt, 'content of file here') -> is used to create the file with content
    - Now here are getting the name of file and content of the file both from the command line itself
    - For creating the file using the command line we do like this below
        node nameOfAlereadyCreatedFile.js nameOfAnotherFileToCreate.txt 'content of file here'

* Remove file using Command Line ->>
    - To remove the file we have to use 'fs' module as same above
    - .unlinkSync('nameofFile.txt') -> is used to remove the file
*/

// prodess object in Node Js -
// console.log(process.argv[3]);

// Creating the file and add data in it using Command Line ->>
// const input = process.argv;
// const fs = require('fs');
// fs.writeFileSync(input[2], input[3]);

// Adding and removing the files dynamically from the command line ->>
const input = process.argv;
const fs = require('fs');
if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log("Invalid input");
}

