'use strict';

angular
  .module('bc')
  .controller('DashboardController', DashboardController);
/** @ngInject */
function DashboardController($state,ngDialog) {
  console.log('DashboardController');
  var dashboard = this;
  $(window).scrollTop(0);

  /** Links */
  /*

   https://work.smarchal.com/twbscolor/
   https://blackrockdigital.github.io/startbootstrap-landing-page/#
   https://startbootstrap.com/
   https://jsfiddle.net/hibbard_eu/GArs3/     (Slider)

  */
  dashboard.login = login;
  dashboard.register = register;
  dashboard.goDashboard = goDashboard;
  dashboard.categoria = categoria;
  dashboard.politicas = politicas;

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

  function categoria(tipo){
    switch(tipo){
      case 'casas':
        $state.go('tipoCasas');
        break;
    }
  }

  function politicas() {
    ngDialog.open({ template: 'app/components/dashboard/politicas.modal.html', className: 'ngdialog-theme-default' });
  }


}
