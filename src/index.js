import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';

const dependencies = [
  uiRouter,
  ComponentsModule.name
];

let main = angular.module('app', dependencies);

main.config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'root'
    })
})

