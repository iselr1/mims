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

.controller('RouteAnlCtrl', function($scope, $stateParams, $location) {
      $scope.goRoute = function() {
        $location.path('route');
    };

  })

.controller('RouteCtrl', function($scope, $stateParams) {

// Set up to draw the labyrinth!
var my_canvas = document.getElementById("labyrinth");
var ctx = my_canvas.getContext("2d");



// Draw the points
ctx.beginPath();
ctx.arc(50, 400, 15, 0, 2*Math.PI);
ctx.closePath();
ctx.lineWidth = 5;
ctx.stroke();
ctx.fillStyle = "black";


//draw a line
ctx.beginPath();
ctx.moveTo(100,400);
ctx.lineTo(200, 200);
ctx.stroke();

// Draw the left eye
context.beginPath();
context.arc(75, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the right eye
context.beginPath();
context.arc(114, 75, 5, 0, 2*Math.PI);
context.closePath();
context.fill();

// Draw the mouth
context.beginPath();
context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
context.closePath();
context.fill();

// Write "Hello, World!"
context.font = "30px Garamond";
context.fillText("Hello, World!",15,175);



})
;
