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

var xfactor = 0.8;
var yfactor = 0.8;

var xvaluefrom = 0;
var yvaluefrom = 0;
var xvalueto = 0;
var yvalueto = 0;
var xvalue = 0;
var yvalue = 0;

var line1;
var line2;
var line3;
var line4;
var line5;
var line6;
var line7;
var line8;
var line9;
var line10;
var line11;
var line12;
var line13;
var line14;
var line15;
var line16;
var line17;
var line18;
var line19;
var line20;
var line21;
var line22;
var line23;
var line24;
var line25;
var line26;
var line27;
var line28;
var line29;
var line30;
var line31;
var line32;
var line33;
var line34;
var line35;
var line36;

var point1;
var point2;
var point3;
var point4;
var point5;
var point6;
var point7;
var point8;
var point9;
var point10;
var point11;
var point12;
var point13;
var point14;
var point15;
var point16;
var point17;
var point18;
var point19;
var point20;
var point21;
var point22;

my_canvas = document.getElementById("labyrinth");
ctx = my_canvas.getContext("2d");

  drawLine = function(xvaluefrom, yvaluefrom, xvalueto, yvalueto) {
  ctx.beginPath();
  ctx.moveTo(xvaluefrom*xfactor,yvaluefrom*yfactor); //von
  ctx.lineTo(xvalueto*xfactor, yvalueto*yfactor); //zu
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.stroke();
  };

  drawPoint = function(xvalue, yvalue) {
    ctx.beginPath();
    ctx.arc(xvalue*xfactor, yvalue*yfactor, 18, 0, 2*Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "black";
    ctx.stroke();
  };

  $scope.drawLab = function(){
    console.info("inside Lab");
    line1 = drawLine(51, 682, 160, 415);
    line2 = drawLine(160, 415, 109, 238);
    line3 = drawLine(109, 238, 160, 142);
    line4 = drawLine(160, 142, 294.5, 104);
    line5 = drawLine(294.5, 104, 326.5, 396.5);
    line6 = drawLine(109, 238, 326.5, 396.5);
    line7 = drawLine(160, 416, 326.5, 396.5);
    line8 = drawLine(160, 416, 224, 606);
    line9 = drawLine(51, 682, 224, 606);
    line10 = drawLine(224, 606, 371, 628);
    line11 = drawLine(371, 628, 326, 396);
    line12 = drawLine(326, 396, 512, 472.5);
    line13 = drawLine(512, 472.5, 422.5, 320);
    line14 = drawLine(422.5, 320, 441.5, 180.5);
    line15 = drawLine(441.5, 180.5, 294.5, 104);
    line16 = drawLine(441.5, 180.5, 627, 110.5);
    line17 = drawLine(441.5, 180.5, 544, 275.5);
    line18 = drawLine(544, 275.5, 761.5, 339);
    line19 = drawLine(761.5, 339, 627,  110.5);
    line20 = drawLine(761.5,  339, 710.4, 472.5);
    line21 = drawLine(710.4,  472.5, 512, 472.5);
    line22 = drawLine(512, 472.5, 678.5, 663);
    line23 = drawLine(678.5, 663, 371, 628);
    line24 = drawLine(678.5, 663, 806.5, 606);
    line25 = drawLine(806.5, 606, 710.5, 472.5);
    line26 = drawLine(710.5, 472.5, 928, 402.5);
    line27 = drawLine(928, 402.5, 761.5, 339);
    line28 = drawLine(928, 402.5, 889.5, 263);
    line29 = drawLine(889.5, 263, 877, 91.5);
    line30 = drawLine(889.5, 263, 761.5, 339);
    line31 = drawLine(877, 91.5, 627, 110.5);
    line32 = drawLine(928,  402.5, 909, 555);
    line33 = drawLine(909, 555, 806.5, 606);
    line34 = drawLine(909, 555, 953.5, 669.5);
    line35 = drawLine(953.5, 669.5, 806.5, 606);
    line36 = drawLine(422.5,  320, 544, 275.5);

    point1 = drawPoint(51, 682);
    point2 = drawPoint(160, 415.5);
    point3 = drawPoint(109,  237.5);
    point4 = drawPoint(160, 142.5);
    point5 = drawPoint(294.5, 104);
    point6 = drawPoint(326.5, 396.5);
    point7 = drawPoint(224, 606);
    point8 = drawPoint(371, 628);
    point9 = drawPoint(678.5, 663);
    point10 = drawPoint(512, 472.5);
    point11 = drawPoint(422.5, 320);
    point12 = drawPoint(441.5, 180.5);
    point13 = drawPoint(544, 275.5);
    point14 = drawPoint(627, 110.5);
    point15 = drawPoint(761.5, 339);
    point16 = drawPoint(710.5, 472.5);
    point17 = drawPoint(806.5, 606);
    point18 = drawPoint(909, 555);
    point19 = drawPoint(928, 402.5);
    point20 = drawPoint(889.5, 263);
    point21 = drawPoint(877, 91.5);
    point22 = drawPoint(953.5, 669.5);
  };

  $scope.drawLab();

})
;
