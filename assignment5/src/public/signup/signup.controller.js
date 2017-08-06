(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    var short_name = $ctrl.user.favourite;
    SignupService.getMenu(short_name).then(function() {
      SignupService.saveUser($ctrl.user);
      $ctrl.completed = true;
    }, function(reason) {
      $ctrl.completed = false;
    });
  };
}

})();
