console.log("program started");
const os=require("os")

//os architecture

console.log("architecture",os.arch());

//os platform

console.log("platform" , os.platform())

//total free memory 
console.log("Total free memory" , os.freemem()/(1024*1024*1024))

//Total memory
console.log("Total memory" , os.totalmem()/(1024*1024*1024))

//CPUS

console.log("CPUS",os.cpus())

console.log("end")