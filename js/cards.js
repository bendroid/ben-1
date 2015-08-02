(function($){
  $(function(){

  // Plugin initialization
    $('.slider').slider({full_width: true});
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();
    $('.scrollspy').scrollSpy();
    $('.button-collapse').sideNav({'edge': 'left'});
    $('.datepicker').pickadate({selectYears: 20});
    $('select').not('.disabled').material_select();
  
  
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


var options = [
    {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
    {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
    {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
    {selector: '#image-test', offset: 500, callback: 'Materialize.fadeInImage("#image-test")' }
  ];
  Materialize.scrollFire(options);
      

  }); // end of document ready
})(jQuery); // end of jQuery name space
