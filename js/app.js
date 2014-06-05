//
console.log('Hello');
var app = angular.module("MyApp",['ngResource']);
//
/*
app.factory("User",function($resource){
	return $resource("https://api.kii.com/api/oauth2/token",{});
});
*/
//
//var KiiController = function($scope,User){
var KiiController = function($scope,$http){
	console.log('KiiController');
	
	//
	$scope.username = 'user.1';
	$scope.password = 'saumya123';
	$scope.message = 'user';
	/*
	//Login with KiiSDK and jQuery
	Kii.initializeWithSite("appId", "appSecret", KiiSite.US);
	//jQuery login
	$scope.login = function(){
		// Authenticate the user
		KiiUser.authenticate($scope.username, $scope.password, {
		  // Called on successful registration
		  success: function(theUser) {
		    // Print some info to the log
		    console.log("User authenticated!");
		    //console.log(theUser);
		    $scope.onLoginSuccess(theUser);
		  },
		  // Called on a failed authentication
		  failure: function(theUser, errorString) {
		    // Print some info to the log
		    //console.log(theUser);
		    console.log("Error authenticating: " + errorString);
		  }
		});
	};
	*/
	/*
	$scope.onLoginSuccess = function(kiiUser){
		console.log('onLoginSuccess');
		console.log(kiiUser);
		$scope.message = "User Authenticated!";
	};
	*/

	$scope.loginJQueryREST = function(){
		console.log('loginJQueryREST');
		var dataObj = {
			"username":$scope.username, 
			"password":$scope.password
		};
		var d = JSON.stringify(dataObj);
		console.log(dataObj);
		console.log(d);
		//Doing a jQuery style REST call
		$.ajax({ 
			type: "POST",
			headers: { 
				'content-type': 'application/json',
				"x-kii-appid": "AppId",
				"x-kii-appkey":"AppSecret" },
			data: d,
			dataType: "json",
			url: "https://api.kii.com/api/oauth2/token",
			success: function(data){        
				console.log('SUCCESS');
				console.log(data);
			},
			fail: function(error){
				console.log('ERROR');
				console.log(error);
			}
		});
		
	};
	//Angular implementation
	$scope.loginAngularREST = function(){
		console.log('loginAngularREST : ');
		var u = "https://api.kii.com/api/oauth2/token";
		var dataObj = {
			"username":$scope.username, 
			"password":$scope.password
		};
		//var d = JSON.stringify(dataObj);//not needed as Angular handles it nicely
		var configObj = { 
			"headers":{
				"x-kii-appid":"AppId",
				"x-kii-appkey":"AppSecret"
			} 
		};
		//var c = JSON.stringify(configObj);//not needed as Angular handles it nicely

		var responsePromise = $http.post(u,dataObj,configObj);
        responsePromise.success(function(data, status, headers, config) {
            //console.log('Success');
            console.log(status);
            console.log(data);
            console.log(headers);
            console.log(config);
        });
        responsePromise.error(function(data, status, headers, config) {
            console.log("AJAX failed!");
        });
	};
};
//var Controller_1 = function($scope,User){
var Controller_1 = function($scope){
	//
};
//var Controller_2 = function($scope,User){
var Controller_2 = function($scope){
	/*
	User.get({ id: 1 }, function(data) {
    	$scope.post = data;
 	});*/
};