// sets the app EmailApp and set dependencies(ngRoute, ngSanitize) 
angular.module('EmailApp', ['ngRoute', 'ngSanitize'])

  //accept $routeProvider as an argument for angular routes magic 
  .config(function ( $routeProvider ) {
  
  'use strict';

  // assign specific controllers/views based on the URL
  $routeProvider
    .when('/inbox', {
      //declare view template 
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
      //instantiates the Controller like an Object and binds it to the current scope under a namespace(InboxCtrl)
      controllerAs: 'inbox'
    })

    //dynamic view that will accept and ID
    .when('/inbox/email/:id', {
      templateUrl: 'views/email.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({
      redirectTo: '/inbox'
    });


}).run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});