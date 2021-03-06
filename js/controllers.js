/* global angular: false */
'use strict';

angular.module('myApp.controllers', [])
/************************************************************
 * Open Controllers
 ************************************************************/
.controller('PostsCtrl', ['$scope', '$http', function ($scope, $http) {
	/***************************************** Controller Setup */
	$scope.isLoading = true;
	var url = '/posts/posts.json';

	$scope.posts = [];
	$http.get(url)
		.success(function(data) {
			$scope.posts = data.posts;
			$scope.tags = data.alltags;
		})
		.error(function(data, status) {
			console.log('error');
		})
		.finally(function() {
			$scope.isLoading = false;
		});

	/************************************* Controller Functions */
	$scope.updateSearch = function(tag) {
		$scope.tagFilter = tag;
	};
}])
.controller('PostCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	/***************************************** Controller Setup */
	$scope.isLoading = true;
	var url = '/posts/' + $routeParams.postFolder + '/' + $routeParams.postName;

	$http.get(url)
		.success(function(data) {
			$scope.post = data;
		})
		.error(function(data, status) {
			console.log('error');
		})
		.finally(function() {
			$scope.isLoading = false;
		});

	/************************************* Controller Functions */
}]);
