'use strict';

angular
  .module('bc')
  .controller('CasasAlquilerController', CasasAlquilerController);
/** @ngInject */
function CasasAlquilerController($state,ngDialog,$scope) {
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
  casasAlquiler.moreDetails = moreDetails;
  casasAlquiler.register = register;
  casasAlquiler.goDashboard = goDashboard;
  casasAlquiler.detailExample = detailExample;

  function moreDetails() {
      ngDialog.open({ template: 'app/components/categorias/casas/casasAlquiler/details.modal.html', className: 'ngdialog-theme-default' });
  }

  function detailExample() {
    ngDialog.open({ template: 'app/components/categorias/casas/casasAlquiler/detailsExample.modal.html', className: 'ngdialog-theme-default' });
  }

  function register() {
    $state.go('register');
  }

  function goDashboard() {
    $state.go('dashboard');
  }


}
