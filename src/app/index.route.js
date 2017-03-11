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
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/components/dashboard/dashboar.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
