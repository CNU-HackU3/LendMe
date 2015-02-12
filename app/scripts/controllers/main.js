'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('MainCtrl', ['$scope','Search', function ($scope, Search) {
    
    $scope.submitSearch = function() {
    	Search.listingsMethod($scope.search)
    }

  }]);


