/*
* Core Modules in NodeJS ->>>
    - Core modules are the basic features of NodeJS like connecting with data base, creating files,
    processing codes, calling API's, etc
    - Core modules are already exists with NodeJS
    - Examples of core module in NodeJS
        console.log, Buffer, HTTP, File System, etc
    - There are two types of core modules
        1. Global modules
        2. Non-global modules

* Global Modules in NodeJS ->>
    - Global modules are the module that are not needed to import them specifically
    - Examples of global modules in NodeJS : 
        console,

* Non-global modules in NodeJS ->>
    - Non-global modules are the modules that are needed to import them specifically
    - Examples of non-global modules in NodeJS :
        fs,
*/

// Gobal Modules : 
console.log("code step by step");
console.log(__dirname);    //prints the current directory name [file path]
console.log(__filename);   // prints the current file name

// Non-global Modules :
// - Here we are using file system module writeFileSync which creates file and writes to it
const fs = require('fs');
fs.writeFileSync("03_2_core_modules.txt", "Hello World");

// We can directly import the writeFileSync function from the fs module like below
// const fs = require('fs').writeFileSync;
// fs("03_2_core_modules.txt", "Hello World");