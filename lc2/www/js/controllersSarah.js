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

my_canvas = document.getElementById("labyrinth");
ctx = my_canvas.getContext("2d");

/*--  Draw the lines --*/
//Draw Line 1
ctx.beginPath();
ctx.moveTo(51,682); //von
ctx.lineTo(160, 415); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 2
ctx.beginPath();
ctx.moveTo(160, 415); //von
ctx.lineTo(109, 238); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 3
ctx.beginPath();
ctx.moveTo(109, 238); //von
ctx.lineTo(160, 142); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 4
ctx.beginPath();
ctx.moveTo(160, 142); //von
ctx.lineTo(294.5, 104); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 5
ctx.beginPath();
ctx.moveTo(294.5,104); //von
ctx.lineTo(326.5, 396.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 6
ctx.beginPath();
ctx.moveTo(109,238); //von
ctx.lineTo(326.5, 396); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 7
ctx.beginPath();
ctx.moveTo(160,416); //von
ctx.lineTo(326.5, 396); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 8
ctx.beginPath();
ctx.moveTo(160,416); //von
ctx.lineTo(224, 606); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 9
ctx.beginPath();
ctx.moveTo(51,682); //von
ctx.lineTo(224, 606); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 10
ctx.beginPath();
ctx.moveTo(224, 606); //von
ctx.lineTo(371, 628); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 11
ctx.beginPath();
ctx.moveTo(371, 628); //von
ctx.lineTo(326,396); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 12
ctx.beginPath();
ctx.moveTo(326,396); //von
ctx.lineTo(512, 472.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 13
ctx.beginPath();
ctx.moveTo(512, 472.5); //von
ctx.lineTo(422.5, 320); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 14
ctx.beginPath();
ctx.moveTo(422.5, 320); //von
ctx.lineTo(441.5, 180.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 15
ctx.beginPath();
ctx.moveTo(441.5, 180.5); //von
ctx.lineTo(294.5, 104); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 16
ctx.beginPath();
ctx.moveTo(441.5, 180.5); //von
ctx.lineTo(627,110.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 17
ctx.beginPath();
ctx.moveTo(441.5, 180.5); //von
ctx.lineTo(544, 275.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 18
ctx.beginPath();
ctx.moveTo(544, 275.5); //von
ctx.lineTo(761.5, 339); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 19
ctx.beginPath();
ctx.moveTo(761.5, 339); //von
ctx.lineTo(627,110.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 20
ctx.beginPath();
ctx.moveTo(761.5, 339); //von
ctx.lineTo(710.4, 472.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 21
ctx.beginPath();
ctx.moveTo(710.4, 472.5); //von
ctx.lineTo(512, 472.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 22
ctx.beginPath();
ctx.moveTo(512, 472.5); //von
ctx.lineTo(678.5, 663); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 23
ctx.beginPath();
ctx.moveTo(678.5, 663); //von
ctx.lineTo(371,628); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 24
ctx.beginPath();
ctx.moveTo(678.5, 663); //von
ctx.lineTo(806.5, 606); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 25
ctx.beginPath();
ctx.moveTo(806.5, 606); //von
ctx.lineTo(710.4, 472.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 26
ctx.beginPath();
ctx.moveTo(710.4, 472.5); //von
ctx.lineTo(928,402.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 27
ctx.beginPath();
ctx.moveTo(928,402.5); //von
ctx.lineTo(761.5, 339); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 28
ctx.beginPath();
ctx.moveTo(928,402.5); //von
ctx.lineTo(889.5, 263); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 29
ctx.beginPath();
ctx.moveTo(889.5, 263); //von
ctx.lineTo(877,91.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 30
ctx.beginPath();
ctx.moveTo(889.5, 263); //von
ctx.lineTo(761.5, 339); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 31
ctx.beginPath();
ctx.moveTo(877,91.5); //von
ctx.lineTo(627,110.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 32
ctx.beginPath();
ctx.moveTo(928,402.5); //von
ctx.lineTo(909,555); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 33
ctx.beginPath();
ctx.moveTo(909,555); //von
ctx.lineTo(806.5, 606); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 34
ctx.beginPath();
ctx.moveTo(909,555); //von
ctx.lineTo(953.5, 669.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 35
ctx.beginPath();
ctx.moveTo(953.5, 669.5); //von
ctx.lineTo(806.5, 606); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();

//Draw Line 36
ctx.beginPath();
ctx.moveTo(422.5, 320); //von
ctx.lineTo(544, 275.5); //zu
ctx.closePath();
ctx.lineWidth = 2;
ctx.stroke();


/*--  Draw the Points --*/
//Draw point 1 START
ctx.beginPath();
ctx.arc(51, 682, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 2
ctx.beginPath();
ctx.arc(160, 415.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 3
ctx.beginPath();
ctx.arc(109, 237.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 4
ctx.beginPath();
ctx.arc(160, 142.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 5
ctx.beginPath();
ctx.arc(294.5, 104, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 6
ctx.beginPath();
ctx.arc(326.5, 396.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 7
ctx.beginPath();
ctx.arc(224, 606, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 8
ctx.beginPath();
ctx.arc(371, 628, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 9
ctx.beginPath();
ctx.arc(678.5, 663, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 10
ctx.beginPath();
ctx.arc(512, 472.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 11
ctx.beginPath();
ctx.arc(422.5, 320, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 12
ctx.beginPath();
ctx.arc(441.5, 180.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 13
ctx.beginPath();
ctx.arc(544, 275.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 14
ctx.beginPath();
ctx.arc(627, 110.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 15
ctx.beginPath();
ctx.arc(761.5, 339, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 16
ctx.beginPath();
ctx.arc(710.5, 472.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 17
ctx.beginPath();
ctx.arc(806.5, 606, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 18
ctx.beginPath();
ctx.arc(909, 555, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 19
ctx.beginPath();
ctx.arc(928, 402.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 20
ctx.beginPath();
ctx.arc(889.5, 263, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 21
ctx.beginPath();
ctx.arc(877, 91.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//Draw point 22 END
ctx.beginPath();
ctx.arc(953.5, 669.5, 15, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();





// Set up to draw the labyrinth!
/*var Mydraw = function (config){
  $config = config;
  my_canvas = document.getElementById("labyrinth");
  ctx = my_canvas.getContext("2d");
}

Mydraw.circle = function(){
  var centerX = $config['centerX'];
  var centerY = $config['centerY'];
  var radius = $config['radius'];

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = $config['fillStyle'];
  if ($config['fill'] !== undefined){
    ctx.fill();
  }
  ctx.lineWidth = $config['lineWidth'];
  ctx.strokeStyle = $config['strokeStyle'];
  ctx.stroke();
};

var $configCircle = {
  radius: "15",
  fillStyle: '',
  fill: 'false',
  lineWidth: 5,
  strokeStyle: 'black'
};
var circle1 = new Mydraw($configCircle);
circle1.circle();*/


/*var $configCircle = {
  id: "example1",
  radius: "70",
  fillStyle: 'red',
  fill: 'true',
  lineWidth: 5,
  strokeStyle: 'yellow'
};
var example1 = new DrawJS($configCircle);
example1.circle();

DrawJS.prototype.rectangle = function(){
       ctx.beginPath();
       var width = c.width;
       var height = c.height;

       ctx.rect(10, 10, width, height);
       ctx.fillStyle = $config['fillStyle'];

       if ($config['fill'] !== undefined){
         ctx.fill();
       }

       ctx.lineWidth = $config['lineWidth'];
       ctx.strokeStyle = $config['strokeStyle'];
       ctx.stroke();
};

DrawJS.prototype.line = function(){

        ctx.beginPath();
        ctx.moveTo($config['moveToX'], $config['moveToY']);
        ctx.lineTo($config['lineToX'], $config['lineToY']);
        ctx.lineWidth = $config['lineWidth'];

        // set line color
        ctx.strokeStyle = $config['strokeStyle'];
        ctx.stroke();
};


DrawJS.prototype.text = function(){
       var x = c.width / 2;
       var y = c.height / 2;

       ctx.font = $config['font'];
       // textAlign aligns text horizontally relative to placement
       ctx.textAlign = $config['textAlign'];
       // textBaseline aligns text vertically relative to font style
       ctx.textBaseline = $config['textBaseline'];
       ctx.fillStyle = $config['fillStyle'];

       if ($config['fill'] !== undefined){
         ctx.fill();
       }
       ctx.fillText($config['text'], x, y);
};


DrawJS.prototype.drawImage = function(){
        var x = 0;
        var y = 0;
        var imageObj = new Image();
        imageObj.onload = function() {
          ctx.drawImage(imageObj, x, y);
        };
        imageObj.src = $config['src'];

};



DrawJS.prototype.triangle = function(){
  ctx.beginPath();

  ctx.moveTo($config['moveToX'], $config['moveToY']);

  ctx.lineTo($config['lineToX'], $config['lineToY']);
  ctx.lineTo($config['lineToY'], $config['lineToX']);

  ctx.closePath();

  // the outline
  ctx.lineWidth = $config['lineWidth'];
  ctx.strokeStyle = $config['strokeStyle'];
  ctx.stroke();

  // the fill color
  ctx.fillStyle = $config['fillStyle'];
  if ($config['fill'] !== undefined){
    ctx.fill();
  }

};*/


})
;
