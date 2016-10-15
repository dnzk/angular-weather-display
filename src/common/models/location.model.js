import Request from './request';

class LocationModel extends Request {
  constructor($q, $http) {
    'ngInject';
    super();

    this.$q = $q;
    this.$http = $http;
    this.params = {};
  }

  /**
   * get location
   * @return {Promise} promise to be resolved
   */
  getLocation() {
    return this.$q((resolve, reject) => {
      if ('geolocation' in navigator) {
        resolve(navigator.geolocation);
      } else {
        reject(false);
      }
    });
  }

  /**
   * get current weather
   * @param {string} params - string to be inserted in base url
   * @return {Promise} promise to be resolved
   */
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

  /**
   * get current params
   * @return {Object} current params
   */
  getCurrentParams() {
    return this.params;
  }

  /**
   * set current params
   * @param {Object} params - object to assign to current params
   * @return {void}
   */
  setCurrentParams(params) {
    this.params = params;
  }

  /**
   * get stringified params
   * @return {string} stringified params
   */
  getCurrentParamsStringified() {
    let stringified = '';
    for (var i in this.params) {
      stringified += `${i}=${this.params[i]}&`;
    }
    return stringified;
  }
}

export default LocationModel;
