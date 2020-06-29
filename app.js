const http = require('http');

//Imported local module
const routes = require('./routes');

// Callback Server Function
const server = http.createServer(routes);

server.listen(3000);