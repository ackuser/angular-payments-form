'use strict';

/**
 * @ngdoc function
 * @name angularPaymentsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPaymentsApp
 */
angular.module('angularPaymentsApp')
  .controller('AboutCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
  });
