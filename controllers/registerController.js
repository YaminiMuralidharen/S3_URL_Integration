(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location'];
    function RegisterController($location) {
        var vm = this;

        vm.register = register;

     

        function register() {
          console.log('inside register ctrl');
           $location.path('/login');
         //   AuthenticationService.Login(vm.username, vm.password, function (response) {
                /*if (vm.email ==="admin" && vm.password ==="admin") {
                   // AuthenticationService.SetCredentials(vm.username, vm.password);
                    $location.path('/login');
                } else {
                 //   FlashService.Error(response.message);
                    
                }*/
          //  });
        };
    }

})();
