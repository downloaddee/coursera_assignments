(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buy = function(itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  }
}

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [ { name: "cookies", quantity: 10} , { name: "milk", quantity: "1 bottle" },
  { name: "brownie", quantity: "a couple of" }, { name: "chips", quantity: "3 bags"},
    { name: "Pepto Bismol", quantity: "2 bottles"} ];
  var alreadyBoughtItems = [];

  service.getToBuyItems = function() {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function() {
    return alreadyBoughtItems;
  };

  service.buy = function(itemIndex) {
    alreadyBoughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1)
  };
}

})();
