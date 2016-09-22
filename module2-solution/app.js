(function (){
  'use strict';

  var itemToBuyList = [
    {
      name: "Milk",
      quantity: "2 bottles"
    },
    {
      name: "Orange juice",
      quantity: "2 bottles"
    },
    {
      name: "Cookies",
      quantity: "2 bags"
    },
    {
      name: "Candy",
      quantity: "2 bags"
    },
    {
      name: "Chips",
      quantity: "2 bags"
    }
  ];

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
  .filter('isEmpty', IsEmptyFilter);

  ToBuyController.$inject= ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;

    toBuy.itemsToBuy = ShoppingListCheckOffService.getItems();

    toBuy.removeBoughtItems = function (itemIndex, quantity, itemName) {
      ShoppingListCheckOffService.copyItem(itemName, quantity);
      ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }


  AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var bought = this;

    bought.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }


  function ShoppingListCheckOffService(){
    var service = this;

    var items = itemToBuyList;
    var itemsBought = [];

    service.copyItem = function (itemName, quantity) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      itemsBought.push(item);
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };
  }

  function IsEmptyFilter() {
        var bar;
        return function (obj) {
            for (bar in obj) {
                if (obj.hasOwnProperty(bar)) {
                    return false;
                }
            }
            return true;
        };
  }

})();
