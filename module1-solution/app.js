(function (){
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController',LunchCheckController );

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.message = "";

    $scope.Check = function () {
        var nbItems = splitString($scope.dishes, ',');
        console.log(nbItems);
        if (nbItems=="0"){
          $scope.message ="Please enter data first";
        }else if (nbItems<="3") {$scope.message ="enjoy";

      }else {$scope.message ="Too much!";};
    };

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
      for (var i = 0; i < arrayOfStrings.length; i++) {
        var j = 0;
        if (arrayOfStrings==""){j++;}
      }
        return (arrayOfStrings.length-j)

    };
  }
})();
