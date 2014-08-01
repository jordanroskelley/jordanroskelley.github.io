/* global angular: false, window: false */
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
	$routeProvider.when('/', { templateUrl: 'partials/home.html', controller: 'HomeCtrl' });
	$routeProvider.when('/posts/:postUrl', { templateUrl: 'partials/post.html', controller: 'PostCtrl' });

	//DEFAULT ROUTE
	$routeProvider.otherwise({redirectTo: '/'});
}])
/************************************************************
 * Directives
 ************************************************************/
 .directive('markdown', function() {
	var converter = new Showdown.converter();
	return {
		restrict: 'E',
		link: function(scope, element, attrs) {
			var htmlText = converter.makeHtml(element.text());
			element.html(htmlText);
		}
	}
})
.directive('loading', function() {
	return {
		restrict: 'E',
		templateUrl: 'partials/loading.html'
	};
});
