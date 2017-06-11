angular.module('App')
.controller('FormController', function($scope, $state, Links) {
  $scope.addUrl = function() {
    Links.addUrl($scope.url)
      .then(function(data) {
        $state.go('home'); //require $state in order to route
      })
  }

})
