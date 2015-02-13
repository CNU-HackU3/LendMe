'use strict';

/**
 * @ngdoc overview
 * @name lendMeApp
 * @description
 * # lendMeApp
 *
 * Main module of the application.
 */
angular
  .module('lendMeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/results/:query', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
