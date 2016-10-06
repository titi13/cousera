(function() {
  'use strict';

  angular.module('Data')
  .controller('MenuItemsController', MenuItemsController);

  MenuItemsController.$inject = ['MenuDataService','items'];
  function MenuItemsController(MenuDataService, items) {
    var catDetail = this;
    catDetail.menuItems = items.data.menu_items;
    // catDetail.name = items.data.
    };

})();
