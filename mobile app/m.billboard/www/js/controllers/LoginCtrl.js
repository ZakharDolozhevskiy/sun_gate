angular.module('app.controllers')

.controller('LoginCtrl', function($ionicHistory, $ionicPopup, $scope, $state, $rootScope, $timeout, $http, URL) {
  var vm = this;

  vm.showRegistration = false;
  vm.cancelForm = cancelForm;
  vm.tryToLogIn = tryToLogIn;
  vm.sendRegistrForm = sendRegistrForm;

  // Update active page title. This hook is uses because ionic cache controllers.
  $scope.$on('$ionicView.beforeEnter', function() { $rootScope.activePage = 'Login / Register'; });

  function tryToLogIn() {
    $http.post(URL + '/login', {
      password: vm.psw,
      username: vm.login
    })
      .success(function(username) {
        $state.go('app.accountDetails', { username: username});
        $rootScope.user = username;
      })
      .error(function(msg) { showErrorMsg(msg, 'Please verify your credential'); });

    clearForm();
  }

  function sendRegistrForm() {
    $http.post(URL + '/register', {
      password: vm.psw,
      contacts: vm.phone,
      username: vm.login
    })

      .success(function(successMsg) {
        var popUpOpt = {
          title: 'You have been registered',
          template: successMsg,
          okType: 'button-balanced'
        };

        showPopUp(popUpOpt).then(function() {
          vm.showRigistration = !vm.showRigistration;
          clearForm();
        });
      })

      .error(function(msg) { showErrorMsg(msg, 'Please choose another username'); });
  }

  function cancelForm() {
    $state.go('app.dashboard');
    $timeout(function() { vm.showRigistration = false; }, 500);
  }

  function clearForm() {
    vm.psw = '';
    vm.login = '';
    vm.phone = '';
    vm.fName = '';
    vm.lName = '';
  }

  function showPopUp(opt) { return $ionicPopup.alert(opt); }

  function showErrorMsg(text, btnTitle) {
    var popConfig = {
      title: 'Authorization Error',
      template: text,
      okType: 'button-assertive',
      okText: btnTitle
    };

    showPopUp(popConfig);
  }
});