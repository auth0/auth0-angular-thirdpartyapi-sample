angular.module( 'sample.login', [

])
.controller( 'LoginCtrl', function HomeController( $scope, auth, $location, $http ) {

  $scope.login = function() {
        auth.signin({
          popup: true,
        }).then(function(profile) {
          // Using a firebase token for this example
          // Replace here with your client token
          return auth.getToken('IckaP4QRfGSRGuVZfP9VJBUdlXtgcS4o')
        }).then(function(firebaseToken) {
          // Setting the Firebase token for all requests as default one
          $http.defaults.headers.common.Authorization =  'Bearer '+ auth.idToken;
          $location.path('/');
        }, function(err) {
          console.log("There was an error signin in", err);
        });
    }

});
