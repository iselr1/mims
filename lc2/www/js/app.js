// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ionic-datepicker', 'ionic-timepicker', 'formlyIonic', 'nvd3', 'i4mi', 'starter.controllers', 'starter.services', 'jsonFormatter', 'pascalprecht.translate'])
  .constant('APPNAME', 'HelloI4MI')
  .constant('APPSECRET', '8385bee7542099b10315dcb7b803b61a')
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

.config(function($stateProvider, $urlRouterProvider, $translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'js/locale-',
    suffix: '.json'
  });
  $translateProvider.use('de');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('auswahl_uebungen', {
    url: '/auswahl_uebungen',
    templateUrl: 'templates/auswahl_uebungen.html',
    controller: 'A_UebCtrl'
  })

  .state('auswahl_fragebogen', {
    url: '/auswahl_fragebogen',
    templateUrl: 'templates/auswahl_fragebogen.html',
    controller: 'A_FragCtrl'
  })

  .state('route', {
      url: '/route',
      templateUrl: 'templates/route.html',
      controller: 'A_FragCtrl'
    })
    .state('zahlsymbol', {
      url: '/zahlsymbol',
      templateUrl: 'templates/zahlsymbol.html',
      controller: 'ZSCtrl'
    })
    .state('motrik', {
      url: '/motrik',
      templateUrl: 'templates/motrik.html',
      controller: 'MotrikCtrl'
    })

  $urlRouterProvider.otherwise('/home')

});
