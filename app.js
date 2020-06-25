const http = require('http');

// Callback Server Function
const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === '/'){
        // res.write('<html> <head><title>Store Data</title></head> <body> <form action="/message" method="POST"> Enter the Data: <input type="text" name="" id=""> <button type="submit">Save on server</button></form></body></html>');
        res.write('<html>');
        res.write('<head><title> Enter Message </title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message">');
        res.write('<button type="submit"> Save on Server</button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end();
    }
});

server.listen(3000);