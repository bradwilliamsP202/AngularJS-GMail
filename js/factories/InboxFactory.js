/**
 * Factory: InboxFactory
 */

angular.module('EmailApp')
  /** 
  * creating a new factory with injection 
  *
  * $q - service that helps you run functions asynchronously, and use their return 
  * values (or exceptions) when they are done processing. 
  *
  * $http service to communicate with a server
  */
  
  .factory('InboxFactory', function InboxFactory ($q, $http, $location) {

    'use strict';

    /**
    * declaring exports helps with explicit internal naming which helps you see which
    * methods / variables are private or not (closures ftw).
    */
    var exports = {};

    exports.messages = [];

    exports.goToMessage = function(id) {
      //if ( angular.isNumber(id) ) {
        console.log('inbox/email/' + id)
        $location.path('inbox/email/' + id)
      //}
    }

    exports.deleteMessage = function (id, index) {
      this.messages.splice(index, 1);
    }

    exports.getMessages = function () {

      //used for signaling the successful or unsuccessful completion, as well as the status of the task
      //cartton explanation of promises - http://andyshora.com/promises-angularjs-explained-as-cartoon.html
      var deferred = $q.defer();
      return $http.get('json/emails.json')
        .success(function (data) {
          exports.messages = data;
          //resolves the derived promise with the value
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });