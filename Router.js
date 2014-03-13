var Router = function () {
    this.routes = {
        'GET': [],
        'POST': [],
        'PUT': [],
        'DELETE': []
    }
};

Router.prototype.addRoute = function (regex, method, fn) {
    this.routes[method].push({ path: regex, func: fn })
};

Router.prototype.dispatch = function (req, res) {
    var routes = this.routes[req.method];
    for (var i = 0; i < routes.length; i++) {
        var route = routes[i];
        if(typeof route.path === 'object' && route.path.test(req.url)) {
            return route.func(req, res);
        }
        if (typeof route.path === 'string' && route.path === req.url) {
            return route.func(req, res);
        }
    }

    res.statusCode = 404;
    res.end('404');
};

module.exports = Router;