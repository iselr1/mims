angular.module('starter.controllersRea', [])




.controller('MsisCtrl', function($scope, $stateParams, $location, jsonService) {

    $scope.data = jsonService.getJson();


    console.log($scope.data);
    
    $scope.saveMsis = function(form){
      if(form.$valid){
        $location.path('msis2');
      }
    };

})

.controller('Msis2Ctrl', function($scope, $stateParams, $location) {
    $scope.goMsis3 = function() {
      $location.path('msis3');
  };

})



.controller('ZSCtrl', function($scope, $stateParams, SymDigService) {

var ranNums = SymDigService.doShuffle([1,2,3,4,5,6,7,8,9]);
console.log(ranNums);

  SymDigService.setSymDig = $scope.images=[
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

var solveNums = SymDigService.genNums([1,2,3,4,5,6,7,8,9]);
console.log(solveNums);

g = $scope.images2=[
{numSrc:"img/"+solveNums[0]+".png", imgSrc:"img/green.png", assigned: false},
{numSrc:"img/"+solveNums[1]+".png", imgSrc:"", assigned: false},
{numSrc:"img/"+solveNums[2]+".png"},
{numSrc:"img/"+solveNums[3]+".png"},
{numSrc:"img/"+solveNums[4]+".png"},
{numSrc:"img/"+solveNums[5]+".png"},
{numSrc:"img/"+solveNums[6]+".png"},
{numSrc:"img/"+solveNums[7]+".png"},
{numSrc:"img/"+solveNums[8]+".png"},
{numSrc:"img/"+solveNums[9]+".png"}
];
// SymDigService.setDig =

var solveImgs = SymDigService.doShuffle([1,2,3,4,5,6,7,8,9]);
console.log(solveImgs);

 $scope.images3=[
{imgSrc:"img/SD_"+solveImgs[0].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[1].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[2].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[3].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[4].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[5].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[6].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[7].toString()+".png"},
{imgSrc:"img/SD_"+solveImgs[8].toString()+".png"}
];
console.log($scope.images3);

$scope.controlZS = function(imgSrc){
  SymDigService.controlZS(imgSrc);
}
})


.controller('ZahlsymbolAnlCtrl', function($scope, $stateParams) {

})
;
