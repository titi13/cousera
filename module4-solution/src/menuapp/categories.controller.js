(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'items'];
function CategoriesController(MenuDataService, items) {
  var list =this;
  list.items = items;
  console.log(list.items);
  console.log(list.items["0"].short_name);

};

})();
