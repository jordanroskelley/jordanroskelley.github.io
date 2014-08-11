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
		/******
		* Set up Routes:
		* .when() = called to determine routes
		* '/view1' = when we see this route, then
		* templateUrl: 'partials/view1.html' = where to find the html view
		* controller: 'View1Ctrl' = the controller to use
		*******/
		.when('/view1', { templateUrl: 'partials/view1.html', controller: 'View1Ctrl' })
		.when('/view2', { templateUrl: 'partials/view2.html', controller: 'View2Ctrl' })
		.otherwise({ redirectTo: '/view1' });
}]);