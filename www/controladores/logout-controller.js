app.controller('logoutCtrl', function($scope, $auth,$state,$ionicPopup) {
    $scope.handleSignOutBtnClick = function() {
        $auth.signOut()
            .then(function(resp) {
            // handle success response
        })
            .catch(function(resp) {
            // handle error response
        });
    };

    $scope.$on('auth:logout-success', function(ev) {
        //alert('goodbye');
        $ionicPopup.alert({            
            title: 'GoodBye',
            //template: 'GoodBye',
            //buttonLabel: 'OK',
            animation: 'default'
        });
        $state.go("app.login");       
    });

    $scope.$on('auth:logout-error', function(ev, reason) {
        //alert('logout failed because ' + reason.errors[0]);
        $ionicPopup.alert({            
            title: 'Error',
            template: 'logout failed because ' + reason.errors[0],
            buttonLabel: 'OK',
            animation: 'default'
        });
    });
});
