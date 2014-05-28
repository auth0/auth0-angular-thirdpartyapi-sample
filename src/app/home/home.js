angular.module( 'sample.home', [
  
])
.controller( 'HomeCtrl', function HomeController( $scope, auth ) {

  $scope.auth = auth;

  $scope.callApi = function() {
    // Just call the API as you'd do using $http
  }

});
