(function () {
'use strict';

angular.module('data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categories'];
function CategoriesController( categories) {
  var list = this;
  list.categories = categories.data;
}

})();
