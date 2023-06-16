/*
* How Node js works ->>>
    - Node works Asynchronously
    - In Node JS execution is done like Call Stack -> Node APIs -> Callback Queue 
      this is called as Event Loop in Node
    - In Node JS first main() function goes in call stack everytime and then other functions 
    - setTimeout() function goes in Node API because it is function of c language
    - setTimeout() function goes from Node API to Callback Queue and after completion of main function
      it goes to call stack for execution
*/

console.log("stating up");

setTimeout(() => {
    console.log("2 seconds log");
}, 2000)

setTimeout(() => {
    console.log("0 seconds log");
}, 0)

console.log("finishing up");

// Output :
// stating up
// finishing up
// 0 seconds log
// 2 seconds log