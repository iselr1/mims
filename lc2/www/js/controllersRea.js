angular.module('starter.controllersRea', [])




.controller('MsisCtrl', function($scope, $stateParams, $location, $timeout, jsonService) {
  // to initialize the buttons
  $timeout(function() {
    $scope.data = jsonService.getJson();
  }, 10);



  console.log($scope.data);

  $scope.goMsis2 = function() {
    $location.path('msis2');
  };
  $scope.setValue = function(value) {
    console.log(value);
  }
})

.controller('Msis2Ctrl', function($scope, $stateParams, $location, jsonService) {
    $scope.data = jsonService.getJson();

    $scope.goMsis = function() {
      $location.path('msis');
    };
    $scope.goMsis3 = function() {
      $location.path('msis3');
    };

  })
  .controller('Msis3Ctrl', function($scope, $stateParams, $location, jsonService) {
    $scope.data = jsonService.getJson();

    $scope.goMsis2 = function() {
      $location.path('msis2');
    };
    $scope.goMsis4 = function() {
      $location.path('msis4');
    };

  })
  .controller('Msis4Ctrl', function($scope, $stateParams, $location, jsonService) {
    $scope.data = jsonService.getJson();

    $scope.goMsis3 = function() {
      $location.path('msis3');
    };
    $scope.goHome = function() {
      $location.path('home');
    };

  })



.controller('ZSCtrl', function($scope, $stateParams, $location, $timeout, SymDigService) {
    // End excersise after 120 seconds
    $timeout(function() {
      $location.path('geschafft');
      //Ergänzen mit Code zum übergeben der correct und Incorrect variablen an midata
      //...
    }, 120000);

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
      var n_correct = 0;
      var n_incorrect = 0;
      // The imageName of the selected image
      console.log(imgSrc);
      for (var i = 0; i < length; i++) {
        if ($scope.images2[i].imgSrc == "img/empty.png") {
          // imageName of the numberline at the current[i] position
          var imageName = $scope.images2[i].numSrc;
          // Extracte the number of the imageName
          var number = imageName.match(/\d/g).toString();
          // Set the Symbol Image at the current position to the selected one
          $scope.images2[i].imgSrc = imgSrc;
          console.log(imageName);
          console.log(number);
          // Check if the selected image is the one that corresponds to the number at the current position
          if (angular.equals(imgSrc, $scope.images[number - 1].imgSrc)) {
            SymDigService.addCorrect();
          } else {
            SymDigService.addIncorrect();
          }
          //True if the image for the last field was choosen
          if (i == (length - 1)) {
            console.log("hier")
              //function to reload the line with new values
            solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
            for (var i = 0; i < length; i++) {
              $scope.images2[i].imgSrc = "img/empty.png";
              $scope.images2[i].numSrc = "img/" + solveNums[i] + ".png"
            }
          } else {
            break;
          }

        } else {
          //should not happen
        }
      }

    };

  })
  .controller('ZS1Ctrl', function($scope, $stateParams, $ionicPopup, $translate, $location, SymDigService) {

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

      // The imageName of the selected image
      console.log(imgSrc);
      for (var i = 0; i < length; i++) {
        console.log($scope.images2);
        if ($scope.images2[i].imgSrc == "img/empty.png") {
          console.log("versuch");
          // imageName of the numberline at the current[i] position
          var imageName = $scope.images2[i].numSrc;
          // Extracte the number of the imageName
          var number = imageName.match(/\d/g).toString();
          // Set the Symbol Image at the current position to the selected one
          $scope.images2[i].imgSrc = imgSrc;
          console.log(imageName);
          console.log(number);
          // Check if the selected image is the one that corresponds to the number at the current position
          if (angular.equals(imgSrc, $scope.images[number - 1].imgSrc)) {
            SymDigService.addCorrect();
          } else {
            SymDigService.addIncorrect();

          }
          //True if the image for the last field was choosen
          if (i == (length - 1)) {
            console.log();
            SymDigService.addTry();
            //If all images were assigned correctly or the user tried 3 times we navigate to the main excersise
            if ((SymDigService.getIncorrect() == 0) || (SymDigService.getTrys() == 3)) {
              console.log("erfolg");

              var popTitle = $translate.instant('ZStitelPopup');
              var popTemplate = $translate.instant('ZStemplatePopup');

              var alertPopup = $ionicPopup.alert({
                title: popTitle,
                template: popTemplate,
              });
              alertPopup.then(function() {
                $location.path('zahlsymbol');
              })

            } else {
              //function to reload the line with new values
              solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
              for (var i = 0; i < length; i++) {
                $scope.images2[i].imgSrc = "img/empty.png";
                $scope.images2[i].numSrc = "img/" + solveNums[i] + ".png"
              }
            }
            break;
          } else {
            break;
          }
        } else {

        }
      }
    };

  })

.controller('ZahlsymbolAnlCtrl', function($scope, $stateParams) {

});
