/*
Document name       controllerSarah.js
Made:               01.10.2016
Made through:       meles1
Version Nr.:         1.0

Function: All Controller for the Views "Kernsymptome", "Route", "Route Anleitung"
*/
angular.module('starter.controllersSarah', [])

/* -- Controller for Kernsymptome View -- */
.controller('KernsympCtrl', function($scope, $stateParams, $state) {

  // Range for "How do you feel today"
  $scope.user1 = {
    min: '1',
    max: '10',
    value: '5'
  };

  // Range for "How is your Concentration today"
  $scope.user2 = {
    min: '1',
    max: '4',
    value: '2'
  };

  // Go to the page "Home" after Save
  $scope.goHome = function() {
    $state.go('home');
  };

})

/* -- Controller for Route Anleitung View -- */
.controller('RouteAnlCtrl', function($scope, $stateParams, $state, $ionicModal) {

  // Go to the page "Route" after Save
  $scope.goRoute = function() {
    $state.go('route');
  };

  // Show the Modal - the view with the video
  $scope.showModal = function(templateUrl) {
      $ionicModal.fromTemplateUrl(templateUrl, {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
        $scope.modal.show();
      });
  }

  // Close the modal
  $scope.closeModal = function() {
    $scope.modal.hide();
    $scope.modal.remove()
  };

  // Play the video in other View
  $scope.playVideo = function() {
    $scope.showModal('templates/routeVideo.html');
  };
})

