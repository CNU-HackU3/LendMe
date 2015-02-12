'use strict';

/**
 * @ngdoc service
 * @name lendMeApp.Search
 * @description
 * # Search
 * Factory in the lendMeApp.
 */
angular.module('lendMeApp')
  .factory('Search', ['$http', function ($http) {
    // Service logic
    // ...

    

    // Public API here
    return {
      listingsMethod: function(query) {
        console.log(query);
        $http.get("//lendme-dmnhackathon.rhcloud.com/echo/" + query)
        .success(function(data){
          console.log(data);
          
        })
        .error(function(data){
          console.log("Juan fails");
        })
      }
    };
  }]);
