console.log("program start");

const fs=require("fs");
if(!fs.existsSync("demo")){
    fs.mkdirSync("demo")
}
else{
    fs.writeFileSync("demo/test.txt", "this is first node js class  "); 
    console.log("data has written successfully")

    const data = fs.readFileSync("demo/test.txt")
    console.log(data)
    console.log(data.toString())

}
console.log("program end")