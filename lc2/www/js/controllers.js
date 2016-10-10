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

.controller('A_FragCtrl', function($scope, $stateParams, $location) {
  $scope.goMsis = function() {
    $location.path('msis');
  };

})

.controller('KernsympCtrl', function($scope, $stateParams) {


  })
  .controller('MsisCtrl', function($scope, $stateParams) {
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
      label: 'test'
    }, {
      id: '2',
      label: 'test2'
    }];
  });
