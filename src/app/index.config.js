(function() {
  'use strict';

  angular
    .module('bc')
    .config(config)

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    var config = {
      apiKey: "AIzaSyAFn3v-YDIHS5k3w9tMVyC-Bu4EBAFZJ_U",
      authDomain: "qualia-379e2.firebaseapp.com",
      databaseURL: "https://qualia-379e2.firebaseio.com",
      storageBucket: "qualia-379e2.appspot.com",
      messagingSenderId: "596372653299"
    };
    firebase.initializeApp(config);
  }


})();
