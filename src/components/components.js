import angular from 'angular';
import RootComponent from './root/root';
import LocationQueryComponent from './location-query/location-query';
import PermissionComponent from './permission/permission';
import WeatherComponent from './weather/weather';

const dependencies = [
  RootComponent.name,
  LocationQueryComponent.name,
  PermissionComponent.name,
  WeatherComponent.name
];

let ComponentsModule = angular.module('components', dependencies);

export default ComponentsModule;
