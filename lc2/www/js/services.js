angular.module('starter.services', [])
  /*
  .factory('QuestionService', function() {
      var QuestionService = {};
      var questionsStartType1 = [];
      var questionsStartType2 = [];

      QuestionService.getQuestionsStartType1 = function() {
        return questionsStartType1;
      }
      QuestionService.getQuestionsStartType2 = function() {
        return questionsStartType2;
      }

      //Funktion to generate array to load questions dynamically
      QuestionService.genQuestions = function(numberOfTotalQuestions) {
        questionsStartType1 = [];
        questionsStartType2 = [];
        for (var i = 1; i <= numberOfTotalQuestions; i++) {
          var question = {};
          if (i <= 3) {
            question.name = "MSISQE" + i;
            questionsStartType1.push(question);
            console.log(question);
            console.log(questionsStartType1);
          } else {
            question.name = "MSISQE" + i;
            questionsStartType2.push(question);
          }
        }
      }
      return QuestionService;
    })*/

.factory('QuestionnaireService', function($state, $ionicPopup, $translate) {
  var QuestionnaireService = {};

  var allAnswers = false;
  var answers = [];
  QuestionnaireService.reset = function() {
    allAnswers = false;
    answers = [];
  };

  QuestionnaireService.setValue = function(value, questionid, numberofAnswers) {

    console.log(answers.length);
    if (answers.length == 0) {
      var answer = {};
      answer.question = questionid;
      answer.value = value;
      answers.push(answer);
      console.log(answers);
      console.log(allAnswers);
    } else {
      console.log("hier");
      for (var i = 0; i < answers.length; i++) {
        console.log(answers[i].question);
        if (answers[i].question == questionid) {
          answers[i].value = value;
          break;
        } else if (i == (answers.length - 1)) {
          var answer = {};
          answer.question = questionid;
          answer.value = value;
          answers.push(answer);
        }
      }
      if (answers.length == numberofAnswers) {
        allAnswers = true;
      }
      console.log(answers);
      console.log(allAnswers);
    }
  };
  /*first variable has to be the name of the view we want to navigate to
  scond is the name of the ng-modal under which we save the answers with localStorage*/
  QuestionnaireService.checkAndStore = function(goTo, msisModal) {
    if (allAnswers) {
      $state.go(goTo);
      localStorage.setItem(msisModal, JSON.stringify(answers));
      var storedAnswers = JSON.parse(localStorage.getItem(msisModal));
      console.log(storedAnswers);
      //reset the function
      allAnswers = false;
      answers = [];
    } else {
      var popTitle = $translate.instant('Info');
      var popTemplate = $translate.instant('Bitte wählen Sie eine Antwort für jede Aussage');

      var alertPopup = $ionicPopup.alert({
        title: popTitle,
        template: popTemplate,
      });
    }
  };

  return QuestionnaireService;
})

.factory('jsonService', function($rootScope, $http, $translate) {
  var jsonService = {};
  var prefix = 'js/locale-';
  var suffix = '.json';

  jsonService.data = {};

  // initialize the json file with the currentLanguage
  var key = ($translate.proposedLanguage() || $translate.use());
  $http.get(prefix + key + suffix)
    .success(function(data) {
      jsonService.data.json = data;
      console.log('Json data is initialized');
    });

  //Gets the new json file if the language is changed
  jsonService.loadJson = function(key) {
    $http.get(prefix + key + suffix)
      .success(function(data) {
        //Array leeren
        jsonService.data.json = {};
        //Array mit neuen Werten befüllen
        jsonService.data.json = data;
        console.log('Json data is loaded');
      });
  };
  jsonService.getJson = function() {
    return jsonService.data.json;
  };

  return jsonService;
})

