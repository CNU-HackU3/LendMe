'use strict';

/**
 * @ngdoc function
 * @name lendMeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lendMeApp
 */
angular.module('lendMeApp')
  .controller('MainCtrl', ['$scope','Search', '$location', function ($scope, Search, $location) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.submitSearch = function() {
    	Search.listingsMethod($scope.search)
    }

  }]);
