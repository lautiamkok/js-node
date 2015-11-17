var http = require('http');
var hello = require('hello');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end(hello.world());
});
server.listen(8080);
