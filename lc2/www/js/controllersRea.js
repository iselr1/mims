angular.module('starter.controllersRea', [])




.controller('MsisCtrl', function($scope, $stateParams, $location, jsonService) {

  $scope.data = jsonService.getJson();


  console.log($scope.data);

  $scope.saveMsis = function(form) {
    if (form.$valid) {
      $location.path('msis2');
    }
  };
  $scope.setValue = function(value) {
    console.log(value);
  }
})

.controller('Msis2Ctrl', function($scope, $stateParams, $location) {
  $scope.goMsis3 = function() {
    $location.path('msis3');
  };

})



.controller('ZSCtrl', function($scope, $stateParams, SymDigService) {

  var ranNums = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(ranNums);

  $scope.images = [{
    id: "1",
    numSrc: "img/1.png",
    imgSrc: "img/SD_" + ranNums[0].toString() + ".png"
  }, {
    id: "2",
    numSrc: "img/2.png",
    imgSrc: "img/SD_" + ranNums[1].toString() + ".png"
  }, {
    id: "3",
    numSrc: "img/3.png",
    imgSrc: "img/SD_" + ranNums[2].toString() + ".png"
  }, {
    id: "4",
    numSrc: "img/4.png",
    imgSrc: "img/SD_" + ranNums[3].toString() + ".png"
  }, {
    id: "5",
    numSrc: "img/5.png",
    imgSrc: "img/SD_" + ranNums[4].toString() + ".png"
  }, {
    id: "6",
    numSrc: "img/6.png",
    imgSrc: "img/SD_" + ranNums[5].toString() + ".png"
  }, {
    id: "7",
    numSrc: "img/7.png",
    imgSrc: "img/SD_" + ranNums[6].toString() + ".png"
  }, {
    id: "8",
    numSrc: "img/8.png",
    imgSrc: "img/SD_" + ranNums[7].toString() + ".png"
  }, {
    id: "9",
    numSrc: "img/9.png",
    imgSrc: "img/SD_" + ranNums[8].toString() + ".png"
  }];

  console.log(SymDigService.setSymDig = $scope.images);
  // Zufälliger Array der

  var solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(solveNums);

  $scope.images2 = [{
    numSrc: "img/" + solveNums[0] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[1] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[2] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[3] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[4] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[5] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[6] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[7] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[8] + ".png",
    imgSrc: "img/empty.png"
  }, {
    numSrc: "img/" + solveNums[9] + ".png",
    imgSrc: "img/empty.png"
  }];

  var solveImgs = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  console.log(solveImgs);

  $scope.solveImg1 = "img/SD_" + solveImgs[0].toString() + ".png";
  $scope.solveImg2 = "img/SD_" + solveImgs[1].toString() + ".png";
  $scope.solveImg3 = "img/SD_" + solveImgs[2].toString() + ".png";
  $scope.solveImg4 = "img/SD_" + solveImgs[3].toString() + ".png";
  $scope.solveImg5 = "img/SD_" + solveImgs[4].toString() + ".png";
  $scope.solveImg6 = "img/SD_" + solveImgs[5].toString() + ".png";
  $scope.solveImg7 = "img/SD_" + solveImgs[6].toString() + ".png";
  $scope.solveImg8 = "img/SD_" + solveImgs[7].toString() + ".png";
  $scope.solveImg9 = "img/SD_" + solveImgs[8].toString() + ".png";


  $scope.setValueImage = function(imgSrc) {
    var length = $scope.images2.length;
    console.log(imgSrc);
    for (var i = 0; i < length; i++) {
      if ($scope.images2[i].imgSrc == "img/empty.png") {

        var imageName = $scope.images2[i].numSrc;
        var number = imageName.match(/\d/g).toString();
        console.log(imageName);
        console.log(number);
        //console.log($scope.images[number].imgSrc);
        console.log(imgSrc);
        console.log($scope.images[number - 1].imgSrc);
        if (angular.equals(imgSrc, $scope.images[number - 1].imgSrc)) {
          $scope.images2[i].imgSrc = imgSrc;
          console.log($scope.images2[i].imgSrc);
          break;
        } else {
          break;
        }
      } else {
        //function to reload the line with new values

      }
    }
  };

})

.controller('ZahlsymbolAnlCtrl', function($scope, $stateParams) {

});
