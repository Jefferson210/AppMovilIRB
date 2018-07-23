app.factory('$irbSelections', ['$resource','$http','$properties', function($resource,$http,$properties) {
//app.factory('$irbSelections', ['$http','$properties', function($http,$properties) {

//    var API_ROOT = 'http://'+$properties.ip+':'+$properties.port+'/api/v1/';
    var API_ROOT = $properties.ip+':'+$properties.port+'/api/v1/';

    return $resource(API_ROOT, {}, {
        irbSelections : {
//            url : API_ROOT + "irb_selections_api.json",
            url : API_ROOT + "irb_selections_api",
            method : "GET",
            isArray : true,
            timeout : 5000
        }
    });
} ])
