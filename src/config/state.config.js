export default function stateConfig($stateProvider, $urlRouterProvider) {
  'ngInject'

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      ulr: '/',
      component: 'permission'
    })
    .state('query', {
      url: '/enter-location',
      component: 'locationQuery'
    })
    .state('weather', {
      url: '/current-weather',
      component: 'weather'
    })
}
