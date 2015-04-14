var _restify = require('restify');
var _scrape = require('./scrape').scrape;

var server = _restify.createServer({
    name: 'scraper',
    version: '0.1.0'
});

server.get('/wikipedia/:name', function (req, res, next) {

    var _getTitle = require('./modules/wikipedia').getTitle;
    var _url = require('./modules/wikipedia').url + '/' + req.params.name;
    _scrape(_getTitle, _url, req, res);

    return next();

});

server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url);
});