import angular from 'angular';
import locationQueryComponent from './location-query.component';

let LocationQueryModule = angular.module('locationQuery', [])
  .component('locationQuery', locationQueryComponent);

export default LocationQueryModule;
