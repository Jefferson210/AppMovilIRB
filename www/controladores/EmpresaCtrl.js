
app.controller('EmpresaCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate,HomeModel, $http,$state,$ionicLoading,$timeout,$cordovaGoogleAnalytics,$ionicModal) {
	
	$scope.empresa= HomeModel.empresa;

	$ionicModal.fromTemplateUrl('vistas/informacionEmpresa.html', {
		scope: $scope
	}).then(function(modal) {
		$scope.infoempresa = modal;
	});

	$scope.DatosEmpresa=function(opcion){

		if(opcion==1){

			$scope.opcion = 1; 
		}
		else{

			$scope.opcion = 2; 
		}

		$scope.closeLogin();
		$scope.infoempresa.show();
	}






	$scope.cerrarModal=function(){

		$scope.infoempresa.hide();
	}


	$scope.Catologo=function(id){

			location.href = "#/app/variedades/"+id;


	}


	$scope.contactos=function(){

 

 location.href = "#/app/acerca";


}



});