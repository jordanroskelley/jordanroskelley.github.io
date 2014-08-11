angular
/************************************************************
 * Set up Modules
 ************************************************************/
.module('myApp', ['ngRoute', 'myApp.controllers'])
/************************************************************
 * Routes
 ************************************************************/
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', { templateUrl: 'partials/posts.html', controller: 'PostsCtrl' })
		.otherwise({ redirectTo: '/' });
}]);