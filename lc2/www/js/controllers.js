angular.module('starter.controllers', [])

.controller('NavCtrl', function($scope, $location, $state, I4MIMidataService) {
  if ($location.path() != 'login' || 'home' || 'motorik' ||
    'route' ||
    'zahlsymbol') {
    $scope.showHomeButton = true;
    $scope.showLogoutButton = true;
  }
  else if($location.path() == 'login'){
    $scope.showHomeButton = false;
    $scope.showLogoutButton = false;
  }
  else if($location.path() == 'home'){
    $scope.showHomeButton = false;
    $scope.showLogoutButton = true;
  }
  else{

  }

  $scope.goHome = function() {
    $location.path('home');
  };
  $scope.doLogout = function() {
    $location.path('login');
  };
  $scope.doLogout = function() {
    //Logout function
    I4MIMidataService.logout();
    $location.path('login');
  }
})

.controller('LoginCtrl', function($scope, $translate, I4MIMidataService, jsonService, $timeout, $http, $state) {
    // Use for testing the development environment
  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  // Connect with MIDATA
  $scope.loggedIn = I4MIMidataService.loggedIn();


  // Call every Second
    var timer = $timeout( function refresh(){
      if (I4MIMidataService.loggedIn()){
        $state.go('home');
      }else{
      timer = $timeout(refresh, 1000);
      }
    }, 1000);

  //Change the language
  $scope.switchLanguage = function(key) {
    $translate.use(key);
    jsonService.loadJson(key);
  };

  $scope.showModalLogin = function(){
    I4MIMidataService.login();
  }
})

.controller('HomeCtrl', function($scope, $stateParams, $location) {
  $scope.goKSym_Erf = function() {
    $location.path('kernsymptome');
  };

  $scope.goAu_Frageb = function() {
    $location.path('auswahl_fragebogen');
  };

  $scope.goAu_Uebungen = function() {
    $location.path('auswahl_uebungen');
  };

  $scope.doLogout = function() {
    $location.path('login');
  };

  $scope.goImpressum = function() {
    $location.path('impressum');
  };
})

.controller('ImpCtrl', function($scope, $stateParams) {

})

.controller('A_UebCtrl', function($scope, $stateParams, $location) {
  $scope.goHome = function() {
    $location.path('home');
  };

  $scope.goRouteAnl = function() {
    $location.path('routeAnl');
  };

  $scope.goZS = function() {
    $location.path('zahlsymbol');
  };

  $scope.goMotorik = function() {
    $location.path('motorik');
  };

})

.controller('A_FragCtrl', function($scope, $stateParams, $location) {
  $scope.goMsis = function() {
    $location.path('msis');
  };

})

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
.controller('MsisCtrl', function($scope, $stateParams, jsonService) {
    $scope.goMsis2 = function() {
      $location.path('msis2');
    };
    $scope.data = jsonService.getJson();


    console.log($scope.data);
    // Fragen des Fragebogens

})

.controller('Msis2Ctrl', function($scope, $stateParams, $location) {
    $scope.goMsis3 = function() {
      $location.path('msis3');
  };

})

.controller('MotorikCtrl', function($scope, $stateParams) {

})


