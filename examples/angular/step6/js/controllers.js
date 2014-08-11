angular.module('myApp.controllers', [])

.controller('HomeCtrl', ['$scope', function ($scope) {
	$scope.name = 'username';
}])

.controller('PostsCtrl', ['$scope', '$http', function ($scope, $http) {
	//the url where to get the posts.json file from
	var url = '/posts/posts.json';

	$scope.posts = [];
	$http.get(url)
		.success(function(data) {
			$scope.posts = data.posts;
			console.log($scope.posts);
		})
		.error(function(data, status) {
			console.log('error');
		});
}]);