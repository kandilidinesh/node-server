const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method; 
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
    if (url === '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', (buffer) => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('Message.txt', message);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
};

// Type 1
// module.exports = requestHandler;

// Type 2
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };

//Type 3
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";

//Type 4
exports.handler = requestHandler;
exports.someText = "Some hard coded text";