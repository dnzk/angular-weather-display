import Request from './request';

class LocationModel extends Request {
  constructor($q, $http) {
    'ngInject';
    super();

    this.$q = $q;
    this.$http = $http;
    this.params = {};
  }
  getLocation() {
    return this.$q((resolve, reject) => {
      if ('geolocation' in navigator) {
        resolve(navigator.geolocation);
      } else {
        reject(false);
      }
    });
  }
  getWeather(params) {
    return this.$q((resolve, reject) => {
      this.$http({
        method: 'GET',
        url: this.getUrl(params),
      }).then(function (response) {
        resolve(response);
      }).then(function (error) {
        reject(error);
      });
    });
  }
  getCurrentParams() {
    return this.params;
  }
  setCurrentParams(params) {
    this.params = params;
  }
  getCurrentParamsStringified() {
    let stringified = '';
    for (var i in this.params) {
      stringified += `${i}=${this.params[i]}&`;
    }
    return stringified;
  }
}

export default LocationModel;
