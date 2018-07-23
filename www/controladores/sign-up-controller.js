app.controller('signUpCtrl', function($scope, $auth,$state,$ionicPopup) {
    $scope.handleRegBtnClick = function() {
        $auth.submitRegistration($scope.registrationForm)
            .then(function(resp) {
            // handle success response

        })
            .catch(function(resp) {
            // handle error response

        });
    };

    $scope.$on('auth:registration-email-success', function(ev, message) {
        //alert("Welcome " + message.email);
        var options = {
            animation: 'slide', 
            onTransitionEnd: function() {}
        };
        $state.go("app.home",options);
     });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        console.log(reason.errors)
        for(var i=0;i < reason.errors.full_messages.length;i++){
//            console.log(i) 
            $ionicPopup.alert({            
            title: 'Error',
            template: ''+reason.errors.full_messages[i]+'',
            buttonLabel: 'OK',
            animation: 'default'
        });
        }        
    });

    $scope.closeR=function(){
        $state.go("app.login");        
    }

});