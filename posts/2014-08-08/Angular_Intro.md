# Angular.js Intro

![Angular][img1]

---

### What is Angular?

Angular is a library for building rich user experiences in the browser. It enables you to create experiences akin to native 'apps', but running in the browser. Angular is created by Google. With Angular, it allows you to add MVC to web programming. You bind your views to a model and manipulate that model in your controllers and your view updates itself. If this sounds confusing, don't worry, we'll have some examples in another post.

For now, don't worry about how to mix Angular into a project that uses server generated code (ASP.NET MVC, etc), that is a whole different step.

---

### How to get and include Angular

jQuery dependency

* Angular does not require jQuery (it includes what is called jqLite), but most people will probably use it anyway, so I'll include it here
* Downlaod jQuery [here][link2], Angular works with the latest version of jQuery (2.1.1 as of today).

Download Angular.js

* Download Angular.js [here][link1]. Again, I use the lateset version.

Here is an example index.html page

```
<html>
	<head>
		<title>Angular Test</title>
	</head>
	<body>
		<p>So... Angular?</p>
		<script src='js/vendor/jquery-2.1.1.min.js'></script>
		<script src='js/vendor/angular.min.js'></script>
	</body>
</html>
```

---

#### Sources

[https://angularjs.org/][link1]

[http://jquery.com/download/][link2]

[link1]: https://angularjs.org/
[link2]: http://jquery.com/download/

[img1]: /assets/2014-08-08/angular.png