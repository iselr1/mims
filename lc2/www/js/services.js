angular.module('starter.services', [])

.factory('jsonService', function($rootScope, $http) {
  var jsonService = {};
  var prefix = 'js/locale-';
  var suffix = '.json';

  jsonService.data = {};

  // initialize it with the german json
  $http.get(prefix + 'de' + suffix)
    .success(function(data) {
      jsonService.data.json = data;
      console.log('Json data is initialized');
    });

  //Gets the new json file if the language is changed
  jsonService.loadJson = function(key) {
    $http.get(prefix + key + suffix)
      .success(function(data) {
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
  var n_incorrect = 0;
  var n_correct = 0;
  var n_trys = 0;
  var next_symbol = 0;

  SymDigService.data = {};

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
  SymDigService.getTrys = function() {
    return n_trys;
  }

  SymDigService.addCorrect = function() {
    n_correct++;
    console.log("Correct:" + n_correct);
  }
  SymDigService.addIncorrect = function() {
    n_incorrect++;
    console.log("Incorrect:" + n_incorrect);
  }
  SymDigService.addTry = function() {
    n_trys++;
    console.log("Trys:" + n_trys);
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
    var i = 9,
      j = 0,
      number = 0,
      index = 0,
      temp = [],
      alength = 9;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    number = Math.floor((Math.random() * alength) + 1);
    index = Math.floor(Math.random() * alength);

    //add a 10th number at a random place in the array without deleting an exsiting
    array.splice(index, 0, number);

    // check if the 2 equal numbers are right next to each other
    for (var i = 0; i <= alength; i++) {
      // if true, then two numbers are right next to eachother
      if (array[i] == array[i + 1]) {
        //if true the two last numbers are equal, then the last number
        // changes the place with the number at index 2
        if (i == alength) {
          temp = array[i + 1];
          array[i + 1] = array[2];
          array[2] = temp;
        }
        // If the two equal numbers are not the last ones, then the one at position i+1 changes
        // place with the last number of the array and we can exit the for-loop
        else {
          temp = array[i + 1];
          array[i + 1] = array[alength];
          array[length] = temp;
          break;
        }
      }
    }
    return array;
  }

  return SymDigService;

});
