import angular from 'angular';
import uiRouter from 'angular-ui-router';

const dependencies = [
  uiRouter
];

let main = angular.module('app', dependencies);

main.config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Home</h1>'
    })
})

