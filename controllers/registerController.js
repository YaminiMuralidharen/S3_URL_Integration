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
         
        };
    }

})();
