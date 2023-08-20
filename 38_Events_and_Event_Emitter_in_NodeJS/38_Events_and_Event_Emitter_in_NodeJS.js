/*
* Events and Event Emitter in NodeJS ->>>
    - Events are basically the trigger of some actions which we want to happen eg. mouse click, keyboard press, etc
    - Event Emitter are basically the things which generate the events
    - Emitter is generator or producer of events
    - Example of Emitter in HTML/JS are buttons
    - Now in NodeJS, Event Emitters are basically the API's
    - To use the event emitter we first need to import it like done below
        const EventEmitter = require('events');      // Here EventEmitter is in Pascal case because it is a class
    - The events module is inbuilt package in NodeJS so we don't need to install it externally
    - Now here we create the simple event for counting the number of times our API called
    - To create the event first we need to create the instance of the event like done below
        const event = new EventEmitter();
    - Now we have to create the event function as done below
        event.on("countAPI", () => {          //event.on('anyEventName', callbackFunction)   
            count++;
            console.log("event called", count);
        })
    - Now we can add this event in our API like done below
        app.get('/', (req, res) => {
            res.send("API called");
            event.emit("countAPI");         //event.emit('anyEventName') -> triggers the event
        })

*/

const express = require('express');
const EventEmitter = require('events');
const app = express();

const event = new EventEmitter();

let count = 0;
event.on("countAPI", () => {
    count++;
    console.log("event called", count);
})

app.get('/', (req, res) => {
    res.send("API called");
    event.emit("countAPI");
})

app.get('/search', (req, res) => {
    res.send("Search API called");
    event.emit("countAPI");
})

app.get('/update', (req, res) => {
    res.send("Update API called");
    event.emit("countAPI");
})

app.listen(5000)