(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://ychaikin-course5.herokuapp.com')
.constant('EndPoint', 'https://jonaspinnatec.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
