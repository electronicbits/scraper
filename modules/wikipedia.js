
var _url = "http://en.wikipedia.org/wiki";

var _getTitle = function(
    request,
    response,
    status,
    pPage,
    jQueryUrl,
    pPh,
    processData) {

    if (status === "success") {

        // We use jQuery to parse the document
        pPage.includeJs(
            jQueryUrl,
            function () {
                pPage.evaluate(
                    function(){

                        var data = {};

                        var country = $('#firstHeading');

                        data= {
                            country : country.text()
                        };

                        return data;
                    },
                    function(doc){
                        pPh.exit();
                        processData(doc, response);
                    }
                );
            }
        );
    }
};

exports.getTitle = _getTitle;
exports.url = _url;
