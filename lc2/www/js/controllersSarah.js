angular.module('starter.controllersSarah', [])

.controller('KernsympCtrl', function($scope, $stateParams, $state) {

  $scope.user1 = {
    min: '1',
    max: '10',
    value: '5'
  };
  $scope.user2 = {
    min: '1',
    max: '4',
    value: '2'
  };

  $scope.goHome = function() {
    $state.go('home');
  };

  })

.controller('RouteAnlCtrl', function($scope, $stateParams, $state) {
      $scope.goRoute = function() {
      $state.go('route');
    };

  })

.controller('RouteCtrl', function($scope, $stateParams, $interval, $state) {

var xfactor = 0.0;
var yfactor = 0.0;

var xvaluefrom = 0;
var yvaluefrom = 0;
var xvalueto = 0;
var yvalueto = 0;

var line1 = [51, 682, 160, 415];
var line2 = [160, 415, 109, 238];
var line3 = [109, 238, 160, 142];
var line4 = [160, 142, 294.5, 104];
var line5 = [294.5, 104, 326.5, 396.5];
var line6 = [109, 238, 326.5, 396.5];
var line7 = [160, 416, 326.5, 396.5];
var line8 = [160, 416, 224, 606];
var line9 = [51, 682, 224, 606];
var line10 = [224, 606, 371, 628];
var line11 = [371, 628, 326, 396];
var line12 = [326, 396, 512, 472.5];
var line13 = [512, 472.5, 422.5, 320];
var line14 = [422.5, 320, 441.5, 180.5];
var line15 = [441.5, 180.5, 294.5, 104];
var line16 = [441.5, 180.5, 627, 110.5];
var line17 = [441.5, 180.5, 544, 275.5];
var line18 = [544, 275.5, 761.5, 339];
var line19 = [761.5, 339, 627,  110.5];
var line20 = [761.5,  339, 710.4, 472.5];
var line21 = [710.4,  472.5, 512, 472.5];
var line22 = [512, 472.5, 678.5, 663]
var line23 = [678.5, 663, 371, 628];
var line24 = [678.5, 663, 806.5, 606];
var line25 = [806.5, 606, 710.5, 472.5];
var line26 = [710.5, 472.5, 928, 402.5];
var line27 = [928, 402.5, 761.5, 339];
var line28 = [928, 402.5, 889.5, 263];
var line29 = [889.5, 263, 877, 91.5];
var line30 = [889.5, 263, 761.5, 339];
var line31 = [877, 91.5, 627, 110.5];
var line32 = [928,  402.5, 909, 555];
var line33 = [909, 555, 806.5, 606];
var line34 = [909, 555, 953.5, 669.5];
var line35 = [953.5, 669.5, 806.5, 606];
var line36 = [422.5,  320, 544, 275.5];

var xvalue = 0;
var yvalue = 0;

var clickOK = false;

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

var countway = 0;
var whiteone = 0;
var firstWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];
var secondWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];

my_canvas = document.getElementById("labyrinth");
ctx = my_canvas.getContext("2d");

  // Function to draw a line
  drawLine = function(xvaluefrom, yvaluefrom, xvalueto, yvalueto) {
  ctx.beginPath();
  ctx.moveTo(xvaluefrom*xfactor,yvaluefrom*yfactor); //von
  ctx.lineTo(xvalueto*xfactor, yvalueto*yfactor); //zu
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.stroke();
  };

  // Function to draw a point
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

  // Function show the Way in the Labyrinth
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

  // Function Draw the Lab
  $scope.drawLab = function(){
    // Draw all the Lines
    drawLine(line1[0], line1[1], line1[2], line1[3]);
    drawLine(line2[0], line2[1], line2[2], line2[3]);
    drawLine(line3[0], line3[1], line3[2], line3[3]);
    drawLine(line4[0], line4[1], line4[2], line4[3]);
    drawLine(line5[0], line5[1], line5[2], line5[3]);
    drawLine(line6[0], line6[1], line6[2], line6[3]);
    drawLine(line7[0], line7[1], line7[2], line7[3]);
    drawLine(line8[0], line8[1], line8[2], line8[3]);
    drawLine(line9[0], line9[1], line9[2], line9[3]);
    drawLine(line10[0], line10[1], line10[2], line10[3]);
    drawLine(line11[0], line11[1], line11[2], line11[3]);
    drawLine(line12[0], line12[1], line12[2], line12[3]);
    drawLine(line13[0], line13[1], line13[2], line13[3]);
    drawLine(line14[0], line14[1], line14[2], line14[3]);
    drawLine(line15[0], line15[1], line15[2], line15[3]);
    drawLine(line16[0], line16[1], line16[2], line16[3]);
    drawLine(line17[0], line17[1], line17[2], line17[3]);
    drawLine(line18[0], line18[1], line18[2], line18[3]);
    drawLine(line19[0], line19[1], line19[2], line19[3]);
    drawLine(line20[0], line20[1], line20[2], line20[3]);
    drawLine(line21[0], line21[1], line21[2], line21[3]);
    drawLine(line22[0], line22[1], line22[2], line22[3]);
    drawLine(line23[0], line23[1], line23[2], line23[3]);
    drawLine(line24[0], line24[1], line24[2], line24[3]);
    drawLine(line25[0], line25[1], line25[2], line25[3]);
    drawLine(line26[0], line26[1], line26[2], line26[3]);
    drawLine(line27[0], line27[1], line27[2], line27[3]);
    drawLine(line28[0], line28[1], line28[2], line28[3]);
    drawLine(line29[0], line29[1], line29[2], line29[3]);
    drawLine(line30[0], line30[1], line30[2], line30[3]);
    drawLine(line31[0], line31[1], line31[2], line31[3]);
    drawLine(line32[0], line32[1], line32[2], line32[3]);
    drawLine(line33[0], line33[1], line33[2], line33[3]);
    drawLine(line34[0], line34[1], line34[2], line34[3]);
    drawLine(line35[0], line35[1], line35[2], line35[3]);
    drawLine(line36[0], line36[1], line36[2], line36[3]);

    // Draw all the Points
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

    // Name Start and End
    var xstart = parseInt(point1[0]*xfactor+50);
    var ystart = parseInt(point1[1]*yfactor+10);

    var xend = parseInt(point22[0]*xfactor-50);
    var yend = parseInt(point22[1]*yfactor+10);

    ctx.font = 'bold 20pt Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.fillText('Start',xstart,ystart);
    ctx.fillText('Ende',xend,yend);

  };

  // Function Click: Draw a blue point when click
  $scope.doClick = function(event){
    if (clickOK == true){
      var xclient = event.clientX;
      var yclient = event.clientY;

      var BB = my_canvas.getBoundingClientRect();
      var offsetX=BB.left;
      var offsetY=BB.top;

      var x = xclient-offsetX;
      var y = yclient-offsetY;

      if ((x < (window.innerWidth-100)) && (y < (window.innerHeight-100))){
        ctx.beginPath();
        ctx.arc(x, y, 18, 0, 2*Math.PI);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
      }
      else{
        $state.go('geschafft');
      }
    }
    else {
      console.info("nopes");
    }
  };

  // Labyrinth is defined for width="1024" height="768"
  // Calculate Factor
  var xfactor = window.innerWidth/1024;
  var yfactor = window.innerHeight/768;

  // Canvas Size = Screen Size
  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  // Draw The Labyrinth
  $scope.drawLab();

  // Click is Only possible when way through Labyrinth was shown
  setTimeout(function() {
    clickOK = true;
  }, 32000);

  // Show the Way through the Labyrinth
  $interval(showWay, 2000, 16);
})
;