/* -- Controller for Route View -- */
.controller('RouteCtrl', function($scope, $stateParams, $interval, $state) {

  // Factor to draw the Labyrinth (Standard 1024x768)
  var xfactor = 0.0;
  var yfactor = 0.0;

  // X and Y values for drawing a line from - to
  var xvaluefrom = 0;
  var yvaluefrom = 0;
  var xvalueto = 0;
  var yvalueto = 0;

  // Coordinates for the lines of the Labyrinth (Standard 1024x768)
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
  var line19 = [761.5, 339, 627, 110.5];
  var line20 = [761.5, 339, 710.4, 472.5];
  var line21 = [710.4, 472.5, 512, 472.5];
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
  var line32 = [928, 402.5, 909, 555];
  var line33 = [909, 555, 806.5, 606];
  var line34 = [909, 555, 953.5, 669.5];
  var line35 = [953.5, 669.5, 806.5, 606];
  var line36 = [422.5, 320, 544, 275.5];

  // X and Y Coordinates to draw a point (Center)
  var xvalue = 0;
  var yvalue = 0;

  // Boolean - is Labyrinth clickable (Standard false)
  var clickOK = true;

  // Coordinates for the points of the Labyrinth - Center (Standard 1024x768)
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

  // how many times the function showWay was executed - initial 0 - counter for the point to draw
  var countway = 0;

  // counter for the point, that needs to be drawn white again (after green)
  var whiteone = 0;

  // Arrays with all the points and all the lines from the labyrinth
  // 2 Dimensional Array
  // The first square bracket references the desired element in the outer array (actualLab).
  // The second square bracket references the desired element in the inner array (Point or Line Array).
  // (JavaScript array indexes start at zero.)
  var actualLab = [point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12, point13, point14, point15, point16, point17, point18, point19, point20, point21];
  var actualLabLines = [line1, line2, line3, line4, line5, line6, line7, line8, line9, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, line21, line22, line23, line24, line25, line26, line27, line28, line29, line30, line31, line32, line33, line34, line35, line36];

  // Array with all the points to show the first time
  var firstWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];

  // Array with all the points to show the second time - 2 Dimensional Array
  var secondWay = [point2, point7, point8, point9, point10, point11, point13, point12, point14, point21, point20, point15, point19, point16, point17];

  // get the html canvas labyrinth
  my_canvas = document.getElementById("labyrinth");

  // get the context of the canvas
  ctx = my_canvas.getContext("2d");

  // Where did the user click in the canvas
  var xclient = 0.0;
  var yclient = 0.0;
  var xrealclient = 0.0;
  var yrealclient = 0.0;

  //position for the endcircle
  var endcircle;

  // Function to test if the User hit a circle
  // x,y is the point to test
  // cx, cy is circle center, and radius is circle radius
  pointInCircle = function (x, y, cx, cy, radius) {
    console.log(x);
    console.log(y);
    console.log(cx);
    console.log(cy);
    console.log(radius);
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
    return distancesquared <= radius * radius;
  };

  // Function to draw a line
  drawLine = function(xvaluefrom, yvaluefrom, xvalueto, yvalueto) {
    ctx.beginPath();

    // line from
    ctx.moveTo(xvaluefrom * xfactor, yvaluefrom * yfactor);

    // line to
    ctx.lineTo(xvalueto * xfactor, yvalueto * yfactor);
    ctx.closePath();

    // line thickness
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  // Function to draw a point
  drawPoint = function(xvalue, yvalue, pointcolor) {
    ctx.beginPath();

    // x and y are center / factor depends on screensize / radius is 18
    ctx.arc(xvalue * xfactor, yvalue * yfactor, 18, 0, 2 * Math.PI);

    //  color of the circles filling
    ctx.fillStyle = pointcolor;
    ctx.fill();
    ctx.closePath();

    // thickness of the circle line and color
    ctx.lineWidth = 5;
    ctx.fillStyle = "black";
    ctx.stroke();
  };

  // Function show the Way in the Labyrinth
  // 2 Dimensional Arrays
  // The first square bracket references the desired element in the outer array (firstWay).
  // The second square bracket references the desired element in the inner array (Point Array).
  // (JavaScript array indexes start at zero.)
  showWay = function() {
    if (countway == 0) {

      // draw the first point in green --> coordinates
      drawPoint(firstWay[countway][0], firstWay[countway][1], "green");
    } else if (countway == 15) {

      // make the last point white again
      // whiteone = 14
      whiteone = countway - 1;
      drawPoint(firstWay[whiteone][0], firstWay[whiteone][1], "white");
    } else {

      // draw the point in green
      drawPoint(firstWay[countway][0], firstWay[countway][1], "green");

      // draw the point before the one, which is drawn in green, white again
      whiteone = countway - 1;
      drawPoint(firstWay[whiteone][0], firstWay[whiteone][1], "white");
    }

    // counter which point
    countway = countway + 1;
  };

  // Function Draw the Lab initially
  $scope.drawLab = function() {

    // Draw all the Lines
    for(var i=0;i<actualLabLines.length;i++){
          drawLine(actualLabLines[i][0], actualLabLines[i][1], actualLabLines[i][2], actualLabLines[i][3]);
    }

    // Draw all the Points
    // Draw Start Point
    drawPoint(point1[0], point1[1], "black");
    // Draw the Points of the Lab
    for(var i=0;i<actualLab.length;i++){
          drawPoint(actualLab[i][0], actualLab[i][1], "white");
    }
    // Draw End Point
    drawPoint(point22[0], point22[1], "black");

    // Name Start and End
    // where to write START
    var xstart = parseInt(point1[0] * xfactor + 50);
    var ystart = parseInt(point1[1] * yfactor + 10);
    // where to write END
    var xend = parseInt(point22[0] * xfactor - 50);
    var yend = parseInt(point22[1] * yfactor + 10);
    // write the letters in Arial, 20 pt in black
    ctx.font = 'bold 20pt Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.fillText('Start', xstart, ystart);
    ctx.fillText('End', xend, yend);

  };

  // Function Click: Draw a blue point when click, wherever you are
  $scope.doClick = function(event) {

    // Only if canvas is clickable
    if (clickOK == true) {
      xclient = event.clientX;
      yclient = event.clientY;

      var BB = my_canvas.getBoundingClientRect();
      var offsetX = BB.left;
      var offsetY = BB.top;

      xrealclient = xclient - offsetX;
      yrealclient = yclient - offsetY;

      // true if the user clicks into the endcircle
      endcircle = pointInCircle(xrealclient, yrealclient, point22[0]*xfactor, point22[1]*yfactor, 18);
      console.log(endcircle);

      // gets true if the user clicks into a point in the labyrinth
      var clickedinacircle = false;

      if (!endcircle){
        for(var i=0;i<actualLab.length;i++){
            clickedinacircle = pointInCircle(xrealclient, yrealclient, actualLab[i][0]*xfactor, actualLab[i][1]*yfactor, 18);
            if (clickedinacircle){
              drawPoint(actualLab[i][0], actualLab[i][1], "blue");
              console.log(clickedinacircle)
          }
        }
      } else {
        $state.go('geschafft');
      }
    } else {
      console.info("nopes");
    }
  };

  // Labyrinth is defined for width="1024" height="768"
  // Calculate Factor
  var xfactor = window.innerWidth / 1024;
  var yfactor = window.innerHeight / 768;

  // Canvas Size = Screen Size
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;

  // Draw The Labyrinth
  $scope.drawLab();

  // Click is Only possible when way through Labyrinth was shown
  setTimeout(function() {
    clickOK = true;
  }, 32000);

  // Show the Way through the Labyrinth
  // Function showWay is executed every 2 seconds - 16 times (because 16 points to show)
  $interval(showWay, 2000, 16);

});
