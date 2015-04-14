var phantom = require("phantom");

var _jQueryUrl =
    "http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js";

var _phantomCreateFn = function(ph, request, response, pageOpenFn, url){
    ph.createPage(function(page) {
        _createPageFn(request, response, page, pageOpenFn, url, ph);
    });
};

var _createPageFn = function (request, response, page, pageOpenFn, url, ph){
    page.open(url, function(status){
        pageOpenFn(request, response, status, page, _jQueryUrl, ph, _processData);
    });
};

var _processData = function(data, response){
    response.send(data);
};

var _scrape = function(scrapeFn, url, req, res){
    phantom.create(
        function (ph) {
            _phantomCreateFn(ph, req, res, scrapeFn, url);
        }
    );
};

exports.phantomCreateFn = _phantomCreateFn;
exports.scrape = _scrape;