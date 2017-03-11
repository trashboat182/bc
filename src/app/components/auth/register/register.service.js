'use strict';

angular.module('bc')
  .factory('RegisterService', function (Auth) {
    return {
      signUp: function (email,password) {
        return Auth.$createUserWithEmailAndPassword(email, password)
      }
    };
  });
