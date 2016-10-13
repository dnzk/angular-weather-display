class Request {
  constructor() {
    'ngInject';

    this.base = 'http://api.openweathermap.org/data/2.5/weather?'
    this.APPID = 'APPID=7e0e82c5956fdfe279183fcceccccceb';
  }
  getUrl(params) {
    if (params) {
      return `${this.base}${params}&${this.APPID}`;
    }
    return `${this.base}&${this.APPID}`;
  }
}

export default Request;
