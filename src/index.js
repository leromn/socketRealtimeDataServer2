const http = require('http');

const appName = `Node JS Template`;

//create a server object:
http
  .createServer((req, res) => {
    res.write(appName); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
