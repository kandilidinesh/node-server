const http = require('http');

// Callback Server Function
const server = http.createServer((req, res) => {
    console.log("Request Recieved");
});

server.listen(3000);