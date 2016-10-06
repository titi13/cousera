(function () {
'use strict';

angular.module('Data')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService', 'items'];
function CategoriesListController(MenuDataService, items) {
  var list =this;
  list.items = items.data;
  // console.log(list.items);
  // console.log(list.items["0"].short_name);

};

})();
