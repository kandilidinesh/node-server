const http = require('http');

// Callback Server Function
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); 
    //process.exit();
    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <title> My First Page</title> <body> <h1> Hello World!</h1> </body></html>');
    res.end();
});

server.listen(3000);