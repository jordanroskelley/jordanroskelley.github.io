# Markdown Examples
#### 8/1/2014

---

### Links
This is an [example link](http://http://daringfireball.net/projects/markdown/basics). It points to the real Markdown documentation.

This is an [example link (hover me)](http://example.com/ "With a hover Title"). It just goes to Google :)

If you just want to display the link inline, use <http://example.com/>

This also works with email addresses <a@b.com>

---

### Reference Links
You can have a link to a [source][1] and it will set it up for you.

The link descriptor is also [optional][], but can get confusing.

In fact, this will work over your whole document, and can even use text for the link descriptor [document][link3].

[1]: http://google.com/			"Google 1"
[optional]: http://google.com/	"Google 2"
[link3]: http://google.com/		"Google 3"

---

### Images
You can put images into a page like this:

![Mega Man](/assets/2014-08-01/megaman.jpg "Mega Man")

---

### Reference Images
But you can also put images in using syntax like reference links above:

![Mega Man][img1]

[img1]: /assets/2014-08-01/megaman.jpg "Mega Man"

---

First Level Header
==================


Second Level Header
-------------------

# H1
## H2
### H3
#### H4
##### H5
###### H6

####             Spacing is superfluous, as are closing \#s #

---

### Plain Text
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

### Unordered List
- This is how you make an unordered list
- It's pretty sweet
- And easy

---

### Ordered List
1. This is how you make a list
2. It's also pretty sweet
3. Other stuff

---

### Code

`//A single line of code`

---

### Multi-line Code
```
for(item in array) {
	//do stuff...
}
```

### Code and special characters
```
!
@
#
$
%
^
&
*
(
)
_
-
+
=
```

---

### Horizontal Rules

To create an `<hr>`

---

### Blockquote
> This is a blockquote.
> 
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote

---

### Text Style
This text is plain, notice, there must be an empty line in between for the next to be on a new line

*This text is italicized*

**This text is bold**

\*To get a raw star (non-bolded), use: \*

---

### Raw HTML

<p>You can also write raw html into a markdown file</p>
