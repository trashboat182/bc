'use strict';

angular.module('bc')
  .factory('LoginService', function (Auth) {
  return {
    signIn: function (email,password) {
      return Auth.$signInWithEmailAndPassword(email, password)
    }
  };
});
