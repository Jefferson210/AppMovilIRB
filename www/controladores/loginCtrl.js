app.controller('loginCtrl', function ($scope, $stateParams, $http, $ionicLoading, $cordovaGoogleAnalytics, $ionicSideMenuDelegate,$ionicModal,$state,$ionicHistory,$ionicPopup) {

//    var users =[];
//    var usuarios=[];
//    $scope.userRegistro={};
//    $scope.userLogin={};
//
//
//    $scope.$on('$ionicView.afterEnter', function(event) {
//        $ionicSideMenuDelegate.canDragContent(false);
//    });
//
//
//
//    if(window.localStorage['usuarios']){
//        usuarios = JSON.parse(window.localStorage['usuarios']);
//    }
//
//
//
//    $scope.LoginUser=function(){
//
//        if($scope.doLogin(usuarios,$scope.userLogin.correo,$scope.userLogin.clave)){
//            usuarios = JSON.parse(window.localStorage['usuarios']);
//            for(var i in usuarios){
//                if(usuarios[i].correo== $scope.userLogin.correo){
//
//                    $scope.msnBienvenida(usuarios[i].nombre+ " "+usuarios[i].apellido);
//                    break;
//
//                }
//
//            }
//
//            window.localStorage['login']=1;
//            $state.go("app.home");
//            $ionicHistory.nextViewOptions({
//                disableAnimate: false,
//                disableBack: true
//            });
//
//        }
//
//        else{
//
//            $scope.mesaje("Verifique su usuario y contraseña.");
//
//        }
//
//    }
//
//
//
//
//    $scope.verificaUsuario=function(array,element){
//        var existe ; 
//        for(var i in array){
//            if(array[i][1].correo==element){
//                existe = true;
//                break;
//            }
//            else{
//                existe = false;
//            }
//        }
//        return existe;
//    }
//
//
//    $scope.doLogin=function(array,c,p){
//        var existe ; 
//        for(var i in array){
//            if(array[i].correo==c&&array[i].clave==p){
//                existe = true;
//                break;
//            }
//            else{
//                existe = false;
//            }
//        }
//        return existe;
//    }
//
//
//
//    $scope.mesaje=function(msn){
//        var alertPopup = $ionicPopup.alert({
//            title: 'Atención',
//            template: '<p style="text-align: center;">'+msn+'</p>'
//        });
//        alertPopup.then(function(res) {
//        });
//    }
//
//
//
//
//
//
//    $scope.msnBienvenida=function(nombre){
//        var alertPopup = $ionicPopup.alert({
//            title: '<img src="img/connectiflor.png" alt=""><br><br>'+'<h4>Bienvenido</h4>',
//            template: '<p style="text-align: center;">'+nombre+'</p>'
//        });
//        alertPopup.then(function(res) {
//        });
//    }
//
//
//    $scope.RegistrarUsuario=function(){
//        if($scope.userRegistro.clave==$scope.userRegistro.confirmaclave){
//            if(window.localStorage['usuarios']==null){
//                window.localStorage['usuarios']=JSON.stringify([$scope.userRegistro]);
//                // $scope.mesaje("Usuario registrado con exitó.");
//                usuarios = JSON.parse(window.localStorage['usuarios']);
//
//                if($scope.doLogin(usuarios,$scope.userRegistro.correo,$scope.userRegistro.clave)){
//                    usuarios = JSON.parse(window.localStorage['usuarios']);
//                    for(var i in usuarios){
//                        if(usuarios[i].correo==$scope.userRegistro.correo){
//
//                            $scope.msnBienvenida(usuarios[i].nombre+ " "+usuarios[i].apellido);
//                            break;
//
//                        }
//
//                    }
//
//                    window.localStorage['login']=1;
//                    $state.go("app.home");
//                    $scope.closeR();
//                    $ionicHistory.nextViewOptions({
//                        disableAnimate: false,
//                        disableBack: true
//                    });
//
//                }
//            }
//            else{
//                for(var i in usuarios){
//                    users.push([i,usuarios[i]]);
//                }
//
//                if(!$scope.verificaUsuario(users,$scope.userRegistro.correo)){
//                    usuarios.push($scope.userRegistro);
//                    window.localStorage['usuarios']=JSON.stringify(usuarios);
//                    //$scope.mesaje("Usuario registrado con exitó.");
//                    usuarios = JSON.parse(window.localStorage['usuarios']);
//                    if($scope.doLogin(usuarios,$scope.userRegistro.correo,$scope.userRegistro.clave)){
//                        usuarios = JSON.parse(window.localStorage['usuarios']);
//                        for(var i in usuarios){
//                            if(usuarios[i].correo==$scope.userRegistro.correo){
//
//                                $scope.msnBienvenida(usuarios[i].nombre+ " "+usuarios[i].apellido);
//                                break;
//
//                            }
//
//                        }
//
//                        window.localStorage['login']=1;
//                        $state.go("app.home");
//                        $scope.closeR();
//                        $ionicHistory.nextViewOptions({
//                            disableAnimate: false,
//                            disableBack: true
//                        });
//
//                    }
//                }
//                else{
//                    $scope.mesaje("Verifique si cuenta con un usuario registrado.");
//                }
//
//            }
//        }
//        else{
//            $scope.mesaje("Las contraseñas no coinciden.");
//        }
//    }
//
//
//
//
//
//
//
//    $ionicModal.fromTemplateUrl('vistas/inicio/registro.html', {
//        scope: $scope
//    }).then(function(modal) {
//        $scope.modalRegistro = modal;
//    });
//
//
//
//    $scope.registroUsuario=function(){
//        $scope.modalRegistro.show();
//    }
//
//    $scope.closeR=function(){
//        $scope.modalRegistro.hide();
//    }


});