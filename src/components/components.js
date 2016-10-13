import angular from 'angular';
import RootComponent from './root/root';
import LocationQueryComponent from './location-query/location-query';
import PermissionComponent from './permission/permission';

const dependencies = [
  RootComponent.name,
  LocationQueryComponent.name,
  PermissionComponent.name
];

let ComponentsModule = angular.module('components', dependencies);

export default ComponentsModule;
