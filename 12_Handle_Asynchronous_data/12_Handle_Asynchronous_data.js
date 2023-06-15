/*
* Handle Asynchronous Data in Node Js ->>>
    - To handle the Asynchronous data we can use Promises or Async/Await
    - Promise are the function that handle the data that takes time to load

    * Promise ->>
        - promise represents the value which we don't know but will know in future
        - promise is constructor function or class
        - Code example : 
        const bucket = ['coffee', 'chips','vegetables','salt','rice'];

        // produce 
        const friedRicePromise = new Promise((resolve,reject)=>{
            if(bucket.includes("vegetables")){
                resolve("Success");
            }else{
                reject("could not do it");
            }
        })

        // consume 
        // how to consume 

        friedRicePromise.then((myfriedRice)=>{
            console.log("lets eat ", myfriedRice);
            }).catch((error)=>{
                console.log(error)
            })
        // Output : lets eat  Success

*/

// Promise Example :

let a = 20, b = 0;

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 2000);
})

waitingData.then((data) => {
    b = data;
    console.log(a + b);
});