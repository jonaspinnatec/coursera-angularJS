(function () {
"use strict";

angular.module('common')
.service('SignupService', SignupService);


SignupService.$inject = ['$http', 'EndPoint'];
function SignupService($http, EndPoint) {
  var service = this;

  service.getMenu = function (short_name) {
    return $http({
      method: 'GET',
      url: EndPoint + '/menu_items/' + short_name + '.json',
      dataType: 'json'
    }).then(function (response) {
      return response.data;
    });
  };

  service.saveUser = function (user) {
    service.user = user;
  };

  service.getUser = function () {
    return service.user;
  };

}



})();
