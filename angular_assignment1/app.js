(function (){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.lunch = "";
  $scope.check = function() {
    if($scope.lunch === ""){
      $scope.message = "Please enter data first";
      return;
    } else {
      var content = $scope.lunch.split(',');
      if(content.length <= 3){
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }
  };
};

})();
