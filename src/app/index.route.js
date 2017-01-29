(function() {
  'use strict';

  angular
    .module('bc')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/dashboard',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('cover', {
        url: '/',
        templateUrl: 'app/components/cover/cover.html',
        controller: 'CoverController',
        controllerAs: 'cover'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
