(function () {
    'use strict';

    angular
        .module('app', ["ngRoute","xeditable"])
        .config(config)
        .run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/home', {
                controller: 'HomeController',
                templateUrl: 'views/userDashboard.html',
                controllerAs: 'vm'
            })

            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'views/loginPage.html',
                controllerAs: 'vm'
            })

            .when('/register', {
                controller: 'RegisterController',
                templateUrl: 'views/registerPage.html',
                controllerAs: 'vm'

            })
              .when('/developer', {
                controller: 'HomeController',
                templateUrl: 'views/developerDashboard.html',
                controllerAs: 'vm'

            })
             

            .otherwise({ redirectTo: '/login' });
    }

 

})();