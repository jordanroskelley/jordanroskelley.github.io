# node.js
#### 8/6/2014

![nodejs][img1]

---

### What is it?

[The Docs][link2]

Node is JavaScript that isn't designed to run in a browser. It is based on Chrome's JavaScript runtime, V8. This means you can use JavaScript for lots of new things.

---

### Getting it set up

First, go to the [nodejs home page][link1] and click the big green install button. Follow the install instructions and you should be good to go. To test it out, open a command line and enter `node -v` which should print put the version you have installed.

---

### Simple Hello World

So... hello world?

Create a file called `hello.js`, and make it look like this:

```
console.log('Hello World!');
```

Then run `node hello.js` and that should spit out:

```
Hello World!
```

Ok, now what? well, for larger projects, you'll probably want to include some libraries. Going to each site and downloading libraries is a pain, plus if a new version comes out, you have to remember to check all the time... it becomes a pain.

---

### package.json file

[The Docs][link4]

A package.json file is kind of like the build.gradle file from Android, here are some things it will do for you:

* Describe the libraries you want
* Author
* Version
* Name
* etc

It's structure is pretty basic, here is an example:

```
{
	"author": { "name": "Jordan Roskelley" },
	"dependencies": {
		"bcrypt": "0.7.x",
		"body-parser": "1.2.x",
		"express": "4.2.x",
		"express-myconnection": "1.0.x",
		"moment": "2.7.x",
		"mysql": "2.3.x",
		"nodemailer": "0.7.x",
		"sql": "0.39.x",
		"sql-generate": "0.3.x"
	},
	"description": "An example of a package file",
	"devDependencies": {
		"grunt": "0.4.x",
		"grunt-contrib-clean": "^0.5.x",
		"grunt-contrib-concat": "^0.4.x",
		"grunt-contrib-connect": "^0.2.x",
		"grunt-contrib-copy": "^0.5.x",
		"grunt-contrib-htmlmin": "^0.3.0",
		"grunt-contrib-imagemin": "^0.7.1",
		"grunt-contrib-sass": "^0.7.3",
		"grunt-contrib-uglify": "^0.5.0",
		"grunt-contrib-watch": "^0.6.1"
	},
	"engines": {
		"node": ">= 0.6.0",
		"npm": ">= 1.0.0"
	},
	"license": "MIT",
	"main": "server.js",
	"name": "Example Package",
	"private": true,
	"version": "1.0.0"
}
```

Don't worry too much about the specifics, but this tells you the author, version, name, description, dependencies, etc. The dependencies and devDependencies are the most helpful for now.

Once you have your package.json built, you can just open a command prompt and move to that folder and type `npm install` to download all the libraries that you entered for your project.

This enables you to just check in your specific source code and this package.json file and then other people could just check it out, run `npm install`, then they are ready to go. This is pretty sweet.

---

### Now what?

Now that you have node installed and running, you can dive into a whole world of crazy tools

* Express/Connect for running an HTTP server
* Grunt for running tasks
* Connect to databases (RDBMS or NoSQL)
* Send email with nodemailer

---

#### Sources

[http://nodejs.org/][link1]

[http://nodejs.org/documentation/][link2]

[http://code.google.com/p/v8/][link3]

[https://www.npmjs.org/doc/files/package.json.html][link4]

[link1]: http://nodejs.org/
[link2]: http://nodejs.org/documentation/
[link3]: http://code.google.com/p/v8/
[link4]: https://www.npmjs.org/doc/files/package.json.html

[img1]: /assets/2014-08-06/nodejs.png