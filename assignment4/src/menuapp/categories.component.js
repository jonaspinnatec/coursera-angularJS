(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
