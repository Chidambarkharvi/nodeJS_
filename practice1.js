const url=require('url')
const http=require('http')
const fs=require('fs')

http.createServer((request,response)=>{
    const reqUrl=url.parse(request.url,true)
     response.write("this has come from server")
     response.write(JSON.stringify(reqUrl.query))
     
     fs.appendFile("./assignment/view.txt",JSON.stringify(reqUrl.query), (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("data written successfully");
        }
    })
     response.end()
}).listen(4017,()=>{
    console.log("the server is listening on port no 3000");
})

 