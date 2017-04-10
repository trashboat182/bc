'use strict';

angular
  .module('bc')
  .controller('TipoCasasController', TipoCasasController);
/** @ngInject */
function TipoCasasController($state) {
  console.log('TipoCasasController');
  $(window).scrollTop(0);
  var tipoCasas = this;

  /** Links */
  /*

   https://work.smarchal.com/twbscolor/
   https://blackrockdigital.github.io/startbootstrap-landing-page/#
   https://startbootstrap.com/
   https://jsfiddle.net/hibbard_eu/GArs3/     (Slider)

   */
  tipoCasas.goTipoCasa = goTipoCasa;
  tipoCasas.register = register;
  tipoCasas.goDashboard = goDashboard;

  function goTipoCasa(tipoCasa) {
    switch (tipoCasa){
      case 'alquiler':
        $state.go('casasAlquiler');
        break;
    }
  }

  function register() {
    $state.go('register');
  }

  function goDashboard() {
    $state.go('dashboard');
  }


}
