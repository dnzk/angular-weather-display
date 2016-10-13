import angular from 'angular';
import LocationModel from './models/location.model'

let CommonModule = angular.module('common', [])
  .service('LocationModel', LocationModel)

export default CommonModule;
