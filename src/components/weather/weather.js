import angular from 'angular';
import weatherComponent from './weather.component';

let WeatherModule = angular.module('weather', [])
  .component('weather', weatherComponent);

export default WeatherModule;
