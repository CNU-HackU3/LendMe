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
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
<<<<<<< HEAD
      .when('/results', {
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl'
=======
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl'
>>>>>>> b8fc8f4f0f761b984c99a15da0ac0ca1fafd6323
      })
      .otherwise({
        redirectTo: '/'
      });
  });
