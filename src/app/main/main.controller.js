(function() {
  'use strict';

  angular
    .module('bc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$state,$scope) {
    var main = this;
    $(window).scrollTop(0);
    $scope.uiRouterState = $state;
    console.log($scope.uiRouterState.current.name);
    main.login = login;
    main.register = register;
    main.goDashboard = goDashboard;

    function login() {
      $state.go('login');
    }

    function register() {
      $state.go('register');
    }

    function goDashboard() {
      $state.go('dashboard');
    }
  }
})();
