app.controller('signInCtrl', function($scope, $auth, $window,$state,$ionicPopup) {

    $scope.handleLoginBtnClick = function() {
        $auth.submitLogin($scope.loginForm)
            .then(function(resp) {
            
        })
            .catch(function(resp) {

        });
    };
    

    $scope.$on('auth:login-success', function(ev, user) {
//        alert('Welcome '+user.email); 
        var options = {
            animation: 'slide', 
            onTransitionEnd: function() {}
        };
        $state.go("app.home");
//        console.log(user);
    });

    $scope.$on('auth:login-error', function(ev, reason) {
//        alert('auth failed because '+reason.errors[0]);        
        $scope.error = reason.errors[0];        
        $ionicPopup.alert({            
            title: 'Error',
            template: ''+$scope.error+'',
            buttonLabel: 'OK',
            animation: 'default'
        });
    });
    
    $scope.previewPage = function(){
        var options = {
            animation: 'slide',
            onTransitionEnd: function(){}
        }
//        myNavigator.resetToPage("vistas/sign-in.html", options);
        $state.go("app.login");
    }
    
    $scope.signUp = function(){
        $state.go("app.signUp");        
    }    
    
});