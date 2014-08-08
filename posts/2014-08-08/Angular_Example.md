# Angular.js Example

Angular has an [official tutorial][link1]. At some point, I'd recommend going through it, it explains a lot of concepts that I won't cover here. The downside to their tutorial is that is it long and pretty involved.

---

### Step 0
#### Project Setup

Here is how I set up my project folders:

```
MyProject
├── js
│   ├── vendor
│   │   ├── angular.min.js
│   │   └── jquery-2.1.1.min.js
│   ├── app.js
│   └── controllers.js
└── index.html
```

[Download Zip][link5]

-or-

Create the folders, then copy the angular and jquery libraries into it. We'll add the rest in this example.

---

### Step 1
#### index.html template

Start by adding the index.html from our intro post:

```
<html>
	<head>
		<title>Angular Step 01</title>
	</head>
	<body>
		<p>So... Angular?</p>
		<script src='js/vendor/jquery-2.1.1.min.js'></script>
		<script src='js/vendor/angular.min.js'></script>
	</body>
</html>
```

[Example Here][link2]

---

### Step 2
#### Add controllers.js and app.js

So far it does nothing, just says `So... Angular?`.

* First, we'll need to make an app. In our html, we'll need to add an ng-app. This tells Angular that we want this page to be an 'app', so Angular will work with it.
* Then, reference the app.js and controllers.js files in your html (see below).

```
<html ng-app='myApp'>
	<head>
		<title>Angular Step 02</title>
	</head>
	<body ng-controller='HomeCtrl'>
		<p>So... Angular?</p>

		<script src='/js/vendor/jquery-2.1.1.min.js'></script>
		<script src='/js/vendor/angular.min.js'></script>
		<script src='js/app.js'></script>
		<script src='js/controllers.js'></script>
	</body>
</html>
```

Then, add the following to our app.js file:

```
angular
	.module('myApp', ['myApp.controllers']);
```

And in our controllers.js file:

```
angular
	.module('myApp.controllers', [])
	.controller('HomeCtrl', ['$scope', function ($scope) {
		$scope.name = '[PLACEHOLDER]';
	}]);
```

[Example Here][link3]

What just happened?

* We made our index page an app, using `ng-app='myApp'`
* We made our body a controller with `ng-controller='HomeCtrl'`
* We added our app and controller files... but didn't use them, so everything looks the same.

---

### Step 3
#### Tie it all together

OK, now we have all the Legos, lets build something. Update your index.html like so:

```
<html ng-app='myApp'>
	<head>
		<title>Angular Step 03</title>
	</head>
	<body ng-controller='HomeCtrl'>
		<input type='text' ng-model='name' />

		<h2>Hello {{ name }}, I think this is cool!</h2>

		<script src='/js/vendor/jquery-2.1.1.min.js'></script>
		<script src='/js/vendor/angular.min.js'></script>
		<script src='js/app.js'></script>
		<script src='js/controllers.js'></script>
	</body>
</html>
```

[Example Here][link4]

* We created an input box (to enter text), which was bound to the name variable in the HomeCtrl controller.
	* If you look back in the controllers.js, we define the HomeCtrl, and use this `$scope` thing to set up a `name` variable, prefilled with `[PLACEHOLDER]`
	* This `$scope` means that things in it are "Angular aware". This means that they are part of the model, and are automatically bound to the view.
* Then, we used that name variable inside our h2 element, to say hello.
* If you entered text, you'll notice that both names changed at the same time. This not only makes for a nice demo, but it also shows that the model is the source of data. 
	* This is really important. Historically in web pages, the view is also the model, and your JavaScript has to look at the view to get the current data. This leads to all sorts of hacks and jumping through hoops to get the right data.

---

### Closing notes

* There is so much more to Angular than this. This just shows the model and the view interacting.
* For now, having app.js and controllers.js in separate files may seem like overkill (and for this example, it probably is), but it helps keep things clean in the future.
* For lots more Angular style advice, I'd recommend eventually reading this (fairly long) [article][link6]. For now, it's probably a little deep.

---

#### Sources

[https://docs.angularjs.org/tutorial][link1]

[https://github.com/johnpapa/angularjs-styleguide][link6]

[link1]: https://docs.angularjs.org/tutorial
[link2]: /examples/angular/step1/
[link3]: /examples/angular/step2/
[link4]: /examples/angular/step3/
[link5]: /examples/angular/step0/MyProject.zip
[link6]: https://github.com/johnpapa/angularjs-styleguide