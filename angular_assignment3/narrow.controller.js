(function () {
  'use strict';

  angular.module('NarrowItDownApp')

  .controller('NarrowItDownController', NarrowItDownController);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var controller = this;

  controller.narrow = function() {
    var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
    promise.then (function (response) {
      controller.found = response;
    });
  };

  controller.remove = function (itemIndex) {
    controller.found.splice(itemIndex, 1);
  };
};

})();
