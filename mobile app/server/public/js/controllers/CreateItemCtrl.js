angular.module('app.controllers')

.controller('CreateItemCtrl', function ($ionicHistory, $scope, $state, $rootScope, CATEGORY, Notes) {
  var vm = this;
  // Update active page title. This hook is uses because ionic cache controllers.
  $scope.$on('$ionicView.beforeEnter', function () { $rootScope.activePage = 'Add new item'; });

  // Default values of angular select
  vm.ddSelectSelected = {text: 'Select category:', value: 'other'};
  vm.newNote = {};
  vm.ddSelectOptions = CATEGORY;

  vm.submitForm = submitForm;
  vm.cancelForm = cancelForm;

  function submitForm() {
    vm.newNote.category = vm.ddSelectSelected.value;
    vm.newNote.user = $rootScope.user;

    Notes.saveNote(vm.newNote);
    // Clear form's input
    vm.newNote = {};

    $state.go('app.dashboard');
  }
  function cancelForm() {
    $state.go('app.dashboard');
  }
});

