perfil.controller("editarCtrl",['$scope','$stateParams','$irbSelections','$state',function($scope, $stateParams, $irbSelections, $state){
    console.log("Controlador de editar Rosa");
    console.log($stateParams.idPerfil);
    
    /*$scope.usuarioActualizado = {
        nombre:'',
        cedula:'',
        imagen:'',
        estado:true
    }
    
    $scope.actualizarPerfil = function(){        
        perfilesFactory.actualizar({id: $stateParams.idPerfil}, $scope.usuarioActualizado)
            .$promise
            .then(
            function(perfilActualizado){
            console.log(perfilActualizado);
            $state.go('visualizar');
        },function(err){
            console.log(err);
        })
    }
    
    
    perfilesFactory.get({id: $stateParams.idPerfil})
        .$promise
        .then(
        function(respuesta){
            console.log(respuesta);
            $scope.usuarioActualizado = respuesta;
            
        },function(err){
            console.log(err);
        })*/
    
}]);