(function(){
	'use strict';
	
	angular.module('timer2', [ 'ngRoute','timer2-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();