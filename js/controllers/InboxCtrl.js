/**
 * Controller: InboxCtrl
 */

 //should have very little logic. Keep logic in model
angular.module('EmailApp') 
	.controller('InboxCtrl', function InboxCtrl( ) {

      'use strict';
      
       // initialize the title property to an array for the view to use
      this.title = "My Inbox";

    });