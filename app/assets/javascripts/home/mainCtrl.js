angular.module('readingList')
.controller('ReadingList', ['$scope', 'list', function($scope, list){
	$scope.books = list.list;
	$scope.genres = ['fable', 'fantasy', 'fiction', 'horror', 'humor', 'mystery', 'non-fiction', 'poetry'];
	$scope.showForm = false;
	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;
	$scope.book = {genres:{}};
	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value/$scope.max);
	};

	$scope.ratingStates = [
	{stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'}
	];

	$scope.addReview = function(form){
		$scope.books.push($scope.book)
		$scope.book = {genres:{}}
		form.$setPristine();
	}
	}]);