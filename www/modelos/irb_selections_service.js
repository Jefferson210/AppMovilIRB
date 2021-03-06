app.factory('$irbSelections', ['$resource','$http','$properties', function($resource,$http,$properties) {
//app.factory('$irbSelections', ['$http','$properties', function($http,$properties) {

    var API_ROOT = 'http://'+$properties.ip+':'+$properties.port+'/api/v1/';
//    var API_ROOT = $properties.ip+':'+$properties.port+'/api/v1/';

    return $resource(API_ROOT, {id : '@id'}, {
        irbSelections : {
//            url : API_ROOT + "irb_selections_api.json",
            url : API_ROOT + "irb_selections_api", 
//            url : API_ROOT + "spek_selections_api", 
//            url : API_ROOT + "conectiflor_selections_api", 
            method : "GET",
            isArray : true,
            timeout : 5000
        },
         actualizar : {
//            url : API_ROOT + "irb_selections_api.json",
            url : API_ROOT + "irb_selections_api/:id", 
//            url : API_ROOT + "spek_selections_api", 
//            url : API_ROOT + "conectiflor_selections_api", 
            method : "PUT",
            params: {
                id: '@id'
            }
        }   
    });
} ])
