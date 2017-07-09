(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

MsgController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";

  $scope.checkLunch = function () {
    var array = $scope.items.split(',');
    if ((array.length == 1) && (!array[0] || 0 === array[0].length)) {
      $scope.message = "Please enter data first";
    } else if (array.length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}

})();
