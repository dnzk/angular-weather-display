class WeatherController {
  constructor(LocationModel, $state) {
    'ngInject';

    this.LocationModel = LocationModel;
    let params = this.LocationModel.getCurrentParamsStringified();
    this.LocationModel.getWeather(params)
      .then((response) => {
        this.setTableValues(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  setTableValues(data) {
    this.rows = data;
    console.log(this.rows);
  }
}

export default WeatherController;
