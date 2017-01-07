angular.module('starter.controllers', [])

//--------------------------------------------------------//
//---------------CONTROLLER Navigation-----------------------//
//--------------------------------------------------------//
.controller('NavCtrl', function($scope, $state, I4MIMidataService, jsonService) {

  $scope.goHome = function() {
    $state.go('home');
  };

  $scope.doLogout = function() {
    //Logout function
    I4MIMidataService.logout();
    $state.go('login');
  }

})

//--------------------------------------------------------//
//---------------CONTROLLER Login-----------------------//
//--------------------------------------------------------//
.controller('LoginCtrl', function($scope, $translate, I4MIMidataService, jsonService, $timeout, $http, $state, $ionicLoading, $ionicPopup) {
  // Values for login
  $scope.login = {};
  $scope.login.email = '';
  $scope.login.password = '';
  $scope.login.server = 'https://test.midata.coop:9000';

  // Login
  $scope.doLogin = function() {
    //console.info(I4MIMidataService.currentUser());

    if ($scope.login.email != '' && $scope.login.password != '')
      I4MIMidataService.login($scope.login.email, $scope.login.password, $scope.login.server);
    //$scope.closeModal();
    // Zeige Loading Spinner
    $ionicLoading.show({
      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
    });

    setTimeout(function() {
      $scope.checkUser();
      // Verstecke Loading Spinner
      $ionicLoading.hide();
    }, 3000);
  }



  // Check if valid User
  $scope.checkUser = function() {
    console.info(I4MIMidataService.currentUser());
    if (I4MIMidataService.currentUser() !== undefined) {
      //$state.go('home');
      $state.go('kernsymptome');
    } else {
      I4MIMidataService.logout();
      //Inform the user that he's not logged in
      var jsonData = jsonService.getJson();
      var title = jsonData.LOGININFO;
      var template = jsonData.LOGINERRORTEXT;
      var alertPopup = $ionicPopup.alert({
        title: title,
        template: template,
      });
    }
  }

  // Logout
  $scope.logout = function() {
    console.info("Logout");
    I4MIMidataService.logout();
  }

  //Change the language
  $scope.switchLanguage = function(key) {
    $translate.use(key);
    jsonService.loadJson(key);
  };
})

//--------------------------------------------------------//
//---------------CONTROLLER Home-----------------------//
//--------------------------------------------------------//
.controller('HomeCtrl', function($scope, $stateParams, $state) {
  $scope.goKSym_Erf = function() {
    $state.go('kernsymptome');
  };

  $scope.goAu_Frageb = function() {
    $state.go('auswahl_fragebogen');
  };

  $scope.goAu_Uebungen = function() {
    $state.go('auswahl_uebungen');
  };

  $scope.goImpressum = function() {
    $state.go('impressum');
  };
})

//--------------------------------------------------------//
//---------------CONTROLLER Impressum-----------------------//
//--------------------------------------------------------//
.controller('ImpCtrl', function($scope, $stateParams, $state, $ionicPopup, jsonService) {
  var jsonData = jsonService.getJson();

  $scope.showDATATEXT = function() {
    console.log("hier");
    var alertPopup = $ionicPopup.alert({
      title: jsonData.DATAPROTECTION,
      template: jsonData.DATATEXT,
      okType: 'button-positive',
      okText: jsonData.UNDERSTOOD
    });
  }
})

//--------------------------------------------------------//
//---------------CONTROLLER Excersis overview-----------------------//
//--------------------------------------------------------//
.controller('A_UebCtrl', function($scope, $stateParams, $state) {


  $scope.goRouteAnl = function() {
    $state.go('route_anl');
  };

  $scope.goZS_Instruction = function() {
    $state.go('zahlsymbol_anl');
  };

  $scope.goMotorik = function() {
    $state.go('geschafft');
  };

})

//--------------------------------------------------------//
//---------------CONTROLLER Question overview-----------------------//
//--------------------------------------------------------//
.controller('A_FragCtrl', function($scope, $stateParams, $state) {
  $scope.goMsis = function() {
    $state.go('msis');
  };
  $scope.goFSS = function() {
    $state.go('fatigue');
  };

})

//--------------------------------------------------------//
//---------------CONTROLLER Motrik-----------------------//
//--------------------------------------------------------//
.controller('MotorikCtrl', function($scope, $stateParams, $state) {

})

//--------------------------------------------------------//
//---------------CONTROLLER Done-----------------------//
//--------------------------------------------------------//
.controller('GeschafftCtrl', function($scope, $stateParams, $state) {
  $scope.comment = {};

  $scope.goAu_Uebungen = function() {
    $state.go('auswahl_uebungen');
  };
  $scope.$on('$ionicView.beforeLeave', function() {
    // Zu ersetzen mit Datenübermittlung an Midata
    console.log($scope.comment.text);
  });
})
