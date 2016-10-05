(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['items'];
function CategoriesController(items) {
  this.items = items.data;
};

})();
