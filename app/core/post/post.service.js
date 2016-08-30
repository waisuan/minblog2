'use strict';

angular.
  module('core.post').
  factory('Post', ['$resource',
    function($resource) {
      return $resource('', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }
  ]);
