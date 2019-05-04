var CallNumber = function(){};

CallNumber.prototype.callNumber = function(success, failure, number, bypassAppChooser){
    cordova.exec(success, failure, "CallNumber", "callNumber", [number, bypassAppChooser]);
};

CallNumber.prototype.isCallSupported = function(success, failure){
    cordova.exec(success, failure, "CallNumber", "isCallSupported");
}

//Plug in to Cordova
cordova.addConstructor(function() {

    if (!window.Cordova) {
        window.Cordova = cordova;
    };

    if(!window.plugins) window.plugins = {};
    window.plugins.CallNumber = new CallNumber();
});

function CallNum(){
	window.plugins.CallNumber.callNumber(onSuccess, onError, '58206247', true);
}








function onSuccess(result){
  console.log("Success:"+result);
}

function onError(result) {
  console.log("Error:"+result);
}