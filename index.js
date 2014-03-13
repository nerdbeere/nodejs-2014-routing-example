var http = require('http');
var server = http.createServer();
var Router = require('./Router');
var awesomeModule = require('./awesomeModule')

var router = new Router();

router.addRoute('/', 'GET', function(req, res) {
    res.end('yeah');
});

router.addRoute('/awesome', 'GET', awesomeModule);

server.listen(3000, '127.0.0.1');
server.on('request', function(req, res) {
	router.dispatch(req, res);
});