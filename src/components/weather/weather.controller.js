class WeatherController {
  constructor(LocationModel, $state, $sce) {
    'ngInject';

    this.$sce = $sce;
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
    for (var i in data) {
      if (data[i].constructor === Object) {
        data[i] = this.stringifyValue(data[i]);
      } else {
        data[i] = `<span>${data[i]}</span>`;
      }
      data[i] = this.$sce.trustAsHtml(data[i]);
    }

    this.rows = data;
  }
  stringifyValue(value) {
    var string = '';
    for (var i in value) {
      string += `${i}: ${value[i]}<br />`
    }
    return string;
  }
}

export default WeatherController;
