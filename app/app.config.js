'use strict';

angular.
  module('minblog').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/posts', {
          template: '<post-list></post-list>'
        }).
        otherwise('/posts');
    }
  ]);
