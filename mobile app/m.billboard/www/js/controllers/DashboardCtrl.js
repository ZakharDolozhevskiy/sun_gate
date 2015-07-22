(function () {
  'use strict';

  angular.module('app.controllers')

    .controller('DashboardCtrl', function (Notes) {
      var vm = this;

      vm.notes = Notes.getAll();
      vm.userName = 'Test User';
    });
})();
