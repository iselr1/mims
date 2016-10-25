angular.module('starter.controllersSarah', [])

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

  .controller('RouteCtrl', function($scope, $stateParams) {

    var $configCircle = {
    id : "example1",
    radius : "70",
    fillStyle : 'red',
    fill : 'true',
    lineWidth : 5,
    strokeStyle : 'yellow'
  };

  var example = new DrawJS($configCircle);
  example.circle();

  })

  .controller('RouteAnlCtrl', function($scope, $stateParams) {

  })
