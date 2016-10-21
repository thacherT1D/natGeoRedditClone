import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bootstrap from 'bootstrap';

// import MainCtrl from './assets/controllers';

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
