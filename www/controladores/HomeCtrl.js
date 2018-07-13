app.controller('HomeCtrl', function ($scope, $stateParams, $ionicSlideBoxDelegate,HomeModel, $http,$state,$ionicLoading,$timeout,$cordovaInAppBrowser,$ionicModal,$cordovaFacebook,$ionicPopup,$ionicSideMenuDelegate, $cordovaDatePicker,$ionicSideMenuDelegate,$ionicNavBarDelegate,$ionicHistory,$cordovaGoogleAnalytics,$ionicLoading,$cordovaGoogleAnalytics) {
 $scope.$on('$ionicView.afterEnter', function(event) {
    $ionicSideMenuDelegate.canDragContent(true);
  });

$scope.categorias;




/*HomeModel.getirbselections('irb_selections_api').then(function(res){
    //users is an array of user objects
    console.log(res.data);
  });
*/


/*codigo usado para el desarollo de la app de floricola*/


$scope.LoadCatgs=function(){



 //console.log(HomeModel.getEmpresas());

 $scope.categorias=HomeModel.getEmpresas();

}


$ionicModal.fromTemplateUrl('vistas/inicio/recuperar.html', {
  scope: $scope
}).then(function(modal) {
  $scope.modalRecuperar = modal;
});

$scope.DatosEmpresa=function(){
  $scope.closeLogin();
  $scope.modalRecuperar.show();
}


$scope.detalleEvnt=function(id){
  empresas= HomeModel.getEmpresas();
  for(i=0;i<empresas.length;i++){

    if(empresas[i].id==id){
      HomeModel.empresa.id = empresas[i].id;
      HomeModel.empresa.imagen = empresas[i].imagen;
      HomeModel.empresa.mision = empresas[i].mision;
      HomeModel.empresa.vision = empresas[i].vision;
      HomeModel.empresa.nombre = empresas[i].nombre;
     break;
   }
 }
 location.href = "#/app/detEmpresa/" + id;
}



$scope.LoadCatgs();

/*fin*/





});


