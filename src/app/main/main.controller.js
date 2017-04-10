(function() {
  'use strict';

  angular
    .module('bc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$state,$scope) {
    var vm = this;
    $scope.uiRouterState = $state;
    console.log($scope.uiRouterState.current.name);
  }
})();
