// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var seccion2Tag = [];
var filtro;

//Jeff-start
//var app =angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])
var app =angular.module('starter', ['ionic', 'starter.controllers','ngCordova','ng-token-auth','ngResource'])
//Jeff-end

//Jeff-start
.config(function($authProvider) {
    $authProvider.configure({
        //        apiUrl: 'http://localhost:3000/api/v1'        
        apiUrl: 'https://irb-v3-jefferson210.c9users.io:8080/api/v1'        
    })
})
//Jeff-end

app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleLightContent();
        }

    });
})

app.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider,$cordovaFacebookProvider) {

    $stateProvider
        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })
    //Jeff-start  
    //        .state('app.login', {
    //        url: '/login',
    //        views: {
    //            'menuContent': {
    //                templateUrl: 'vistas/inicio/login.html',
    //                controller: 'loginCtrl'
    //            }
    //        }
    //    })

        .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'vistas/sign-in.html',
                controller: 'signInCtrl'
            }
        }
    })

        .state('app.signUp', {
        url: '/signUp',
        views: {
            'menuContent': {
                templateUrl: 'vistas/sign-up.html',
                controller: 'signUpCtrl'
            }
        }
    })

        .state('app.irbSelections', {
        url: '/irbSelections',
        views: {
            'menuContent': {
                templateUrl: 'vistas/irb-selections.html',
                controller: 'irbCtrller'
            }
        }
    })
    //Jeff-end

        .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'vistas/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

        .state('app.detVariedad', {
        url: '/detVariedad/:id',
        views: {
            'menuContent': {
                templateUrl: 'vistas/detalleVariedad.html',
                controller: 'variedadesctrl'
            }
        }
    })

        .state('app.detEmpresa', {
        url: '/detEmpresa/:id',
        views: {
            'menuContent': {
                templateUrl: 'vistas/detaEmpresa.html',
                controller: 'EmpresaCtrl'
            }
        }
    })

        .state('app.busqueda', {
        url: '/busqueda',
        views: {
            'menuContent': {
                templateUrl: 'vistas/Busqueda.html',
                controller: 'BusquedaCtrl'
            }
        }
    })


        .state('app.variedades', {
        url: '/variedades/:idempresa',
        views: {
            'menuContent': {
                templateUrl: 'vistas/VariedadesXEmpresa.html',
                controller: 'variedadesctrl'
            }
        }
    })

        .state('app.acerca', {
        url: '/acerca',
        views: {
            'menuContent': {
                templateUrl: 'vistas/about.html',
                controller: 'AboutCtrl'
            }
        }
    })

    if(window.localStorage['login']==1){
        $urlRouterProvider.otherwise('/app/home');
    }
    else{
        $urlRouterProvider.otherwise('/app/login');
    }

});


