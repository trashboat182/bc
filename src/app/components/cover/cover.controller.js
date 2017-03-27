'use strict';

angular
  .module('bc')
  .controller('CoverController', CoverController);

function CoverController($state) {
  var cover = this;
  cover.login = login;
  cover.register = register;
  cover.goDashboard = goDashboard;

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
