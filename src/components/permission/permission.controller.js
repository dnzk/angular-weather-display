class PermissionController {
  constructor($state, LocationModel) {
    'ngInject';

    this.LocationModel = LocationModel;
    this.$state = $state;
  }
  confirm() {
    this.LocationModel.getLocation()
      .then((location) => {
        location.getCurrentPosition((position) => {
          this.LocationModel.setCurrentParams({
            lon: position.coords.longitude,
            lat: position.coords.latitude
          });
          this.$state.go('weather');
        });
      })
      .catch((error) => {
        this.$state.go('query');
      });
  }
  decline() {
    this.$state.go('query');
  }
}

export default PermissionController;
