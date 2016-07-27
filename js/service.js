(function () {
  'use strict'

  angular
    .module('shopCart')
    .factory('InventoryService', InventoryService);

  function MemberService($http, $q) {
    var members = [];
    var resolvedData = false;
    return {
      getMembers: function () {
        if(members.length == 0 && !resolvedData) {
          return $http.get('../members.json').then(function(result) {
            members = result.data;
            resolvedData = true;
            return members;
          });
        } else {
          return $q(function (resolve, reject) {
            resolve(members);
          });
        }
      }
    }
  }
})();
