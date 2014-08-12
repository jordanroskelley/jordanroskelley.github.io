# The Web Stack
### (or how the internet works)

---

# What does a browser do?

* Fetches resources
* Parses and renders HTML and CSS
* Provides an engine to run JavaScript
* Other stuff

---

# Fetches Resources

* HTML
	* Defines the layout of a page
	* [Example][link1]
* CSS
	* Help lay out and style the page
	* [Example][link2]
* JavaScript
	* Handle action on the page
	* [Example][link3]
* Images, audio, video, etc

---

# Parses and renders HTML and CSS

* As the files are downloaded, it begin processing things
* This is why you will occasionally see partial images being loaded after a page is laid out
* This is a multi-step process
* Because this is interpreted instead of compiled, things sometimes look different in different browsers

---

# Provides an engine to run JavaScript

* What does this mean?
	* JavaScript is delivered as a text file, this means there is no compiled code
	* The engine has to parse the code once it loads the file, and start processing it then
* Once parsed, it can respond to user input or other events

---

# What kind of "other stuff" do browsers do?

* It sets up a secure connection when you visit a secure site, like your bank
* It handles saving that cat picture to your hard drive
* Performs DNS lookups for websites you want to visit
	* It turns http://www.google.com into 75.125.129.105

---

# The anatomy of a URL

<img src='/assets/2014-08-12/url.png' class='img-responsive' />

* URL means Uniform Resource Locator
* URL Encoding
	* `%20` is a space
	* `%2B` is a plus
	* etc

---

# Hypertext Transport Protocol

* Web traffic usually runs on one of two ports
	* 80 - unencrypted traffic
	* 443 - encrypted traffic (https)
* HTTP is a request/response protocol
	* HTTP is stateless. Unless you are sending some sort of cookie, the server has no idea what you asked for last time, or what page you are currently looking at
* Status Codes
	* 200 is OK
	* 404 is Not Found
	* 500 is Server Error

---

# Types of HTTP requests

* GET
	* The most common
	* When you type in a URL in your browser, it makes a GET request
	* It is like a postcard, not much room to send data
* POST
	* Containes an enclosed "entity"
	* Like a letter inside an envelope
* Others
	* PUT, DELETE, HEAD, TRACE, OPTIONS, CONNECT, PATCH
* So, what does a request look like?
	* [Example][link4]

---

# Why do we need server languages? (PHP, Java, etc)

* If a user wants a page with dynamic content, we have to talk to databases, etc
* The server language does this and builds HTML/CSS/JavaScript pages on the fly
* Different languages do this differently and some are more complex than others
* The output of server-side code is just some form of HTML, CSS, JavaScript or images/video/sound, the same as "static" pages

---

<img src='/assets/2014-08-12/diagram.png' class='img-responsive' />

---

# What about other kinds of web content?

There are many other kinds of web content that don't specifically use HTTP. Flash, Java Applets, Silverlight Applets, etc all require some kind of plug-in to run the content. They may continue to use HTTP, but it is now separate from your browser.

---

# Other things you may hear

* Is JavaScript part of or similar to Java?
	* They are different languages
	* Java is compiled, JavaScript is interpreted
	* The JRE (Java Runtime Envrionment) must be installed outside of the browser to run Java
* What about jQuery?
	* jQuery is a library that simplifies JavaScript development

---

# Some good links

* [How browsers work][link5] (warning, long and technical)
* [Rendering a web page – step by step][link6]

---

#### Sources

[http://www.csszengarden.com/zengarden-sample.html][link1]

[http://www.csszengarden.com/zengarden-sample.css][link2]

[http://code.jquery.com/jquery-2.1.1.js][link3]

[http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Example_session][link4]

[http://taligarsiel.com/Projects/howbrowserswork1.htm][link5]

[http://friendlybit.com/css/rendering-a-web-page-step-by-step/][link6]

[link1]: http://www.csszengarden.com/zengarden-sample.html
[link2]: http://www.csszengarden.com/zengarden-sample.css
[link3]: http://code.jquery.com/jquery-2.1.1.js
[link4]: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Example_session
[link5]: http://taligarsiel.com/Projects/howbrowserswork1.htm
[link6]: http://friendlybit.com/css/rendering-a-web-page-step-by-step/