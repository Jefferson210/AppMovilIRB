app.factory('irbSelections', ['$resource','$http','$properties', function($resource,$http,$properties) {

    var API_ROOT = 'http://'+$properties.ip+':'+$properties.port+'/api/v1';

    return $resource(API_ROOT, {}, {
        irbSelections : {
            url : API_ROOT + "irb_selections_api.json",
            method : "GET",
            isArray : true,
            timeout : 5000
        }
    });
} ])
