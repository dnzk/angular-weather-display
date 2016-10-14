class LocationQueryController {
  constructor($state, LocationModel) {
    'ngInject';

    this.$state = $state;
    this.LocationModel = LocationModel;
  }
  getWeather() {
    this.LocationModel.setCurrentParams({
      zip: this.zipCode
    });
    this.$state.go('weather');
  }
}

export default LocationQueryController;
