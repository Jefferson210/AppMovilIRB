
app.controller('BusquedaCtrl', function ($scope, $stateParams,$ionicLoading,$state,$http,$cordovaInAppBrowser,$ionicPopup,$ionicScrollDelegate,$timeout,$cordovaGoogleAnalytics,HomeModel
	) {



	$scope.data = {};
	var variedades=[];
	var idvariedad;




$scope.mesaje=function(msn){
 var alertPopup = $ionicPopup.alert({
   title: 'Atención',
   template: '<p style="text-align: center;">'+msn+'</p>'
 });
 alertPopup.then(function(res) {
 });
}

	$scope.busquedaVariedad=function(param,tipo){

		var contador = 0;

		variedades= HomeModel.getCatalogoEmpresa();


		switch(tipo){
			case "Nombre":
			for(i=0;i<variedades.length;i++){
				contador++;
				if(variedades[i].nombre.toLowerCase() ==  param.toLowerCase() ){

					HomeModel.variedad.id = variedades[i].id;
					HomeModel.variedad.idvar = variedades[i].idvar;
					HomeModel.variedad.color = variedades[i].color;
					HomeModel.variedad.imagen = variedades[i].imagen;
					HomeModel.variedad.nombre = variedades[i].nombre;
					HomeModel.variedad.numpetalos=variedades[i].numpetalos;
					HomeModel.variedad.produccion = variedades[i].produccion;
					HomeModel.variedad.tamboton =variedades[i].tamboton;
					HomeModel.variedad.lugar = variedades[i].lugar;
					HomeModel.variedad.longitud = variedades[i].longitud;

					idvariedad = variedades[i].barcode;
					location.href = "#/app/detVariedad/"+idvariedad;
					break;
				}
				else{
						if(contador==variedades.length){
							$scope.mesaje("No existe la variedad buscada");
							$scope.data = {};
						}
				}
			}
			break;
			case "Código":
			for(i=0;i<variedades.length;i++){
				contador++;
				if(variedades[i].barcode.toLowerCase() ==  param.toLowerCase() ){
					HomeModel.variedad.id = variedades[i].id;
					HomeModel.variedad.idvar = variedades[i].idvar;
					HomeModel.variedad.color = variedades[i].color;
					HomeModel.variedad.imagen = variedades[i].imagen;
					HomeModel.variedad.nombre = variedades[i].nombre;
					HomeModel.variedad.numpetalos=variedades[i].numpetalos;
					HomeModel.variedad.produccion = variedades[i].produccion;
					HomeModel.variedad.tamboton =variedades[i].tamboton;
					HomeModel.variedad.lugar = variedades[i].lugar;
					HomeModel.variedad.longitud = variedades[i].longitud;
					idvariedad = variedades[i].barcode;
					location.href = "#/app/detVariedad/"+idvariedad;
					break;
				}
				else{
						if(contador==variedades.length){
							$scope.mesaje("No existe la variedad buscada");
							$scope.data = {};
						}
				}

			}
			break;
			case "Empresa":
			for(i=0;i<variedades.length;i++){
				contador++;
				if(variedades[i].empresa.toLowerCase() ==  param.toLowerCase() ){
						location.href = "#/app/variedades/"+variedades[i].id;
					break;
				}
				else{
						if(contador==variedades.length){
							$scope.mesaje("No existe la variedad buscada");
							$scope.data = {};
						}
				}
			}
			break;
			
		}

		
		
	}



	$scope.getVariedad = function(param){
		$ionicPopup.show({
			title: 'Ingrese' +" "+ param +" :" ,
                template: '<input type="text" ng-model="data.valor"/>', // the preset value show 0, which is expected.
                scope: $scope,
                buttons: [{ text: 'Cancelar' },{
                	text: '<b>Buscar</b>',
                	type: 'button-positive',
                	onTap: function(e) {
                        console.log($scope.data.valor); // 0

                        $scope.busquedaVariedad($scope.data.valor,param);



                    }
                }]
            });
	}





	/*codigo usado para el desarrollo de floricola */


	$scope.barcode = function(){

	cordova.plugins.barcodeScanner.scan(
			function (result) {

				 $scope.busquedaVariedad(result.text,"Código");
				
			},
			function (error) {
				alert("Scanning failed: " + error);
			}
			,
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: true // iOS and Android
      }
			);

			/*  cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );*/
	}



	/*fin*/


});

