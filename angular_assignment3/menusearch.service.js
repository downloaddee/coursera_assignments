(function () {
  'use strict';

  angular.module('NarrowItDownApp')

  .service('MenuSearchService', MenuSearchService);

MenuSearchService.$inject = ['$http']
  function MenuSearchService($http) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      console.log("searching for " + searchTerm);
      return $http({
        method: "GET",
             url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
      }).then(function (result) {
        // process result and only keep items that match
        var menuItems = result.data.menu_items;
        var foundItems = [];
        if (!searchTerm) {
          return foundItems;
        }
        for (var i = 0; i < menuItems.length; i++) {
          var description = menuItems[i].description;

          if (description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(menuItems[i]);
          }
        }

        // return processed items
        return foundItems;
      });
    };
  }
})();
