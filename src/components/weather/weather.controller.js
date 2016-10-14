class WeatherController {
  constructor(LocationModel, $state) {
    'ngInject';

    this.LocationModel = LocationModel;
    let params = this.LocationModel.getCurrentParamsStringified();
    this.LocationModel.getWeather(params)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export default WeatherController;
