 function onPushwooshInitialized(pushNotification) {
    console.log(JSON.stringify(pushNotification));
    pushNotification.getPushToken(
        function(token) {
            console.log('push token: ' + token);
        }
        );

    //and HWID if you want to communicate with Pushwoosh API
    pushNotification.getPushwooshHWID(
        function(token) {
            console.log('Pushwoosh HWID: ' + token);
        }
        );

    //settings tags    
    pushNotification.setTags({deviceName:"scala", deviceId:2017},
        function() {
            console.log('setTags success');
        },
        function(error) {
            console.log('setTags failed');
        }
        );

    pushNotification.setTags({"equipo":window.localStorage["seccionExtra"]});

   /* pushNotification.getTags(
        function(status) {
            console.info('getTags success: ' + JSON.stringify(status));
        },
        function(status) {
            console.warn('getTags failed');
        }
        );*/
    }

    var array=[];

    function registroTags(){
       var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
       pushNotification.getPushToken(
        function(token) {
         console.log('push token: ' + token);
     }
     );
       pushNotification.getPushwooshHWID(
        function(token) {
            console.log('Pushwoosh HWID: ' + token);
        }
        );
    //settings tags    
    pushNotification.setTags({deviceName:"scala", deviceId:2017},
        function() {
            console.log('setTags success');
        },
        function(error) {
            console.log('setTags failed');
        }
        );


    array=JSON.parse(window.localStorage["seccionExtra"]);
    
    pushNotification.setTags({"equipo":array});

    pushNotification.getTags(
        function(status) {
            console.log('getTags success: ' + JSON.stringify(status));
        },
        function(status) {
            console.warn('getTags failed');
        }
        );
}



function initPushwoosh() {
    var pushNotification = cordova.require("pushwoosh-cordova-plugin.PushNotification");
    document.addEventListener('push-notification',
        function(event) {
            var message = event.notification.message;

            if (typeof(event.notification.userdata) != "undefined") {
             var userData = event.notification.userdata;
             
         }else{
             var userData = event.notification.ios.u;
             var seccion = userData.split(":");                 
             userData = {"seccion":seccion[1].substr(1, (seccion[1].length-3))};
         }

         if (typeof(userData) != "undefined") {                            
             location.href = userData.seccion;
         }  
     }
     );

    

    //initialize Pushwoosh with projectid: "GOOGLE_PROJECT_ID", appid : "PUSHWOOSH_APP_ID". This will trigger all pending push notifications on start.
    pushNotification.onDeviceReady({
        projectid: "217038224120",
        appid: "16C18-94AB1",
        serviceName: ""
    });

    //register for push notifications
    pushNotification.registerDevice(
        function(status) {
            window.localStorage["userToken"] = status.pushToken;
            onPushwooshInitialized(pushNotification);
        },
        function(status) {
            console.log("failed to register: " + status);
            console.warn(JSON.stringify(['failed to register ', status]));
        }
        );
}

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
       // initPushwoosh();
       app.receivedEvent('deviceready');
   },
   receivedEvent: function(id) {
    console.log('Received Event: ' + id);
}
};

app.initialize();
