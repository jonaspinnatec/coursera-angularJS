(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      error: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'menu',
    bindToController: true
  };

  return ddo;
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;

  menu.error = false;

  menu.findItems = function (input) {
    menu.error = false;
    if (!input) {
      menu.error = true;
      menu.items = [];
      return;
    }
    var promise = MenuSearchService.getMatchedMenuItems(input);
    promise.then(function (response) {
      menu.items = response;
      if (menu.items.length === 0) {
        menu.error = true;
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  menu.removeItem = function (itemIndex) {
    menu.items.splice(itemIndex, 1);
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (input) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response.then(function (response) {
      var menuItems = response.data.menu_items;
      var foundItems = [];
      for (var i = 0; i < menuItems.length; i++) {
        var description = menuItems[i].description;
        if (description.toLowerCase().indexOf(input) !== -1) {
          foundItems.push(menuItems[i]);
        }
      }
      return foundItems;
    });
  };

}

})();
