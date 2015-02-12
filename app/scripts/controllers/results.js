'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('ResultsCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get("mocks/searchresults.js")
    .success(function(results){
    	$scope.results=results.results;
    	console.log(results);
    })
    .error(function(data){
    	$scope.results="Juan failed";
    })
  }]);
