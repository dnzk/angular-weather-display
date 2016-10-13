class LocationQueryController {
  constructor(LocationModel) {
    'ngInject';

    this.LocationModel = LocationModel;
  }
  getWeather() {
    this.LocationModel.getLocation()
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

export default LocationQueryController;
