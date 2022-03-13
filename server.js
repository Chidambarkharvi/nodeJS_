const http = require('http');
const server = http.createServer((request, response) => {
    console.log("server has been created")
    console.log("request",request)
    console.log("response",response)
    response.write("this is first part of the response")
    response.write("this is second part of the response")
    response.end("this is first server we have created")



})
server.listen(4000,()=>{
    console.log("this server is listening on port number 4000")
})