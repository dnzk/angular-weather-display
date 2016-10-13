import Request from './request';

class LocationModel extends Request {
  constructor($q, $http) {
    'ngInject';
    super();

    this.$q = $q;
    this.$http = $http;
  }
  getLocation() {
    return this.$q((resolve, reject) => {
      this.$http({
        method: 'GET',
        url: this.getUrl('zip=12940'),
      }).then(function (response) {
        resolve(response);
      }).then(function (error) {
        reject(error);
      });
    });
  }
}

export default LocationModel;
