/* global angular: false, toastr: false, BASE_URL: false */
'use strict';

angular.module('myApp.controllers', [])
/************************************************************
 * Open Controllers
 ************************************************************/
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.posts = [];
	
	/***************************************** Controller Setup */
	$scope.isLoading = true;
	var url = '/posts.json';
	$http.get(url)
		.success(function(data) {
			$scope.posts = data.posts;
		})
		.error(function(data, status) {
			console.log('error');
		})
		.finally(function() {
			$scope.isLoading = false;
		});

	/************************************* Controller Functions */
}])
.controller('PostCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
	/***************************************** Controller Setup */
	$scope.isLoading = true;
	var url = '/posts/' + $routeParams.postUrl;
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
