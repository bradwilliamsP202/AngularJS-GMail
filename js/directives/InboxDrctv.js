/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('EmailApp')
  .directive('inbox', function InboxDrctv () {
    'use strict';

    return {
      //can be declared as an Element or Attribute
      restrict: 'EA',
      // will replace <inbox></inbox>
      replace: true,
      //inherits the parent scope and keeps sibling directives more independent
      scope: true,
      templateUrl: "js/directives/inbox.tmpl.html",
      //creates a namespace for our Controller when instantiated
      controllerAs: 'inbox',

      //inject dependencies and bind logic
      controller: function (InboxFactory) {
        this.messages = [];

        this.goToMessage = function (id) {
          InboxFactory.goToMessage(id);
        };
        
        this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
        };
        
        InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = InboxFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });