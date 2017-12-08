(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope','$http','$window'];
    function HomeController($rootScope,$http,$window) {
        var vm = this;

       
        vm.addURL=addURL;
        vm.deleteUrl=deleteUrl;
        vm.shortenURL=shortenURL;
        vm.expandURL=expandURL;
        vm.editUrl=editUrl;
        vm.getAllUrl=getAllUrl;
        vm.checkUrl=checkUrl;
        vm.generatedURL=[];
     //   vm.updateURL=updateURL;
      //  vm.testapicall=testapicall;
     //  vm.textURL='www.google.com';
        initController();
         function initController() {
           vm.getAllUrl();
          // vm.generatedURL
        }
     function shortenURL() {
       var urldata ={
        oURL:vm.textURL
       }
       console.log(urldata);
    vm.textURL = checkUrl(vm.textURL);
       var username="yamini";
      var post = {
          method: 'POST',
           url: 'http://localhost:8080/api/v1/url/shorten',
          headers: {
            
            'X-Forwarded-User': username
          },
          data:{   oURL:vm.textURL     }
        } 

       //$http.post('http://localhost:8080/api/v1/url/shorten', JSON.stringify(urldata)).then(function(res) {
       $http(post).then(function(res) {
        console.log(res);
           vm.apiresponse= res.data;
          // addURL(res.data);
           vm.generatedURL.push({
                originalURL : vm.apiresponse.originalURL,
                shorternedURL :vm.apiresponse.shorternedURL
            });
           console.log(vm.apiresponse.originalURL);
           console.log(vm.apiresponse.shorternedURL);
           vm.textURL='';
        });
   }

   function expandURL(fullurl) {
    console.log("inside expand url");
    console.log(fullurl.originalURL + '  ' + fullurl.shorternedURL);
    var username="yamini"
 /*   var getoriginalurl= {
                    method: 'GET',
                    url: 'http://localhost:8080/api/v1/url/' + shorturl,
                 

                    } */

$http({
  method: 'GET',
  url: 'http://localhost:8080/api/v1/url/' + fullurl.shorternedURL,
   headers: {'Content-Type': 'application/json'}
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    console.log('success');
    console.log(response);
      console.log('response success status ' + response.status + '  ' + response.statusText + '  ' +response.data); 
    //   $window.location.href = "http://localhost:8080/api/v1/url/" + shorturl;
    window.open( "http://localhost:8080/api/v1/url/" +  fullurl.shorternedURL,'_blank');


  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log('failure');
     console.log('response failure status ' + response.status + '  jjchcc' + response.statusText  + 'aa  ' + +response.data); 
      //console.log('response failure status ' + response.status); 
     // $window.location.href = "http://localhost:8080/api/v1/url/" + shorturl;
     $window.open( "http://localhost:8080/api/v1/url/" +  fullurl.shorternedURL,'_blank');

  });
}

/*$http(getoriginalurl).then(function(res) {
 console.log("inside response of get original");
  console.log(res.data.originalURL);
 // $scope.redirectShortUrl = function () {
        $window.open('https://www.google.com', '_blank');
  //  };
}),then(error) { 

console.log(error);
};
*/

   

   function editUrl(url) {
      console.log("inside edit url");
      
       var username="yamini";
       var updateURL= {
                    method: 'PUT',
                    url: 'http://localhost:8080/api/v1/url/shorten/'+ url.shorternedURL ,
                    headers: {
    
                     'X-Forwarded-User': username
                    },
                      data: {   oURL:url.originalURL   }
                    }
                    $http(updateURL).then(function(res) {
                     console.log("inside response of edit urls")
                  console.log(res.data);
                    });


       }
  

function checkUrl(url) {

    if((!~url.indexOf("http"))||(!~url.indexOf("https"))) {
    url = "https://" + url;

  }
    return url;  
}

  function getAllUrl() {
         console.log("inside get all url");
        var username="yamini";
    var getAll= {
                    method: 'GET',
                    url: 'http://localhost:8080/api/v1/urls' ,
                    headers: {
    
                     'X-Forwarded-User': username
                    },

                    }
$http(getAll).then(function(res) {
 console.log("inside response of get all urls")
  console.log(res.data);
  //vm.generatedURL=[];
  vm.allURL= res.data;
   var genUrlLength=vm.allURL.length;
   console.log('no of urls' + genUrlLength);
  console.log('first data');
  console.log(res.data[0]);
  for (var i = 0; i < genUrlLength; i++) {
     vm.generatedURL.push({
                originalURL : vm.allURL[i].originalURL,
                shorternedURL :vm.allURL[i].shorternedURL
            });

        }
       });
}

       
       
         function deleteUrl(item) {
           
                console.log("short url " + item.shorternedURL );
                console.log(item.originalURL + "  " + item.shorternedURL );
                var username="yamini";
                 var deleteRequest = {
                 method: 'DELETE',
                 url: 'http://localhost:8080/api/v1/url/' + item.shorternedURL, 
                 headers: {
            
                    'X-Forwarded-User': username
                    },
                     
       }
        // $http.delete('http://localhost:8080/api/v1/url/' + item.shorternedURL).then(function(res) {
          $http(deleteRequest).then(function(res) {
            console.log(res);
         });
        

             var index = vm.generatedURL.indexOf(item);
            // Add deleted record to historical records
           // vm.history.push(item[index]);
            // Remove from main records (using index)
           
            vm.generatedURL.splice(index, 1);
        };


       
        function addURL(data) {
            console.log(' url' + vm.textURL );
            vm.generatedURL.push({
                originalURL : data.originalURL,
                shorternedURL :data.shorternedURL
            });
           vm.textURL ='';
            }
        }

     function testapicall() {
             $http.get('http://rest-service.guides.spring.io/greeting').then(function(res) {
           vm.apiresponse= res.data;
        });
        }


        function handleSuccess(res) {
            vm.apiresponse= res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
        
       

})();