.controller('ZSCtrl', function($scope, $stateParams) {
function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}
var ranNums = shuffle([1,2,3,4,5,6,7,8,9]);

  $scope.images=[
{id:"1", numSrc:"img/1.png", imgSrc:"img/SD_"+ranNums[0].toString()+".png"},
{id:"2", numSrc:"img/2.png", imgSrc:"img/SD_"+ranNums[1].toString()+".png"},
{id:"3", numSrc:"img/3.png", imgSrc:"img/SD_"+ranNums[2].toString()+".png"},
{id:"4", numSrc:"img/4.png", imgSrc:"img/SD_"+ranNums[3].toString()+".png"},
{id:"5", numSrc:"img/5.png", imgSrc:"img/SD_"+ranNums[4].toString()+".png"},
{id:"6", numSrc:"img/6.png", imgSrc:"img/SD_"+ranNums[5].toString()+".png"},
{id:"7", numSrc:"img/7.png", imgSrc:"img/SD_"+ranNums[6].toString()+".png"},
{id:"8", numSrc:"img/8.png", imgSrc:"img/SD_"+ranNums[7].toString()+".png"},
{id:"9", numSrc:"img/9.png", imgSrc:"img/SD_"+ranNums[8].toString()+".png"}
];

// Zufälliger Array der
function zsNums(array){
  var i = 9,
  j = 0,
  number = 0,
  index = 0,
  temp = [],
  alength = 9;

  while(i--){
    j = Math.floor(Math.random() * (i+1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  number = Math.floor((Math.random() * alength) + 1);
  index = Math.floor(Math.random() * alength);
  //window.alert(array.toString());
  //add a 10th number at a random place in the array without deleting an exsiting
  array.splice(index,0,number);

  // check if the 2 equal numbers are right next to each other
  for(var i =0; i<alength; i++){
    // if true, then two numbers are right next to eachother
    if(array[i] == array[i+1]){
      //if true the two last numbers are equal, then the last number
      // changes the place with the number at index 2
      if(i = alength){
        temp = array[i+1];
        array[i+1] = array[2];
        array[2] = temp;
      }
      // If the two equal numbers are not the last ones, then the one at position i+1 changes
      // place with the last number of the array and we can exit the for-loop
      else{
      temp = array[i+1];
      array[i+1] = array[alength];
      array[length] = temp;
      break;
    }
  }
}
  return array;
}
var solveNums = zsNums([1,2,3,4,5,6,7,8,9]);

$scope.images2=[
{id:"1", numSrc:"img/"+solveNums[0]+".png", imgSrc:""},
{id:"2", numSrc:"img/"+solveNums[1]+".png", imgSrc:""},
{id:"3", numSrc:"img/"+solveNums[2]+".png", imgSrc:""},
{id:"4", numSrc:"img/"+solveNums[3]+".png", imgSrc:""},
{id:"5", numSrc:"img/"+solveNums[4]+".png", imgSrc:""},
{id:"6", numSrc:"img/"+solveNums[5]+".png", imgSrc:""},
{id:"7", numSrc:"img/"+solveNums[6]+".png", imgSrc:""},
{id:"8", numSrc:"img/"+solveNums[7]+".png", imgSrc:""},
{id:"9", numSrc:"img/"+solveNums[8]+".png", imgSrc:""},
{id:"10", numSrc:"img/"+solveNums[9]+".png", imgSrc:""}
];

var solveImgs = shuffle([1,2,3,4,5,6,7,8,9]);

$scope.images3=[
{id:"1", numSrc:"img/1.png", imgSrc:"img/SD_"+solveImgs[0].toString()+".png"},
{id:"2", numSrc:"img/2.png", imgSrc:"img/SD_"+solveImgs[1].toString()+".png"},
{id:"3", numSrc:"img/3.png", imgSrc:"img/SD_"+solveImgs[2].toString()+".png"},
{id:"4", numSrc:"img/4.png", imgSrc:"img/SD_"+solveImgs[3].toString()+".png"},
{id:"5", numSrc:"img/5.png", imgSrc:"img/SD_"+solveImgs[4].toString()+".png"},
{id:"6", numSrc:"img/6.png", imgSrc:"img/SD_"+solveImgs[5].toString()+".png"},
{id:"7", numSrc:"img/7.png", imgSrc:"img/SD_"+solveImgs[6].toString()+".png"},
{id:"8", numSrc:"img/8.png", imgSrc:"img/SD_"+solveImgs[7].toString()+".png"},
{id:"9", numSrc:"img/9.png", imgSrc:"img/SD_"+solveImgs[8].toString()+".png"}
];
$scope.controlZS = function(imgSrc){

}

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

.controller('ZahlsymbolAnlCtrl', function($scope, $stateParams) {

})
;
