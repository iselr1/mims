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

//Draw point 1
ctx.beginPath();
ctx.arc(50, 400, 15, 0, 2*Math.PI);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();

//draw line 1
ctx.beginPath();
ctx.moveTo(50,383);
ctx.lineTo(70, 242);
ctx.lineWidth = 2;
ctx.stroke();
ctx.closePath();

//Draw point 2
ctx.beginPath();
ctx.arc(75, 230, 15, 0, 2*Math.PI);
ctx.closePath();
ctx.lineWidth = 5;
ctx.fillStyle = "black";
ctx.stroke();


//Draw point 3
ctx.beginPath();
ctx.arc(170, 370, 15, 0, 2*Math.PI);
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
