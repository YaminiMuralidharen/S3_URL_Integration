(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope'];
    function HomeController($rootScope) {
        var vm = this;

       // vm.user = null;
        //vm.allUsers = [];
        //vm.deleteUser = deleteUser;
        //vm.Add = Add;
        //vm.Reset= Reset;
        //vm.Delete=Delete;
        //vm.Totals=Totals;
        //vm.Undo=Undo;
        vm.addURL=addURL;
        vm.deleteUrl=deleteUrl;
       vm.textURL='www.google.com';
    /*    initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }

         vm.history = [];
        // Default data (can be loaded from a database)
        vm.records = [
            { state: 'CA', price: 22, tax: 5, include: false },
            { state: 'MA', price: 32, tax: 8, include: false }
        ];*/
        vm.generatedURL =[
            {longURL:'www.google.com',shortURL:'adsjckk'},
            {longURL:'www.twitter.com',shortURL:'bsdfsfs'},
            {longURL:'www.facebook.com',shortURL:'ajjjlds'},
            
        ];
         function deleteUrl(item) {
            // Remove first / oldest element from history if it reaches maximum capacity of 10 records
           /* if (vm.history.length === 10)
                vm.history.shift();*/
             var index = vm.generatedURL.indexOf(item);
            // Add deleted record to historical records
           // vm.history.push(item[index]);
            // Remove from main records (using index)
           
            vm.generatedURL.splice(index, 1);
        };
        // Total prices
      /*   function Totals() {
            var priceTotal = 0;
            var taxTotal = 0;
            // Loop through main records and calculate aggregate prices and taxes if include is true
            angular.forEach(vm.records, function (record) {
                if (record.include) {
                    priceTotal += vm.record.price;
                    taxTotal += vm.record.tax;
                }
            });
            // Return aggregate data
            return { price: priceTotal , tax: taxTotal };
        };
        // Delete data
        function Delete(item) {
            // Remove first / oldest element from history if it reaches maximum capacity of 10 records
            if (vm.history.length === 10)
                vm.history.shift();
             var index = vm.records.indexOf(item);
            // Add deleted record to historical records
            vm.history.push(item[index]);
            // Remove from main records (using index)
           
            vm.records.splice(index, 1);
        };*/
         
        // Reset new data model
  /*    function Reset() {
            vm.newState = '';
            vm.newPrice = 0;
            vm.newTax = 0;
        }
       Reset();
        // Add new data
       function Add() {
            // Do nothing if no state is entered (blank)
            if (!vm.newState)
                return;
            // Add to main records
            vm.records.push({
                state: vm.newState,
                price: vm.newPrice,
                tax: vm.newTax,
                include: false
            });
            // See vm.Reset...
            Reset();
        }*/
        function addURL() {
            console.log(' url' + vm.textURL );
            vm.generatedURL.push({
                longURL : vm.textURL,
                shortURL :'testurl'
            });
           vm.textURL ='';
            }
        }

        
        // Undo action (delete)
        /*  function Undo() {
            // Add last / most recent historical record to the main records
            vm.records.push(vm.history[ vm.history.length - 1 ]);
            // Remove last / most recent historical record
            vm.history.pop();
        }*/
    

})();