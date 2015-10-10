angular.module('readingList')
.factory('list', [function(){
	var o = {
		list: [{
		title:'The Prince',
		author:'Niccolo Machiavelli',
		isbn: '0486272745',
		review: 'Learn the political nature of a cynical animal and destroy your enemies!',
		percent: 9,
		genres: {'non-fiction': true},
	},
	{
		title:'The Republic',
		author:'Plato',
		isbn:'1503379981',
		review:'This book holds the key to understanding the mysteries of life itself... Platonic forms!',
		percent:10,
		genres:{'non-fiction':true, 'poetry':true},
	}]
	};
	return o;
}]);