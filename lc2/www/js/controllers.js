angular.module('starter.controllers', [])

.controller('NavCtrl', function($scope, $location, $state, I4MIMidataService) {
    console.info($location.path());
    console.info($state.current.name);
    $scope.showHomeButton = true;
    $scope.showLogoutButton = true;
/*  if ($location.path() == '/motorik' || '/route' || '/zahlsymbol') {
    $scope.showHomeButton = false;
    $scope.showLogoutButton = false;
  } else if ($location.path() == '/login') {
    $scope.showHomeButton = false;
    $scope.showLogoutButton = false;
  } else if ($location.path() == '/home') {
    $scope.showHomeButton = false;
    $scope.showLogoutButton = true;
  } else {
    $scope.showHomeButton = true;
    $scope.showLogoutButton = true;
  }*/

  $scope.goHome = function() {
    $location.path('home');
  };
  $scope.doLogout = function() {
    $location.path('login');
  };
  $scope.doLogout = function() {
    //Logout function
    I4MIMidataService.logout();
    $location.path('login');
  }
})

.controller('LoginCtrl', function($scope, $translate, I4MIMidataService, jsonService, $timeout, $http, $state) {
  // Use for testing the development environment
  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  // Connect with MIDATA
  $scope.loggedIn = I4MIMidataService.loggedIn();


  // Call every Second
  var timer = $timeout(function refresh() {
    if (I4MIMidataService.loggedIn()) {
      $state.go('home');
    } else {
      timer = $timeout(refresh, 1000);
    }
  }, 1000);

  //Change the language
  $scope.switchLanguage = function(key) {
    $translate.use(key);
    jsonService.loadJson(key);
  };

  $scope.showModalLogin = function() {
    I4MIMidataService.login();
  }
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

  $scope.doLogout = function() {
    $location.path('login');
  };

  $scope.goImpressum = function() {
    $location.path('impressum');
  };
})

.controller('ImpCtrl', function($scope, $stateParams) {

})

.controller('A_UebCtrl', function($scope, $stateParams, $location) {
  $scope.goHome = function() {
    $location.path('home');
  };

  $scope.goRouteAnl = function() {
    $location.path('route_anl');
  };

  $scope.goZS = function() {
    $location.path('zahlsymbol1');
  };

  $scope.goMotorik = function() {
    $location.path('geschafft');
  };

})

.controller('A_FragCtrl', function($scope, $stateParams, $location) {
  $scope.goMsis = function() {
    $location.path('msis');
  };

})

.controller('MotorikCtrl', function($scope, $stateParams) {

})

.controller('GeschafftCtrl', function($scope, $stateParams, $location) {
  $scope.goAu_Uebungen = function() {
    $location.path('auswahl_uebungen');
  };

  $scope.goHome = function() {
    $location.path('home');
  };
})
