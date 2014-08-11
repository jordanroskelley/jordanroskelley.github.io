/* global angular: false */
'use strict';

/************************************************************
 * Modules
 ************************************************************/
angular.module('myApp', [
	'ngRoute',
	'myApp.controllers'
])
/************************************************************
 * Filters
 ************************************************************/
.filter('ago', function() {
	return function(input) {
		var m = moment(input);

		if (m.isValid()){
			return m.fromNow();
		} else {
			return input;
		}
	};
})
.filter('markdown', function ($sce) {
    var converter = new Showdown.converter();
    return function (value) {
		var html = converter.makeHtml(value || '');
        return $sce.trustAsHtml(html);
    };
})
/************************************************************
 * Routes
 ************************************************************/
.config(['$routeProvider', function($routeProvider) {
	//OPEN ROUTES
	$routeProvider.when('/', { templateUrl: 'partials/posts.html', controller: 'PostsCtrl' });
	$routeProvider.when('/:postFolder/:postName', { templateUrl: 'partials/post.html', controller: 'PostCtrl' });

	//DEFAULT ROUTE
	$routeProvider.otherwise({redirectTo: '/'});
}])
/************************************************************
 * Directives
 ************************************************************/
.directive('loading', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/loading.html'
	};
});
