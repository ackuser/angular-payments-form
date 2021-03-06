'use strict';

/**
 * @ngdoc overview
 * @name angularPaymentsApp
 * @description
 * # angularPaymentsApp
 *
 * Main module of the application.
 */
angular
  .module('angularPaymentsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'vcRecaptcha',
    'internationalPhoneNumber'
    //'Card'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/payment', {
        templateUrl: 'views/payment.html',
        controller: 'PaymentCtrl',
        controllerAs: 'payment'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
