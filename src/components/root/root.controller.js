class RootController {
  constructor() {
    'ngInject';
  }
  confirm() {
    navigator.geolocation.getCurrentPosition(function (position, error) {
      if (error) { 
        console.log(error);
      } else {
        console.log(position.coords.latitude);
      }
    });
  }
  deny() {
    console.log('no please dont');
  }
}

export default RootController;
