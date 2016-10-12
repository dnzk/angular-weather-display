import angular from 'angular';
import rootComponent from './root.component';

let RootModule = angular.module('root', [])
  .component('root', rootComponent);

export default RootModule;
