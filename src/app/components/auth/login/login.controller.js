'use strict';

angular
  .module('bc')
  .controller('LoginController', LoginController);
/** @ngInject */
function LoginController($state) {
  console.log('LoginController');
  var login = this;
  login.abc = 'abc';

}
