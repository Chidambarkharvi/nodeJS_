const url = require('url')
const http = require('http')

http.createServer((request, response) => {
const reqUrl = url.parse(request.url,true)

console.log(reqUrl.query.id)
console.log(reqUrl.query.name)
response.write("this has come from our server");
response.write(JSON.stringify(reqUrl.query));
response.end();

}).listen(4000,()=>{
    console.log("the server is running on port 3000")
})

// const http = require('http');
// const url = require('url');

// http
//   .createServer(function (req, res) {
//     const queryObject = url.parse(req.url, true).query;
//     console.log(queryObject);

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Feel free to add query parameters to the end of the url');
//   })
//   .listen(8080);