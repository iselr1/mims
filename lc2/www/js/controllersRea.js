angular.module('starter.controllersRea', [])


.controller('MsisCtrl', function($scope, $stateParams, $state, $timeout, jsonService, $translate, $ionicPopup, QuestionnaireService) {
  // to initialize the buttons
  $timeout(function() {
    $scope.data = jsonService.getJson();
  }, 10);

  //$scope.MSISQS1 = {};
  /* Checks if all Questions are answered
  if not, a popup informs the user about it
  if it's the case, we navigate to the next view */
  $scope.goMsis2 = function() {
    /*first variable has to be the name of the view we want to navigate to
    scond is the name of the ng-modal under which we save the answers with localStorage*/
    QuestionnaireService.checkAndStore('msis2', 'MSISQS1');
  };

  $scope.setValue = function(value, questionid) {
    QuestionnaireService.setValue(value, questionid, '7');
  };
})

.controller('Msis2Ctrl', function($scope, $stateParams, $state, jsonService, QuestionnaireService, $timeout) {
    $timeout(function() {
      $scope.data = jsonService.getJson();
    }, 10);
    QuestionnaireService.reset();

    /* Checks if all Questions are answered
    if not, a popup informs the user about it
    if it's the case, we navigate to the next view */
    $scope.goMsis3 = function() {
      /*first variable has to be the name of the view we want to navigate to
      scond is the name of the ng-modal under which we save the answers with localStorage*/
      QuestionnaireService.checkAndStore('msis3', 'MSISQS2');
    };

    $scope.setValue = function(value, questionid) {
      QuestionnaireService.setValue(value, questionid, '8');
    };
    $scope.goMsis = function() {
      $state.go('msis');
      //******ergänzen mit load function von loaclstorage******/
    };

  })
  .controller('Msis3Ctrl', function($scope, $stateParams, $state, jsonService, QuestionnaireService, $timeout) {
    $timeout(function() {
      $scope.data = jsonService.getJson();
    }, 10);
    QuestionnaireService.reset();

    /* Checks if all Questions are answered
    if not, a popup informs the user about it
    if it's the case, we navigate to the next view */
    $scope.goMsis4 = function() {
      /*first variable has to be the name of the view we want to navigate to
      scond is the name of the ng-modal under which we save the answers with localStorage*/
      QuestionnaireService.checkAndStore('msis4', 'MSISQS3');
    };

    $scope.setValue = function(value, questionid) {
      QuestionnaireService.setValue(value, questionid, '8');
    };

    $scope.goMsis2 = function() {
      $state.go('msis2');
      //******ergänzen mit load function von loaclstorage******/
    };
  })
  .controller('Msis4Ctrl', function($scope, $stateParams, $state, jsonService, QuestionnaireService, $timeout) {
    $timeout(function() {
      $scope.data = jsonService.getJson();
    }, 10);

    QuestionnaireService.reset();

    /* Checks if all Questions are answered
    if not, a popup informs the user about it
    if it's the case, we navigate to the next view */
    $scope.goHome = function() {
      /*first variable has to be the name of the view we want to navigate to
      scond is the name of the ng-modal under which we save the answers with localStorage*/
      QuestionnaireService.checkAndStore('home', 'MSISQS4');
    };

    $scope.setValue = function(value, questionid) {
      QuestionnaireService.setValue(value, questionid, '6');
    };

    $scope.goMsis3 = function() {
      $state.go('msis3');
    };
  })

.controller('Msis5Ctrl', function($scope, $stateParams, $state, jsonService, $timeout) {
  $timeout(function() {
    $scope.data = jsonService.getJson();
  }, 10);

  $scope.goMsis4 = function() {
    $state.go('msis4');
  };
})

.controller('ZahlsymbolAnlCtrl', function($scope, $state, $ionicLoading, $ionicModal) {
    $scope.goSD_Preparation = function() {
      $ionicLoading.show({
        template: '<p>Loading...</p><ion-spinner></ion-spinner>'
      });

      setTimeout(function() {
        $state.go('zahlsymbol1');
        // Verstecke Loading Spinner
        $ionicLoading.hide();
      }, 1000);
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
      $scope.showModal('templates/zahlsymbolVideo.html');
    };
  })
  .controller('ZSVideoCtrl', function($scope, $state, $ionicModal) {
    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };
  })
  .controller('RouteVideoCtrl', function($scope, $state, $ionicModal) {
    $scope.closeModal = function() {
      $scope.modal.hide();
      $scope.modal.remove()
    };
  })


