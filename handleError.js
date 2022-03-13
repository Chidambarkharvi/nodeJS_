console.log("start");
const fs = require("fs");

try{
    const data = fs.readFileSync("./view/view.txt");
    console.log(data.toString())
}
catch{
    console.log("error has been caught")

}

const data = fs.readFile("./data/data.txt",(error,data)=>{
if(error){
console.error(error)

}
else {
console.log(data.toString())
}
});

console.log("end");
