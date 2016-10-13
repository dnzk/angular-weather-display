import angular from 'angular';
import permissionComponent from './permission.component';

let PermissionModule = angular.module('permission', [])
  .component('permission', permissionComponent);

export default PermissionModule;
