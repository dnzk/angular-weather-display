import angular from 'angular';
import RootComponent from './root/root';

const dependencies = [
  RootComponent.name
];

let ComponentsModule = angular.module('components', dependencies);

export default ComponentsModule;
