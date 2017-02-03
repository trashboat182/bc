'use strict';

angular
  .module('bc')
  .controller('LoginController', LoginController);
/** @ngInject */
function LoginController($state) {
  console.log('LoginController');
  var login = this;
  login.abc = 'abc';
  login.email = '';
  login.password = '';

  login.checkLogin = checkLogin;
  login.signUp = signUp;

  ////////////

  function checkLogin() {
    console.log('go to');
    console.log('email: '+login.email);
    console.log('password: '+login.password);
    if(login.email==='kian182' && login.password==='12345'){
      $state.go('register');
    }
  }

  function signUp() {
    $state.go('register');
  }


}
