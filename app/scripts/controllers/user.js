'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('UserCtrl', ['$scope', 'user', function ($scope, user) {
    $scope.login = function() {
    	var login = {
    		user: $scope.user,
    		pass: $scope.pass
    	};
    	console.log("login: " + login);
    	user.login(login);
    };

    $scope.reg = function() {
    	var reg = {
    		fname: $scope.fname,
    		lname: $scope.lname,
    		user: $scope.user,
    		pass: $scope.pass
    	};
    	console.log("reg: " + reg);
    	user.login(reg);
    };

  }]);