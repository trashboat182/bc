'use strict';

angular.module('bc')
  .factory('LoginService', function (Auth) {
  return {
    signIn: function (username,password) {
      return Auth.$signInWithEmailAndPassword(username, password)
    }
  };
});
