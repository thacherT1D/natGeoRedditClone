import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bootstrap from 'bootstrap';

angular
  .module('NatGeoReddit', [uiRouter])
  .config(['$stateProvider', ($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'main.html',
        controller: 'MainCtrl'
      })
  }]);
