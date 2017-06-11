angular.module('App')
.factory('Links', function($http) {
  return {
    getUrls: function() {
      return $http({
        method: "GET",
        url:'/api/links'
      })
      .then(function(response) {
        return response.data;
      })
    },
    addUrl: function(urlString) {
      return $http({
        method: "POST",
        url: "/api/links",
        data: {
          url: urlString
        }
      })
    }
  }
})
