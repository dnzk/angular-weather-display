class Request {
  constructor() {
    'ngInject';

    // setup base url and app id
    this.base = 'http://api.openweathermap.org/data/2.5/weather?'
    this.APPID = 'APPID=7e0e82c5956fdfe279183fcceccccceb';
  }

  /**
   * get base url
   * @params {string} params - string of params to be inserted
   * @return {string} the to request from
   */
  getUrl(params) {
    if (params) {
      return `${this.base}${params}&${this.APPID}`;
    }
    return `${this.base}&${this.APPID}`;
  }
}

export default Request;
