(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignupService', 'EndPoint'];
function InfoController(SignupService, EndPoint) {
  var $ctrl = this;

  $ctrl.path = EndPoint;
  $ctrl.user = SignupService.getUser();

  if ($ctrl.user) {
    var short_name = $ctrl.user.favourite;
    SignupService.getMenu(short_name).then(function(menu_item) {
      $ctrl.name = menu_item.name;
      $ctrl.description = menu_item.description;
    }, function(reason) {
      $ctrl.name = undefined;
      $ctrl.description = undefined;
    });
  }
}

})();
