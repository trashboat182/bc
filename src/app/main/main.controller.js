(function() {
  'use strict';

  angular
    .module('bc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout,$state,$scope,ngDialog) {
    var main = this;
    $(window).scrollTop(0);
    $scope.uiRouterState = $state;
    main.login = login;
    main.register = register;
    main.goDashboard = goDashboard;
    main.addProduct = addProduct;
    main.success = success;

    function login() {
      $state.go('login');
    }

    function register() {
      $state.go('register');
    }

    function goDashboard() {
      $state.go('dashboard');
    }

    function addProduct() {
      ngDialog.open({ template: 'app/main/addProduct.modal.html', className: 'ngdialog-theme-default add-product',scope: $scope });
    }

    function success() {
      $timeout(function () {
        ngDialog.close();
        $scope.showFake = true;
      },2000)
    }

    $scope.showProduct = function(){
      ngDialog.close();
      ngDialog.open({ template: 'app/main/success.modal.html', className: 'ngdialog-theme-default add-product',scope: $scope });
      success();
    };

    $scope.showFake = false;
  }
})();
