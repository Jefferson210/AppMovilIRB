app.controller('irbCtrller', function($scope, $irbSelections) {
    $scope.irbSelections = []
    
    $irbSelections.irbSelections(function(irbSelections){
//        var irbSelectionsData = JSON.stringify(irbSelections);
        $scope.irbSelections = irbSelections;
//        console.log($scope.irbSelections);
    })
    

});