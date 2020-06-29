const http = require('http');

//Imported local module
const routes = require('./routes');

//Key Value Pair in Hard Coded Text Module
console.log(routes.someText);

// Callback Server Function
const server = http.createServer(routes.handler);

server.listen(3000);