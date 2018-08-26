app.controller('irbCtrl',function($scope,irbFactory){ 
    console.log("IRB controller");

    $scope.irbSelections = [];
    //    Get All irbSelections
    $scope.getAll = function(){
        $scope.irbSelections = irbFactory.query();  
    };

    //    get IRB by ID
    $scope.idIRB;
    $scope.getById = function(id){
        $scope.irbSelection = irbFactory.get({id: id});     
    }


    //    Update IRB Likes
    $scope.updateIRB = function(id, likesNum){  
        $scope.irbUpdate = {
            irb_selection: {
                likes:   likesNum + 1
            }
        }
        irbFactory.update({id: id}, $scope.irbUpdate)
            .$promise
            .then(
            function(irbUpdated){
                $scope.getAll();
            },function(err){
                console.log(err);
            })
    }

    $scope.getAll();

});
