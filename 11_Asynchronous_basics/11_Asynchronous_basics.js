/*
* Asynchronous Basics in Node Js ->>> 
    * Synchronous -
        - In Synchronus operation, tasks are performed one at a time
        - Ex : PHP is synchronus language
    * Asynchronous -
        - In Asynchronous, second task donot wait to finish first task
        - Ex : NodeJS is asynchronous, JS language
        - The main drawback of asynchronous is that it will not update the values which 
          has some delayed
        - Example :
            let a = 10, b = 0;
            setTimeout(() => {
                b = 20;
            }, 2000);
            console.log(a + b); 
            // Output : 10   [Here it has not updated the b's value as it has some delayed in update]
*/

// Asynchronous example
console.log('start execution');

setTimeout(() => {
    console.log('logic execution');
}, 2000)

console.log('complete execution');