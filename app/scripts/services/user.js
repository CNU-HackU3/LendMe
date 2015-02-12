'use strict';

/**
 * @ngdoc service
 * @name lendMeApp.user
 * @description
 * # user
 * Service in the lendMeApp.
 */
angular.module('lendMeApp')
  .service('user', ['$http', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
  	return {
  		login:function(obj) {
  			$http.post('/foo', obj)
  			.success(function() {
  				console.log("it worked!");
  			})
  			.error(function() {
				console.log("Something went wrong.");
  			});
  		}
  	}
  }]);
