(function () {
  'use strict';

  angular.module('NarrowItDownApp')

  .component('foundItems', {
    templateUrl: 'foundItems.html',
    controller: FoundItemsComponentController,
    bindings: {
    foundItems: '<',
    onRemove: '&'
    }
  });

function FoundItemsComponentController() {
  var $ctrl = this;

  $ctrl.remove = function (myIndex) {
    $ctrl.onRemove({ index: myIndex });
  };
}
})();
