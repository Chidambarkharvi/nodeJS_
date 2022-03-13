const events  = require('events')
const EventEmitter = events.EventEmitter;
const eventEmitter = new EventEmitter();

//publishers of events

eventEmitter.on("test",()=>{
    console.log("this is first part of the test event");
})

eventEmitter.on("test",()=>{
    console.log("this is second part of the test event");
})

eventEmitter.on("add",(a,b)=>{
    console.log("sum of a,b",(a+b))
})

// Listner of the add Event
eventEmitter.emit("add",12,12)

// Listner of the test Event
eventEmitter.emit("test")

//Event names
console.log(eventEmitter.eventNames())

const prod =  ( a,b) =>{
    console.log("the product result",(a*b));

}
eventEmitter.on("product",prod);

eventEmitter.emit("product",12,10);
//events names before removing events
console.log(eventEmitter.eventNames());

eventEmitter.removeListener("product",prod);
//events names after removing events and
console.log(eventEmitter.eventNames());

const eventEmitter1 = new EventEmitter();


eventEmitter1.on("test",()=>{
    console.log("this is first publisher of the test event");
})

eventEmitter1.on("test",()=>{
    console.log("this is second publisher of the test event");
})

eventEmitter1.emit("test")



const eventEmitter2 = new EventEmitter();

eventEmitter2.once("demo1",()=>{
    console.log("this is the first publisher of demo1 event")
})

eventEmitter2.once("demo1",()=>{
    console.log("this is the second publisher of demo1 event")
})

eventEmitter2.emit("demo1")
eventEmitter2.emit("test")


console.log(eventEmitter2.eventNames())