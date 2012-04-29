var feedsModule = angular.module('feeds', []);

/**
 * Calls to the yql service to validate an xml or atom feed
 */
feedsModule.factory('yqlFeed', function($http) {
    var urlStart = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'";
    var urlEnd   = "'&format=json&diagnostics=true&callback=JSON_CALLBACK";

    //{status : '', message: '', style : '', images : 'true'}
    function validateResponse(data) {
        return {status : 'ok', message : 'OK', images : true}
    }

    return function(url, callback) {
        $http({method : 'JSONP', url : urlStart + url + urlEnd})
            .success(function(data, status, headers, config) {
                if (status == '200') {
                    return validateResponse(data);  
                } 
                return callback({status : 'invalid', message : 'Unable to call validation service: ' + status, style : 'info'});
            })
            .error(function(data, status, headers, config) {
                return callback({status : 'error', message : 'Unable to call validation service', style : 'info'});
            });
    }
});
