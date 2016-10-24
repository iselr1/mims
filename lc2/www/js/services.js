angular.module('starter.services', [])

.factory('jsonService', function($rootScope, $http) {
    var jsonService = {};
    var prefix = 'js/locale-';
    var suffix = '.json';

    jsonService.data = {};

    //Gets the list of nuclear weapons
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
});
