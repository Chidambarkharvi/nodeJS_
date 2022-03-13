const fs = require("fs");
const http = require("http");

// const a = fs.writeFile("parctice5","hello world",(err)=>{
// console.log(err)
// })
// console.log(a)

// if(!fs.existsSync("practice6")){
//     fs.mkdirSync("practice6")
// }else{
//     fs.writeFileSync("practice6/pract.txt","hello sachin")
//  const data =    fs.readFileSync("practice6/pract.txt")
//  console.log(data.toString())
// }

http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      fs.readFile("practice6/pract.txt", (err, data) => {
        if (err) {
          res.writeHead(404, {
            "content-Type": "text/plain",
          });
          res.end("endd");
        } else {
          res.writeHead(200, {
            "content-Type": "text/plain",
          });
          res.write(data);
          res.end("done");
        }
      });
    } else {
      res.writeHead(404, {
        "content-Type": "text/plain",
      });
      res.end("didtd ddjc");
    }
  })
  .listen(3009, () => {
    console.log("the server is listening on port 3000");
  });
