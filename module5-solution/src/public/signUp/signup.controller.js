(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

var myInfo=[];

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  var favoriteDish=false;
  var saved=false;

  signUpCtrl.submit = function () {

    // MenuService.getMenuItem(angular.uppercase(signUpCtrl.menuNumber)).then(function(result){
    //   signUpCtrl.menuItem =result;
    // });
    //
    // if (signUpCtrl.menuItem ==[]) {
      myInfo.firstname = signUpCtrl.firstname;
      myInfo.lastname = signUpCtrl.lastname;
      myInfo.email = signUpCtrl.email;
      myInfo.phone = signUpCtrl.phone;
      myInfo.menuNumber = angular.uppercase(signUpCtrl.menuNumber);
      myInfo.registered = true;
      MenuService.storeMyInfo(myInfo);
      signUpCtrl.saved=true;
    // }else {
    //   signUpCtrl.favoriteDish = true;
    // }
  };
}

})();
