(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemsController', MenuItemsController);

MenuItemsController.$inject = ['category', 'items']
function MenuItemsController(category, items) {
  var menu_items = this;
  menu_items.items = items;
  menu_items.category = category;
}

})();
