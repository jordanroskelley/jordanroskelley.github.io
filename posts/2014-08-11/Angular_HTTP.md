# Angular HTTP

---

### Angular and Http

So far, all the data has been hard-coded into the model, and this is Ok, in Angular the model is the keeper of the data. But to have a useful "app", we want to download data and put it right into the model. This will give us something to bind the view to. As an example, I'm going to make you do what I already did to build this blog thingy.

First, try this out. [Click this link][link1] and look at the data that powers this blog. It's not too pretty, but you can see that there is an array of posts at the top, and at the bottom, an array of alltags. In each array, we have some metadata about the post, including the relative URL where to find the post file.

So the way this blog works, you go to the main page, it downloads this posts.json file, puts the arrays into the model, and then builds the view based on that model.

---

### Make it so

* Remove our dummy partials, view1 and view2
* Add a new partial, posts.html
	* In there, just put something like this: `<h1>Posts go here</h1>`
* Edit your app.js. Your $routeProvider used to look like this:

```
	$routeProvider
		.when('/view1', { templateUrl: 'partials/view1.html', controller: 'View1Ctrl' })
		.when('/view2', { templateUrl: 'partials/view2.html', controller: 'View2Ctrl' })
		.otherwise({ redirectTo: '/view1' });
```
For now, there will only be one route, so change it to look like this:
```
	$routeProvider
		.when('/', { templateUrl: 'partials/posts.html', controller: 'PostsCtrl' })
		.otherwise({ redirectTo: '/' });
```

---

### Add posts folder and file

Create a new folder, posts, as well as a new file, posts.json (or just right click->save as... my link from above)

```
MyProject
├── js
│   ├── vendor
│   │   ├── angular.min.js
│   │   ├── angular-route.min.js
│   │   └── jquery-2.1.1.min.js
│   ├── app.js
│   └── controllers.js
├── partials
│   └── posts.html
├── posts
│   └── posts.json
└── index.html
```

---

### The Posts Controller

In your controllers.js file, add a new controller:

```
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
}])
```

What is happening?

* Add controller named PostsCtrl
* We need to pass it some stuff, $scope and $http
	* $scope is basically our model. We can put stuff into it, bind views to it, etc
	* $http lets us make simple http requests
* We set up the url that we will be calling
* We make a placeholder for the posts array
* Then, we make the call

[Example Here][link2]

---

### Wrap up (for now)

If you open up your browser developer tools (usually right-click->inspect element), in your console there, you should be able to see the data (our posts array). In the next post, we will hook that array up to the view.

---

#### Sources

[http://jordanroskelley.github.io/posts/posts.json][link1]

[link1]: http://jordanroskelley.github.io/posts/posts.json
[link2]: /examples/angular/step5