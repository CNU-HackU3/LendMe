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
var masterQuery;
    

    // Public API here
    return {
      listingsMethod: function(query) {

        // if(!query) {
        //   var url = $location.url();
        //   var urlQuery = url[url.length - 1];

        //   if(urlQuery != 'results') {
        //     query = urlQuery;
        //   }

        // }

        $location.url("results/" + query);

        return $http.get("//lendme-dmnhackathon.rhcloud.com/get/item/keyword/" + query)
      },
      getResults: function(){
        return results;
      }
    };
  }]);