.factory('SymDigService', function($rootScope) {
  var SymDigService = {};
  // Array für die Schlüsseltabelle
  var keyTable = [];
  // Array für die Lösungstabelle
  var solveTable = [];
  /* Objekt mit welchem die Schlüsseltabelle gefüllt werden soll
  mit Variablen, id, numSrc -> Pfad zum Bild der Zahl, imgSrc -> Pfad zum Bild des Zeichens*/
  // Array für Lösungsbilder
  var solveImages = [];
  // Anzahl der Objekte der Schlüsseltabelle
  var numberObjectsKeyTable = 9;
  // Anzahl der Objekte der lösungstabelle
  var numberObjectsSolveTable = 18;
  //Anzahl der falschen Zuordnungen bei der Vorbereitung
  var n_incorrectPrep = 0;
  //Anzahl der korrekten Zuordnungen bei der Vorbereitung
  var n_correctPrep = 0;
  //Anzahl der falschen Zuordnungen
  var n_incorrect = 0;
  //Anzahl der korrekten Zuordnungen
  var n_correct = 0;
  //Anzahl der Versuche bei der Vorbereitung
  var n_trys = 0;
  // Zeit für Zahlsymbol Übung in ms - 120 sek
  //var time = 120000:
  // Für Kundenworkshop
  // Zeitdauer, welche für die Übung zur Verfügung steht
  //var timeExcersise = 120000;
  var timeExcersise = 90000;
  // Zeit beim Start der Übung
  //var timeWhenExcersiseStart = 0;
  //Klickfrequenz (Zeit /(Anzahl Korrekte + Inkorrekte Zuordnungen))
  var clickfrequency = 0;
  // Längste Latenz (Zeit ohne Klick)
  var longestLatency = 0;
  var next_symbol = 0;

  SymDigService.data = {};
  /* Funktion um die Schlüsseltabelle mit Objekten zu befüllen*/
  SymDigService.fillKeyTable = function(ranNums) {
    keyTable = [];
    for (var i = 1; i <= numberObjectsKeyTable; i++) {
      var newObject = {};
      newObject.id = i;
      newObject.numSrc = "img/" + i + ".png";
      newObject.imgSrc = "img/SD_" + ranNums[i - 1].toString() + ".png";
      keyTable.push(newObject);
    }
    console.log(keyTable);
    return keyTable;
  }

  /* Funktion um die Schlüsseltabelle mit Objekten zu befüllen*/
  SymDigService.fillSolveTable = function(solveNums, booleanGreen) {
    solveTable = [];
    for (var i = 1; i <= numberObjectsSolveTable; i++) {
      var newObject = {};
      if (i == 1 && booleanGreen == true) {
        newObject.imgSrc = "img/SD_" + solveNums[i - 1] + ".png";
        newObject.numSrc = "img/green.png";
        newObject.next = true;
      } else if (i == 1 && booleanGreen == false) {
        newObject.imgSrc = "img/SD_" + solveNums[i - 1] + ".png";
        newObject.numSrc = "img/empty.png";
        newObject.next = true;
      } else {
        newObject.imgSrc = "img/SD_" + solveNums[i - 1] + ".png";
        newObject.numSrc = "img/empty.png";
        newObject.next = false;

      }
      solveTable.push(newObject);
    }
    console.log(solveTable);
    return solveTable;
  }

  /* Funktion um die Schlüsseltabelle mit Objekten zu befüllen*/
  SymDigService.genSolveImages = function(solveImgs) {
      solveImages = [];
      for (var i = 1; i <= numberObjectsKeyTable; i++) {
        var newObject = {};
        newObject.id = i;
        newObject.imgSrc = "img/b" + solveImgs[i - 1].toString() + ".png";
        solveImages.push(newObject);
      }
      console.log(solveImages);
      return solveImages;
    }
    /*SymDigService.setNext_symbol = function(index) {
      if (next_symbol < 9) {
        next_symbol++;
      } else if (next_symbol == 9) {
        next_symbol = 0;
      } else {
        console.log("Der Index des nächsten Elements ist ausserhalb des definierten Bereichs"):
      }
      console.log("Index" + );
    }*/
  SymDigService.getIncorrect = function() {
    return n_incorrect;
  }
  SymDigService.getCorrect = function() {
    return n_correct;
  }
  SymDigService.getIncorrectPrep = function() {
    return n_incorrectPrep;
  }
  SymDigService.setIncorrectPrep = function(number) {
    n_incorrectPrep = number;
  }
  SymDigService.setCorrectPrep = function(number) {
    n_correctPrep = number;
  }
  SymDigService.getCorrectPrep = function() {
    return n_correctPrep;
  }
  SymDigService.getTrys = function() {
    return n_trys;
  }
  SymDigService.getTimeExcersise = function() {
      return timeExcersise;
    }
    /*SymDigService.getTimeWhenExcersiseStart = function() {
      return timeWhenExcersiseStart;
    }*/
  SymDigService.getClickFrequency = function() {
    var temp = (n_incorrect + n_correct) / (timeExcersise / 60000);

    clickfrequency = temp;
    return clickfrequency;
  }
  SymDigService.getLongestLatency = function() {

    }
    /*SymDigService.setTimeWhenExcersiseStart = function(time) {
      timeWhenExcersiseStart = time;
    }*/
  SymDigService.addCorrect = function() {
    n_correct++;
    console.log("Correct:" + n_correct);
  }
  SymDigService.addIncorrect = function() {
    n_incorrect++;
    console.log("Incorrect:" + n_incorrect);
  }
  SymDigService.addCorrectPrep = function() {
    n_correctPrep++;
    console.log("Correct:" + n_correctPrep);
  }
  SymDigService.addIncorrectPrep = function() {
    n_incorrectPrep++;
    console.log("Incorrect:" + n_incorrectPrep);
  }
  SymDigService.addTry = function() {
    n_trys++;
    console.log("Trys:" + n_trys);
  }
  SymDigService.setTry = function(number) {
    n_trys = number;
  }

  //Function to random assign Symbols to numbers
  SymDigService.doShuffle = function(array) {
      var i = array.length,
        j = 0,
        temp;

      while (i--) {

        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

      }
      return array;
    }
    // Function to random generate 10 numbers according to the specifications for the middle block
  SymDigService.genNums = function(array) {

    var arrayPosition = (array.length - 1),
      randomPosition = 0,
      minPosition = 0,
      maxPosition = 17,
      temp = [],
      alength = array.length;

    // While the number of elements of the Array
    while (arrayPosition--) {
      randomPosition = Math.floor(Math.random() * (maxPosition - minPosition) + minPosition);

      // swap number at randomly chosen position(randomPosition) with number at current Position (arrayPosition)
      temp = array[arrayPosition];
      array[arrayPosition] = array[randomPosition];
      array[randomPosition] = temp;
    }
    console.log("array vor check" + array);

    // check if two equal numbers are right next to each other
    for (var i = 0; i < alength; i++) {
      // if true, then two numbers are right next to eachother
      if (array[i] == array[i + 1]) {
        console.log(array[i + 1]);
        //if true the two last numbers are equal, then the last number
        // changes the place with the number at index 2
        if (i == (alength - 2)) {
          temp = array[i + 1];
          array[i + 1] = array[2];
          array[2] = temp;
        }
        // If the two equal numbers are not the last ones, then the one at position i+1 changes place with the last number of the array
        else {
          temp = array[i];
          console.log(temp);
          array[i] = array[alength - 1];
          array[alength - 1] = temp;
          i--;
        }
      }
    }
    console.log(array);
    return array;
  }

  return SymDigService;

});
