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
        //        alert("A registration email was sent to " + message.email);
        var options = {
            animation: 'slide', 
            onTransitionEnd: function() {}
        };

        $state.go("app.home",options);

        //        ons.notification.alert({
        //            message: 'Un correo de confirmación fue enviado a la cuenta '+ message.email,
        //            title: 'Confirmación',
        //            buttonLabel: 'OK',
        //            animation: 'default', 
        //            callback: function() {
        //                // Alert button is closed!
        //            }
        //        });
        //        document.getElementById("signupForm").reset();
        //        myNavigator.pushPage("sign-in.html", options);
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        console.log(reason.errors)
        for(var i=0;i < reason.errors.full_messages.length;i++){
//            console.log(i)
            //            ons.notification.alert({
            //                message: ''+reason.errors.full_messages[i]+'',
            //                title: 'Error',
            //                buttonLabel: 'OK',
            //                animation: 'default', 
            //                callback: function() {
            //                    // Alert button is closed!
            //                }
            //            })   
            $ionicPopup.alert({            
            title: 'Error',
            template: ''+reason.errors.full_messages[i]+'',
            buttonLabel: 'OK',
            animation: 'default'
        });
        }        
    });

    $scope.$on('auth:email-confirmation-success', function(ev, user) {
        alert("Welcome, "+user.email+". Your account has been verified.");
    });

    $scope.closeR=function(){
        $state.go("app.login");        
    }

});