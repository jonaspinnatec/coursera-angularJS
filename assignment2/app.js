(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (index) {
    ShoppingListCheckOffService.buyItem(index);
  };

  toBuy.isEverythingBought = function() {
    return (toBuy.items.length === 0);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

  alreadyBought.isNothingBought = function() {
    return (alreadyBought.items.length === 0);
  }
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [{ name: "Toblerone", quantity: 2 }, { name: "Rivella", quantity: 6 }, { name: "Emmentaler", quantity:  3}, { name: "Ricola", quantity: 10 }, { name: "Swatch", quantity: 1 }]
  var alreadyBoughtItems = [];

  service.buyItem = function (index) {
    var item = toBuyItems[index];
    toBuyItems.splice(index, 1);
    alreadyBoughtItems.push(item);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
