const http = require("http");
const handler = require("./handler");

const server = http.createServer(handler.handleRequest).listen(3000, () => {
  console.log("the server is listening on the port 3000");
});
