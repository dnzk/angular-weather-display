import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';
import CommonModule from './common/common';

const dependencies = [
  uiRouter,
  ComponentsModule.name,
  CommonModule.name
];

let main = angular.module('app', dependencies);

main.config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'permission'
    })
    .state('query', {
      url: '/enter-location',
      component: 'locationQuery'
    })
    .state('weather', {
      url: '/current-weather',
      component: 'weather'
    })
})

