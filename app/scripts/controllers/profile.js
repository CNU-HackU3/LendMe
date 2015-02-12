'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('ProfileCtrl', function ($scope) {

    $scope.login = function() {
    	var login = {
    		user:$scope.user,
    		pass:$scope.pass
    	};
    	console.log(login);
    };

	});
