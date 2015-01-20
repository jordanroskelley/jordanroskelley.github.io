# Bootstrap Intro
#### 8/6/2014

![Bootstrap][img1]

---

### What is it?

[The Docs][link1]

"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web." [-Bootstrap Home Page][link1]

Bootstrap eases the development of high quality websites, just like jQuery eases writing a lot of things in JavaScript. Bootstrap consists of JavaScript and CSS that are added to your page, and then classes that are added to your HTML. In fact, this page itself uses Bootstrap.

* Bootstrap was created by Twitter, specifically, Mark Otto and Jacob Thornton.
* Bootstrap is [open source][link2]
* Bootstrap is Mobile first and responsive. This means that mobile is the base case, and desktop 'things' are in addition to the mobile version.
* Bootstrap is not a magic bullet. It will help a lot, but you will still need to be smart about how you program things.
* Bootstrap uses a grid system to organize things on the page and plan line breaks.

---

### Installing/Adding

Go [download Bootstrap][link5]. Once downloaded, you will need to add it to your HTML, example below:

```
<!DOCTYPE html>
<html>
	<head>
		<link rel='stylesheet' href='css/vendor/bootstrap.min.css'>
	</head>
	<body>
		

		<!--THE REST OF YOUR PAGE GOES HERE...-->


		<!--Bootstrap requires jQuery-->
		<script src='js/vendor/jquery-2.1.1.min.js'></script>
		<script src='js/vendor/bootstrap.min.js'></script>
	</body>
</html>
```

---

### Grid System

If you've never used a grid system before, it can be a bit confusing at first. Basically, imagine your page being vertically divided into twelve slices. You can break up those twelve slices however you want. Things didn't really gel for me until I saw some pictures:

![Grid][img2]

Here is the grid

![Grid][img3]

Here are some sites, laid out using the grid

![Grid][img4]

![Grid][img5]

![Grid][img6]

If you want to play with an example to see how this works on a page, check out the [Bootstrap Example][link3]

So, for example, if you want something to take up a third of your page, then you would add a container, a row, and something that will take up columns:

```
<div class="container">
	<div class="row">
		<div class="col-sm-4">1/3 of page...</div>
		<div class="col-sm-4">1/3 of page...</div>
		<div class="col-sm-4">1/3 of page...</div>
	</div>
</div>
```

If you look at the class of the columns, you'll see `col-sm-4`. This means that it takes up 4 whatevers on a small screen... so, what's a screen?

---

### Screen Sizes

Bootstrap breaks screens up into four sizes:

* Phones - xs - <768px
* Tablets - sm - >=768px
* Desktops - md - >=992px
* Large Screens - lg - >= 1200px

This lets you customize things to take up more space when more is available, or stack when things get small.

---

### What else?

Beyond the above, the documentation is fairly easy to understand, and they have examples of nearly everything. [Check it out!][link4]

---

#### Sources

[http://getbootstrap.com/][link1]

[https://github.com/twbs/bootstrap][link2]

[http://getbootstrap.com/examples/grid/][link3]

[http://getbootstrap.com/css/][link4]

[http://getbootstrap.com/getting-started/][link5]

[link1]: http://getbootstrap.com/
[link2]: https://github.com/twbs/bootstrap
[link3]: http://getbootstrap.com/examples/grid/
[link4]: http://getbootstrap.com/css/
[link5]: http://getbootstrap.com/getting-started/

[img1]: /assets/2014-08-06/bootstrap.png
[img2]: /assets/2014-08-06/12grid.png
[img3]: /assets/2014-08-06/grid1.png
[img4]: /assets/2014-08-06/grid2.png
[img5]: /assets/2014-08-06/grid3.png
[img6]: /assets/2014-08-06/grid4.png