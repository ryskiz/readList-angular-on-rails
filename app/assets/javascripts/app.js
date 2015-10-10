angular.module('readingList', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'templates'])
.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'home/_home.html',
			controller: 'ReadingList'
		});

		$urlRouterProvider.otherwise('home');
	}]);