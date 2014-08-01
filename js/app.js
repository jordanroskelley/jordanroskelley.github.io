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
.filter('unique', function () {
	return function (items, filterOn) {
		if (filterOn === false) {
			return items;
		}

		if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
			var hashCheck = {}, newItems = [];

			var extractValueToCompare = function (item) {
				if (angular.isObject(item) && angular.isString(filterOn)) {
					return item[filterOn];
				} else {
					return item;
				}
			};

			angular.forEach(items, function (item) {
				var valueToCheck, isDuplicate = false;

				for (var i = 0; i < newItems.length; i++) {
					if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
						isDuplicate = true;
						break;
					}
				}

				if (!isDuplicate) {
					newItems.push(item);
				}
			});

			items = newItems;
		}
		
		return items;
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
