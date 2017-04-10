'use strict';

angular
  .module('bc')
  .controller('CasasAlquilerController', CasasAlquilerController);
/** @ngInject */
function CasasAlquilerController($state) {
  console.log('CasasAlquilerController');
  $(window).scrollTop(0);
  var casasAlquiler = this;

  /** Links */
  /*

   https://work.smarchal.com/twbscolor/
   https://blackrockdigital.github.io/startbootstrap-landing-page/#
   https://startbootstrap.com/
   https://jsfiddle.net/hibbard_eu/GArs3/     (Slider)

   */
  casasAlquiler.login = login;
  casasAlquiler.register = register;
  casasAlquiler.goDashboard = goDashboard;

  function login() {
    console.log('login')
    $state.go('login');
  }

  function register() {
    $state.go('register');
  }

  function goDashboard() {
    $state.go('dashboard');
  }


}
