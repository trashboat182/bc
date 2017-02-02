'use strict';

angular
  .module('bc')
  .controller('CoverController', CoverController);

function CoverController($state) {
  var cover = this;
  cover.login = login;
  cover.register = register;

  function login() {
    console.log('login');
    $state.go('login');
  }

  function register() {
    console.log('register');
    $state.go('register');
  }
}
