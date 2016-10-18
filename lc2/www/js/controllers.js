angular.module('starter.controllers', [])

.controller('NavCtrl', function($scope, $location, $state, I4MIMidataService) {
  if ($location.path() != 'home' ||
    'motorik' ||
    'route' ||
    'zahlsymbol') {
    $scope.showHomeButton = true;
    $scope.showLogoutButton = true;
  }
  else if($state.$current.name = 'login'){
    $scope.showHomeButton = false;
    $scope.showLogoutButton = false;
  }

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
  };
})

.controller('LoginCtrl', function($scope, $translate, I4MIMidataService, $timeout, $http, $state) {
    // Use for testing the development environment
  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  // Connect with MIDATA
  $scope.loggedIn = I4MIMidataService.loggedIn();

  // Call every second
/*  var timer = $timeout(function refresh() {
    if ((I4MIMidataService.loggedIn()) && ($state.$current.name = 'login')) {
      $state.go('home');
    }
    timer = $timeout(refresh, 1000);
  }, 1000);
*/
  //Change the language
  $scope.switchLanguage = function(key) {
    $translate.use(key);
  };

  $scope.showModalLogin = function(){
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

.controller('A_FragCtrl', function($scope, $stateParams, $location) {
  $scope.goMsis = function() {
    $location.path('msis');
  };

})

.controller('KernsympCtrl', function($scope, $stateParams, $location) {
    $scope.user1 = {
      min: '0',
      max: '10',
      value: '5'
    };
    $scope.user2 = {
      min: '0',
      max: '4',
      value: '2'
    };
    $scope.goHome = function() {
      $location.path('home');
    };

  })
.controller('MsisCtrl', function($scope, $stateParams) {
    $scope.goMsis2 = function() {
      $location.path('msis2');
    };
    // Fragen des Fragebogens
    $scope.msisTexts1 = [{
      text: '1. körperlich anstrengende Dinge zu tun?',
      id: 'msis1'
    }, {
      text: '2. Dinge fest anzufassen (z.B. Hahn aufdrehen)?',
      id: 'msis2'
    }, {
      text: '3. Dinge zu tragen?',
      id: 'msis3'
    }];
    $scope.msisTexts2 = [{
      text: '4. Probleme mit dem Gleichgewicht?',
      id: 'msis4'
    }, {
      text: '5. Schwierigkeiten, sich in der Wohnung zu bewegen?',
      id: 'msis5'
    }, {
      text: '6. ungeschickt zu sein?',
      id: 'msis6'
    }, {
      text: '7. steif zu sein?',
      id: 'msis7'
    }, {
      text: '8. schwere Arme und/oder Beine zu haben?',
      id: 'msis8'
    }];
    $scope.msisTexts3 = [{
      text: '9. Probleme mit dem Gleichgewicht?',
      id: 'msis4'
    }, {
      text: '10. Schwierigkeiten, sich in der Wohnung zu bewegen?',
      id: 'msis5'
    }, {
      text: '11. ungeschickt zu sein?',
      id: 'msis6'
    }, {
      text: '12. steif zu sein?',
      id: 'msis7'
    }, {
      text: '13. schwere Arme und/oder Beine zu haben?',
      id: 'msis8'
    }];
    $scope.radioButtonsCounter = [{
      id: '1',
      label: 'garnicht'
    }, {
      id: '2',
      label: 'ein bisschen'
    }, {
      id: '3',
      label: 'mässig'
    }, {
      id: '4',
      label: 'ziemlich'
    }, {
      id: '5',
      label: 'sehr'
    }];
})

.controller('Msis2Ctrl', function($scope, $stateParams, $location) {
    $scope.goMsis3 = function() {
      $location.path('msis3');
  };

})

.controller('MotorikCtrl', function($scope, $stateParams) {

})

.controller('ZSCtrl', function($scope, $stateParams) {

});
