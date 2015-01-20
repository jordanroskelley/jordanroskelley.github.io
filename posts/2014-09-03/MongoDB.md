## Mongo Intro
#### 9/3/2014

---

So I recently started playing with MongoDB on my Mac. This is just my notes to get some things running.

This all started when I read this article:

http://www.yearofmoo.com/2014/09/taming-forms-in-angularjs-1-3.html

Which linked here for the source code:

https://github.com/yearofmoo-articles/AngularJS-Forms-Article

And I wanted to try it out... but it used MongoDB, which I had never used before, so here we go.

Setup:
* Make sure you have node.js already installed (see earlier article)
* Install brew
`ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"`
* Update brew
`brew update`
* Install MongoDB
`brew install mongodb`
* (Possibly) create folder
`sudo mkdir /data/db`
* Start mongo (note, don't use sudo on real servers, figure this out...)
`sudo mongod`
* Then, in a new terminal tab, you can connect to that database
`mongo`
* Say you want to use the 'schema' `yom-forms`
`use yom-forms`
* Cool, now your server is up and running...
* Then, in yet another tab, go to the project directory and run `sudo npm install` to get all the libraries used
* 






http://brew.sh/