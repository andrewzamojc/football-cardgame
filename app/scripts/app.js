'use strict';

angular.module('footballCardgameApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'angularLibraryApp'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
