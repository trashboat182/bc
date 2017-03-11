'use strict';

angular
  .module('bc')
  .controller('RegisterController', RegisterController);

function RegisterController($state,RegisterService) {
  var register = this;
  register.email = '';
  register.password = '';

  register.signUp = signUp;

  ////////////

  function signUp() {
    console.log('register');
    RegisterService.signUp(register.email,register.password).then(function(auth){
      console.log(auth)
    })
      .catch(function(e){
        console.log(e)
      });
  }

}
