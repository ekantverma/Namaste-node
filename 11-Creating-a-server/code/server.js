// Creating a server
const http = require('node:http');

const server = http.createServer(function(req, res) {
    // reply to them
    if(req.url === '/data'){
        res.end("data");
    }
    res.end("Hello Server ji!")

});

server.listen(8080);

// This method not for production server
// for production we use express js 