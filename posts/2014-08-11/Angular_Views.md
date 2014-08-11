# Angular Views

---

### Views

When we left off, we had the data, now we need to fill out the view with the data.

We just need to edit our posts.html partial and tell it what to draw. I had you put some placeholder in there, replace that with the following:

```
<h2>Posts</h2>
<div ng-repeat='post in posts'>
	{{post.title}}
	<br>
	{{post.author}}
	<br>
	{{post.created}}
	<br>
	{{post.file}}
	<hr>
</div>
```
And that's about it. It's not pretty, but you can do whatever you want with it.

[Example Here][link1]

---

#### Sources


[link1]: /examples/angular/step6