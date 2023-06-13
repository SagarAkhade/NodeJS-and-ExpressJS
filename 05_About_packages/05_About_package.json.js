/*
* All about package.json in NodeJS ->>>
    - Package.json is a file that contains all the information about the project
    - It contains all version of packages
    - To create package.json file use below command in terminal
        npm init
    - After hitting above command it will ask for the package name then version, then description,
    then entry point, then asks for test command, then git repository, then keywords, then author,
    then license, etc
    - After taking all information it create the file and ask for the confirmation and after confirmation it 
    will create the package.json file
    - We have install npm colors package to see the changes in package.json file
    - After installation npm install colors it will create node_modules folder which carry all packages
    - For checking, we install another package 
    - package-lock.json file contains all the information of all the packages of project
    - package.json file is very important once it deleted all project will destroy the dependencies
    - If our node_modules folder is deleted then all the dependencies will be deleted
    - So to get that node_modules folder we use below command in terminal
        npm install

* Interview Questions:
Q. Node JS is single threaded or multi threaded?
Ans - Node JS is single threaded, which executes the code line by line

* Right way to push code to GitHub ->>>
    - As we push code to GitHub it will automatically push the node_modules folder 
    which not neccessary
    - To ignore the node_modules folder we create .gitignore file
    - .gitignore file is used to ignore the node_modules folder and any other file that we don't want to push
    - In .gitignore file to ignoring the folder just write like is 
        /node_modules
    - And to ignore the file just write its name
*/

// This is sample colors package we are using here
var colors = require('colors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass