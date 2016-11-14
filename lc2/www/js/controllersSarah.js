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

.controller('RouteCtrl', function($scope, $stateParams, $interval) {

var xfactor = 0.8;
var yfactor = 0.8;

var xvaluefrom = 0;
var yvaluefrom = 0;
var xvalueto = 0;
var yvalueto = 0;

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

var xvalue = 0;
var yvalue = 0;

var point1 = [51, 682];
var point2 = [160, 415.5];
var point3 = [109, 237.5];
var point4 = [160, 142.5];
var point5 = [294.5, 104];
var point6 = [326.5, 396.5];
var point7 = [224, 606];
var point8 = [371, 628];
var point9 = [678.5, 663];
var point10 = [512, 472.5];
var point11 = [422.5, 320];
var point12 = [441.5, 180.5];
var point13 = [544, 275.5];
var point14 = [627, 110.5];
var point15 = [761.5, 339];
var point16 = [710.5, 472.5];
var point17 = [806.5, 606];
var point18 = [909, 555];
var point19 = [928, 402.5];
var point20 = [889.5, 263];
var point21 = [877, 91.5];
var point22 = [953.5, 669.5];

var pointcolor = "white";

var countway = 0;
var whiteone = 0;
var firstWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];
var secondWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];

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

  drawPoint = function(xvalue, yvalue, pointcolor) {
    ctx.beginPath();
    ctx.arc(xvalue*xfactor, yvalue*yfactor, 18, 0, 2*Math.PI);
    ctx.fillStyle = pointcolor;
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth = 5;
    ctx.fillStyle = "black";
    ctx.stroke();
  };

  showWay = function () {
    if (countway == 0){
      drawPoint(firstWay[countway][0], firstWay[countway][1], "green");
    }
    else if (countway == 15) {
      whiteone = countway-1;
      drawPoint(firstWay[whiteone][0], firstWay[whiteone][1], "white");
    }
    else {
      drawPoint(firstWay[countway][0], firstWay[countway][1], "green");
      whiteone = countway-1;
      drawPoint(firstWay[whiteone][0], firstWay[whiteone][1], "white");
    }
    countway = countway+1;
  };

  $scope.drawLab = function(){
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

    drawPoint(point1[0], point1[1], "black");
    drawPoint(point2[0], point2[1], "white");
    drawPoint(point3[0], point3[1], "white");
    drawPoint(point4[0], point4[1], "white");
    drawPoint(point5[0], point5[1], "white");
    drawPoint(point6[0], point6[1], "white");
    drawPoint(point7[0], point7[1], "white");
    drawPoint(point8[0], point8[1], "white");
    drawPoint(point9[0], point9[1], "white");
    drawPoint(point10[0], point10[1], "white");
    drawPoint(point11[0], point11[1], "white");
    drawPoint(point12[0], point12[1], "white");
    drawPoint(point13[0], point13[1], "white");
    drawPoint(point14[0], point14[1], "white");
    drawPoint(point15[0], point15[1], "white");
    drawPoint(point16[0], point16[1], "white");
    drawPoint(point17[0], point17[1], "white");
    drawPoint(point18[0], point18[1], "white");
    drawPoint(point19[0], point19[1], "white");
    drawPoint(point20[0], point20[1], "white");
    drawPoint(point21[0], point21[1], "white");
    drawPoint(point22[0], point22[1], "black");
  };

  $scope.doClick = function(event){
    var x = event.clientX;
    var y = event.clientY;
    var offsetX = event.offsetX;
    var offsetY = event.offsetY;
    console.log(x);
    console.log(y);
    console.log(offsetX);
    console.log(offsetY);

    ctx.beginPath();
    ctx.arc(x*xfactor, y*yfactor, 18, 0, 2*Math.PI);
    ctx.fillStyle = "hotpink";
    ctx.fill();
    ctx.closePath();

};

  $scope.drawLab();
  $interval(showWay, 2000, 16);

})
;
