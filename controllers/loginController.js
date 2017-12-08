(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location'];
    function LoginController($location) {
        var vm = this;

        vm.login = login;

     

        function login() {
          console.log('inside login ctrl');
         //   AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (vm.email =="admin" && vm.password =="admin") {
                   // AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/home');
                } else {
                 //   FlashService.Error(response.message);
                    $location.path('/developer');
                }
          //  });
        };
    }

})();
