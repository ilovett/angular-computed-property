(function(window, angular, undefined) {

  'use strict';

  /**
   * @ngdoc overview
   * @name ngComputedProperty
   * @description
   * # ngComputedProperty
   *
   * Factory which provides computed properties.
   *
   * Code from http://stackoverflow.com/questions/11216651/computed-properties-in-angular-js
   */
  angular.module('ngComputedProperty', [])
    .factory('property', function() {

      return function(scope, propertyName, watchProperties, computeFn) {

        function updateProperty() {
          scope[propertyName] = computeFn();
        }

        // updated computed property when any dependents change
        scope.$watchCollection(watchProperties, updateProperty);

        // initial property update
        updateProperty(scope);

      };
    });

})(window, window.angular);
