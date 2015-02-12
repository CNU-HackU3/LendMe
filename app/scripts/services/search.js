'use strict';

/**
 * @ngdoc service
 * @name lendMeApp.Search
 * @description
 * # Search
 * Factory in the lendMeApp.
 */
angular.module('lendMeApp')
  .factory('Search', ['$http', '$location', function ($http, $location) {
    // Service logic
    // ...
var results;
    

    // Public API here
    return {
      listingsMethod: function(query) {
        console.log(query);
        $http.get("//lendme-dmnhackathon.rhcloud.com/get/item/keyword/" + query)
        .success(function(data){
          console.log(data);
          results = data;
          $location.url("results");
        })
        .error(function(data){
          console.log(data);
          results = data;
          $location.url("results");
        })
      },
      getResults: function(){
        return results;
      }
    };
  }]);
