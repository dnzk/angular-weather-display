import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ComponentsModule from './components/components';
import CommonModule from './common/common';
import stateConfig from './config/state.config';

const dependencies = [
  uiRouter,
  ComponentsModule.name,
  CommonModule.name
];

let main = angular.module('app', dependencies);

main.config(stateConfig);

