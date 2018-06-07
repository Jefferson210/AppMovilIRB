app.controller('variedadesctrl', function ($scope, $stateParams, $http,HomeModel,$ionicLoading,$state,$ionicPopup,$filter,$ionicPlatform,$timeout,$cordovaGoogleAnalytics,$ionicModal) {
    
    variedades=[];
    $scope.variedades = [];
    var empresa; 
    $scope.Like;

    for (var i = 0; i < HomeModel.getCatalogoEmpresa().length; i++) {
        variedades=HomeModel.getCatalogoEmpresa();
        if(variedades[i].id==$stateParams.idempresa){
            $scope.variedades.push(variedades[i]);
        }
    }

    /* switch($stateParams.idempresa) {
      case '2':
      empresa ='irb_selections_api'; 
      break;
      case '3':
      empresa ='spek_selections_api';
      break;
      case '1':
      empresa = 'conectiflor_selections_api'
      break;
    }
    */




    /*HomeModel.getirbselections(empresa).then(function(res){
      console.log(res.data);
    });
    */

    $scope.detVariedad=function(id){
        variedades = $scope.variedades;
        for(i=0;i<variedades.length;i++){

            if(variedades[i].idvariedad==id){
                HomeModel.variedad.id = variedades[i].id;
                HomeModel.variedad.color = variedades[i].color;
                HomeModel.variedad.imagen = variedades[i].imagen;
                HomeModel.variedad.nombre = variedades[i].nombre;
                HomeModel.variedad.numpetalos=variedades[i].numpetalos;
                HomeModel.variedad.produccion = variedades[i].produccion;
                HomeModel.variedad.tamboton =variedades[i].tamboton;
                HomeModel.variedad.lugar = variedades[i].lugar;
                HomeModel.variedad.longitud = variedades[i].longitud;
                HomeModel.variedad.idvariedad = variedades[i].idvariedad;
                break;
            }
        }
        location.href = "#/app/detVariedad/"+id;
    }


    $scope.variedad = HomeModel.variedad;
    $scope.getLikes=function(){

        if(window.localStorage['megusta']==null){
            $scope.Like = 0; 
        }
        else{
            likes = JSON.parse(window.localStorage['megusta']);
            for(var i  in likes){
                if(likes[i].idvariedad==$scope.variedad.idvariedad)
                {   
                    $scope.Like = likes[i].numlikes;
                    $("#Like").css("color", "#224f86");
                    break;
                }
                else
                {
                    $scope.Like = 0;
                    $("#Like").css("color", "#888");
                }
            }
        }
    }


    $scope.getLikes();


    $ionicModal.fromTemplateUrl('vistas/muestras.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modalmuestras = modal;
    });

    $scope.muestras=function(){
        $scope.modalmuestras.show();
    }
    $scope.closeR=function(){
        $scope.modalmuestras.hide();
    }





    var existe ;
    $scope.setLikes=function(){
        var variedadlikes={};

        contador=0;
        var likesbf = [];
        if(window.localStorage['megusta']==null){
            variedadlikes.idvariedad = $scope.variedad.idvariedad;
            variedadlikes.numlikes = 1;
            window.localStorage['megusta']=JSON.stringify([variedadlikes]);
            $scope.getLikes();
            $("#Like").css("color", "#224f86");
            $scope.muestras();

        }
        else{
            likes = JSON.parse(window.localStorage['megusta']);
            for(var i  in likes){
                if(likes[i].idvariedad==$scope.variedad.idvariedad)
                {   
                    //likes[i].numlikes = likes[i].numlikes + 1 ;
                    //$("#Like").css("color", "#224f86");
                    existe = true;
                }
                else{
                    existe = false;
                }

                //if(!existe){

                //  }
            }

            likesbf.push(likes[i]);
            if(!existe){
                variedadlikes.idvariedad = $scope.variedad.idvariedad;
                variedadlikes.numlikes = 1;
                likesbf.push(variedadlikes);
                $("#Like").css("color", "#224f86");
                $scope.muestras();
            }
            window.localStorage['megusta']=JSON.stringify(likesbf);
            $scope.getLikes();

        }
    }




    $scope.RegistrarIntereses=function(){
        $scope.setLikes();
        $scope.closeR();
    }



    /*codigo uso desarrollo app floricola */



    /**/





});

