(function($){
  $(function(){

  var myApp = angular.module('myApp', []);
myApp.controller('mainCtrl', function ($scope, $http, $timeout){
  
  $http.get('http://api.randomuser.me/?results=24').success(function(data) {
    $scope.users = data.results;
    // must wait to init collapsible
    $timeout(function(){
        $('.collapsible').collapsible({});
    },500);
  }).error(function(data, status) {
    alert('get data error!');
  });
  
});

  }); // end of document ready
})(jQuery); // end of jQuery name space
