'use strict';

angular
  .module('bc')
  .controller('LoginController', LoginController);
/** @ngInject */
function LoginController($state,LoginService) {
  console.log('LoginController');
  var login = this;

  login.email = '';
  login.password = '';
  login.error = { password:false };

  login.checkLogin = checkLogin;
  login.signUp = signUp;

  ////////////

  function checkLogin() {
    console.log('go to');
    console.log('email: '+login.email);
    console.log('password: '+login.password);
    LoginService.signIn(login.email,login.password).then(function(auth){
      console.log(auth)
    })
    .catch(function(e){
      console.log(e)
    });
  }

  function signUp() {
    $state.go('register');
  }


}
