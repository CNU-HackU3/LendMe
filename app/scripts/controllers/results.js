'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('ResultsCtrl', ['$scope', '$http', "Search", "$routeParams", function ($scope, $http, Search, $routeParams) {
	Search.listingsMethod($routeParams.id)
	.success(function(data){
		$scope.results=data;
	})
	.error(function(data){
		$scope.results=data;
	})

    $scope.results=foo.results;
    console.log($routeParams.id);
  }]);
