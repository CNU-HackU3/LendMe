'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('ResultsCtrl', ['$scope', '$http', "Search", function ($scope, $http, Search) {
    var foo = Search.getResults();
    $scope.results=foo.results;
  }]);
