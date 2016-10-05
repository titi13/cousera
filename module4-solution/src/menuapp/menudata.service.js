(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject=['$http']
function MenuDataService($http){
  var service=this;

  service.getAllCategoriess = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });

    return response;
  }

  service.getItemsForCategory(ShortName) = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: shortName
      }
    });

    return response;
  };
}

})();
