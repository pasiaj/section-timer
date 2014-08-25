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
'app controller goes here';
'common service goes here';
(function(){
  'use strict';

  angular.module('timer2-main',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main/main.html',
          controller: 'MainCtrl'
        });
    })
    .controller('MainCtrl', function ($scope) {
      $scope.to = 0;
      $scope.playing = false;

      var items = [
    {name: 'Ajastin', duration: 3000, startTime: 0},
    {name: 'jolla Jukka', duration: 2000, startTime: 9000},
    {name: 'voi ajoittaa', duration: 1000, startTime: 14000},
    {name: 'eri otosten kestoja', duration: 3000, startTime: 24000},
    {name: 'musavideoa kuvatessa.', duration: 5000, startTime: 29000},
    {name: 'Ipsum Officia Non', duration: 10000, startTime: 38000},
    {name: 'In Laboris Nostrud', duration: 6000, startTime: 48000},
    {name: 'Ad Laboris Excepturi', duration: 4000, startTime: 54000},
    {name: 'Sint Optio Nostrud', duration: 1500, startTime: 64000},
    {name: 'Ut Non Laboris', duration: 3000, startTime: 70000}
      ];

      if (localStorage['ajastukset'] !== undefined && localStorage.length > 0){
        console.log( localStorage['ajastukset'] );
        items = JSON.parse(localStorage['ajastukset']);
      }

      $scope.items = items;

      $scope.default = $scope.items[0];
      $scope.current = $scope.items[0];

      $scope.select = function(item) {
      	var index = $scope.items.indexOf(item);
	    $scope.current = $scope.items[index];
	    $scope.start();
      };

      $scope.saveEdit = function(){
        localStorage['ajastukset'] = JSON.stringify($scope.items);
      };

      $scope.stop = function(){

      	clearTimeout($scope.to);
      	$scope.playing = false;
      	$scope.stopAnimation();
      };

      $scope.start = function(){
      	console.log('Starting current', $scope.current);

      	$scope.playing = true;
      	$scope.runIteration();
      };

      $scope.startStop = function(){
      	if ($scope.playing){
      		$scope.stop();
      	} else {
      		$scope.start();
      	}
      };

      $scope.runIteration = function(){
      	clearTimeout($scope.to);

      	$scope.to = setTimeout(
			$scope.next,
      		$scope.current.duration
      	);
      	$scope.startAnimation($scope.current.duration);
      };

      $scope.next = function(){
      	console.log('Running next');
      	var index = 1 + $scope.items.indexOf( $scope.current );
      	console.log(index);
      	index = (index < $scope.items.length) ? index : 0;
      	console.log(index);

      	$scope.$apply(function(){
		      	$scope.current = $scope.items[ index ];
      		});

      	$scope.runIteration();
      };

      $scope.stopAnimation = function(){
      	var el = document.querySelector('.big');
      	el.style.transition = 'none';
      	el.style.maxHeight = '0%';
      };

      $scope.startAnimation = function(time){
      	var el = document.querySelector('.big');
      	el.style.transition = 'none';
      	el.style.maxHeight = '100%';
      	var h = el.offsetHeight;
      	el.style.transition = 'all linear ' + time/1000 + 's';
      	el.style.maxHeight = '0%';
      };

      $scope.restart = function(){
      	console.log('jee');
      };

    });

})();