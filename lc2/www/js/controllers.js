angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, I4MIMidataService) {


  console.info("Hello");

  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  $scope.loggedIn = I4MIMidataService.loggedIn();

  $scope.showModalLogin = function() {
    I4MIMidataService.login();
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('loginCtrl', function($scope, I4MIMidataService) {

  console.info("Hello");

  $scope.user = {
    server: 'https://test.midata.coop:9000'
  }

  $scope.loggedIn = I4MIMidataService.loggedIn();

  $scope.showModalLogin = function() {
    I4MIMidataService.login();
  }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
