(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject= ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;


}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;




  service.getMatchedMenuItems = function (searchTerm) {
    return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
      .then(function (result) {
        var dataFound=result.data;
        var foundItems=[];

        return foundItems
      });
  };

}

})();
