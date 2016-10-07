angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $translate, I4MIMidataService) {
  // Use for testing the development environment
  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  // Connect with MIDATA
  $scope.loggedIn = I4MIMidataService.loggedIn();

  //Change the language
  $scope.switchLanguage = function(key) {
    $translate.use(key);
  };

})

.controller('HomeCtrl', function($scope, $stateParams, $location) {
  $scope.goKSym_Erf = function() {
    $location.path('kernsymptome');
  };

  $scope.goAu_Frageb = function() {
    $location.path('auswahl_fragebogen');
  };

  $scope.goAu_Uebungen = function() {
    $location.path('auswahl_uebungen');
  };

})

.controller('A_UebCtrl', function($scope, $stateParams, $location) {
  $scope.goHome = function() {
    $location.path('home');
  };
  $scope.goRoute = function() {
    $location.path('route');
  };

  $scope.goZS = function() {
    $location.path('zahlsymbol');
  };

  $scope.goMotorik = function() {
    $location.path('motorik');
  };

})

.controller('A_FragCtrl', function($scope, $stateParams) {


})

.controller('KernsympCtrl', function($scope, $stateParams) {


});
