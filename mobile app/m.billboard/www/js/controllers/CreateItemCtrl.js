(function () {
  'use strict';

  angular.module('app.controllers')

  .controller('CreateItemCtrl', function ($ionicHistory, $state, CATEGORY, Notes) {
    var vm = this;
    vm.newNote = {};
    // Default values of angular select
    vm.ddSelectSelected = {text: 'Select category:', value: 'other'};
    vm.ddSelectOptions = CATEGORY;

    vm.submitForm = function () {
      vm.newNote.category = vm.ddSelectSelected.value;

      Notes.saveNote(vm.newNote);

      $state.go('app.dashboard');
    };
    vm.cancelForm = function () { $ionicHistory.goBack(); };
  });
})();

