(function() {
  'use strict';

  angular
    .module('bc')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('cover', {
        url: '/',
        templateUrl: 'app/components/cover/cover.html',
        controller: 'CoverController',
        controllerAs: 'cover'
      })
      .state('home', {
        url: '/dashboard',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/auth/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'app/components/auth/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'register'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