.controller('ZSCtrl', function($scope, $stateParams, $state, $timeout, $ionicPopup, SymDigService) {
    // Registrieren der Startzeit der Übung
    var lastTime = (new Date()).getTime();

    // End excersise after 120 seconds
    $timeout(function() {
      $state.go('geschafft');
      //Ergänzen mit Code zum übergeben der correct und Incorrect variablen an midata
      //...
      //Code zu Testzwecken für Kundenworkshop
      var correct = SymDigService.getCorrect();
      var incorrect = SymDigService.getIncorrect();
      var clickFrequency = SymDigService.getClickFrequency();
      var alertPopup = $ionicPopup.alert({
        title: "Variablen für MIDATA",
        template: "Korrekte Felder:" + correct + "</br></br>" + "Inkorrekte Felder:" + incorrect + "</br></br>" + "Klickfrequenz(pro Min):" + clickFrequency,
      });
      alertPopup.then(function() {
        $state.go('geschafft');
      })
    }, SymDigService.getTimeExcersise());

    var ranNums = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(ranNums);
    // Generate the keyTable
    $scope.keyTable = SymDigService.fillKeyTable(ranNums);

    // Zufälliger Array der
    var solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(solveNums);
    //Generate the solveTable
    $scope.solveTable = SymDigService.fillSolveTable(solveNums);

    var solveImgs = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(solveImgs);
    // Generate the Images to add to the solveTable
    $scope.solveImages = SymDigService.genSolveImages(solveImgs);

    $scope.setValueImage = function(imgSrc) {
      var length = $scope.solveTable.length;

      /*Funktion um die Längste Latenz zwischen zwei Klicks zu eruieren*/
      var lastLatency = 0;

      function onClickCheck() {
        var timeNow = (new Date()).getTime();

        if (timeNow > (lastLatency + 5000)) {
          // Execute the link action
        } else {
          alert('Please wait at least 5 seconds between clicks!');
        }

        lastLatency = timeNow;
      }
      // The imageName of the selected image
      console.log(imgSrc);
      for (var i = 0; i < length; i++) {
        // true if the symbol image at this position is the green image, to mark that this image is gonna be replaced with the choosen one
        if ($scope.solveTable[i].imgSrc == "img/green.png") {
          // imageName of the numberline at the current[i] position
          var imageName = $scope.solveTable[i].numSrc;
          // Extracte the number of the imageName
          var number = imageName.match(/\d/g).toString();
          // Set the Symbol Image at the current position to the selected one
          $scope.solveTable[i].imgSrc = imgSrc;
          // Set the next empty Symbol Image to the green one
          if (i < (length - 1)) {
            $scope.solveTable[i + 1].imgSrc = "img/green.png";
          }
          console.log(imageName);
          console.log(number);
          // Check if the selected image is the one that corresponds to the number at the current position
          if (angular.equals(imgSrc, $scope.keyTable[number - 1].imgSrc)) {
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
              //set the first symbol image to the green image
              if (i == 0) {
                $scope.solveTable[i].imgSrc = "img/green.png";
                $scope.solveTable[i].numSrc = "img/" + solveNums[i] + ".png"
              } // set all the others symbol keyTable to the empty image
              else {
                $scope.solveTable[i].imgSrc = "img/empty.png";
                $scope.solveTable[i].numSrc = "img/" + solveNums[i] + ".png"
              }
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
  .controller('ZS1Ctrl', function($scope, $stateParams, $ionicPopup, $translate, $state, SymDigService) {

    var ranNums = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(ranNums);
    $scope.keyTable = SymDigService.fillKeyTable(ranNums);

    // Zufälliger Array der

    var solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(solveNums);
    $scope.solveTable = SymDigService.fillSolveTable(solveNums);

    var solveImgs = SymDigService.doShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(solveImgs);

    // Generate the Images to add to the solveTable
    $scope.solveImages = SymDigService.genSolveImages(solveImgs);

    $scope.setValueImage = function(imgSrc) {
      var length = $scope.solveTable.length;

      // The imageName of the selected image
      console.log(imgSrc);
      for (var i = 0; i < length; i++) {
        console.log($scope.solveTable);
        // true if the symbol image at this position is the green image, to mark that this image is gonna be replaced with the choosen one
        if ($scope.solveTable[i].imgSrc == "img/green.png") {
          console.log("versuch");
          // imageName of the numberline at the current[i] position
          var imageName = $scope.solveTable[i].numSrc;
          // Extracte the number of the imageName
          var number = imageName.match(/\d/g).toString();
          // Set the Symbol Image at the current position to the selected one
          console.log("Bildquelle" + imgSrc);
          $scope.solveTable[i].imgSrc = imgSrc;
          console.log("jetzt" + $scope.solveTable[i].imgSrc);

          // Set the next empty Symbol Image to the green one
          if (i < (length - 1)) {
            $scope.solveTable[i + 1].imgSrc = "img/green.png";
          }
          console.log(imageName);
          console.log(number);
          // Check if the selected image is the one that corresponds to the number at the current position
          if (angular.equals(imgSrc, $scope.keyTable[number - 1].imgSrc)) {
            SymDigService.addCorrectPrep();
          } else {
            SymDigService.addIncorrectPrep();

          }
          //True if the image for the last field was choosen
          if (i == (length - 1)) {
            console.log();
            SymDigService.addTry();
            //If all keyTable were assigned correctly or the user tried 3 times we navigate to the main excersise
            if ((SymDigService.getIncorrectPrep() == 0) || (SymDigService.getTrys() >= 3)) {
              console.log("erfolg");

              var popTitle = $translate.instant('SDTITLE_POPUP');
              var popTemplate = $translate.instant('SDTEMPLATE_POPUP');

              var alertPopup = $ionicPopup.alert({
                title: popTitle,
                template: popTemplate,
              });
              alertPopup.then(function() {
                $state.go('zahlsymbol');
              })

            } else {
              //Set the number for correct and incorret assigned symbols back to zero
              SymDigService.setIncorrectPrep(0);
              SymDigService.setCorrectPrep(0);
              //function to reload the line with new values
              solveNums = SymDigService.genNums([1, 2, 3, 4, 5, 6, 7, 8, 9]);
              for (var i = 0; i < length; i++) {
                //set the first symbol image to the green image
                if (i == 0) {
                  $scope.solveTable[i].imgSrc = "img/green.png";
                  $scope.solveTable[i].numSrc = "img/" + solveNums[i] + ".png"
                } // set all the others symbol keyTable to the empty image
                else {
                  $scope.solveTable[i].imgSrc = "img/empty.png";
                  $scope.solveTable[i].numSrc = "img/" + solveNums[i] + ".png"
                }
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

  });
