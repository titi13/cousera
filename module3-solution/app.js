(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
  var ddo={
    templateUrl:'foundItems.html',
    scope: {
      items: '<',
      myTitle: '@title',
      myMsg: '@msg',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'list',
    bindToController: true
  }
  return ddo;
}

NarrowItDownController.$inject= ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var list = this;
  list.searchTerm="";

    list.narrowItDown = function (searchTerm) {
      MenuSearchService.getMatchedMenuItems(searchTerm)
      .then(function(result){
        list.found=result;
        list.title=(" Item(s) found");
        list.msg=""
        if (list.found.length==0) {
          list.msg="Nothing found";
        }
      });
    };

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http']
function MenuSearchService($http){
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json")})
      .then(function (result) {
      var items=result.data.menu_items;
      var foundItems=[];
      if (searchTerm.length == 0) {
        items = [];
      }else {
        for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(angular.lowercase(searchTerm))!= -1) {
            foundItems.push(items[i])
          }
        }
      }
      // console.log(items[0].description);
      // console.log(items[0].description.indexOf(searchTerm)!= -1);
      // console.log(foundItems);
        return foundItems
      });

  };

}

})();
