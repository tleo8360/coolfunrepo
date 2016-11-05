var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {

  $routeProvider
    .when('/view1', {
      controller: 'controllerOne',
      templateUrl: 'view1.html'
    })
    .when('/view2', {
      controller: 'controllerTwo',
      templateUrl: 'view2.html'
    });

});
