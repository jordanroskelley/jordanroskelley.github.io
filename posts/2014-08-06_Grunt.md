# Grunt

![Grunt][img1]

---

### What is it?

[The Docs][link1]

Grunt bills itself as a JavaScript task runner. This means that you can create tasks, which will do things for you. To run Grunt, you will need to have node.js installed first. 

To get grunt to do anything cool, you will need to create a Gruntfile.js file, which will have tasks that can be performed. There are lots of things that can be done in a Gruntfile, but here are things I've used it for:

* clean - deletes everything in a folder, useful for when you want to clean up your debug folder
* concat - concatenate files together, useful for reducing the number of HTTP requests the client has to make
* connect - run a local web server
* copy - copies files from one directory to another, helpful for creating debug and release builds
* htmlmin - minify html, this makes debugging a pain, but reduces filesize for release
* imagemin - compresses images without reducing image quality, saves more bandwidth
* sass - compiles scss files into real css that the browser understands
* uglify - takes JavaScript and minifies it by removing whitespace, changing variable names, etc
* watch - grunt will watch files for changes, and if a file changes, it can run tasks.
	* This one is very powerful. This means that if you change your sass file, watch can recompile your sass, copy it to your debug folder, and your grunt server can reload your page. This one blew my mind!
	* There is a [Chrome plugin][link3] that helps with this

---

### Getting it set up

Once you have node and npm installed and running, getting grunt is pretty easy, from a command line just run

```
npm install -g grunt-cli
```

The only difference between this and the other npm commands we have run is the `-g`. This just says to install it globally, so it is available right from the command line.

Type `grunt --version` to check that it has been installed.

---

### Grunt Basics

So... I have a confession to make. I'm lazy. I was going to type out a bunch of examples, but then I remembered, someone already did an incredible job of it.

Go read this article, Chris Coyier does a great job explaining Grunt. It's where I learned nearly everything I know about it.

#### [Grunt for People Who Think Things Like Grunt are Weird and Hard][link2]

If that didn't quite do it for you, here is another one

#### [Writing an Awesome Build Script with Grunt][link4]

---

### Example Gruntfile.js

Here is a Gruntfile I created for one of my projects. It's not perfect, but I tried to comment it and make it make sense.

```
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/**************************************************************************
		* Clean copied to folders
		***************************************************************************/
		clean: {
			release: { src: [ 'release' ] },
			debug: { src: [ 'debug' ] },
			temp: { src: [ 'temp' ] }
		},
		/**************************************************************************
		 * Concatenate javascript files
		 **************************************************************************/
		concat: {
			releaseMine: {
				src:[
					'source/js/app.js',
					'source/js/services.js',
					'source/js/controllers.js',
					'source/js/main.js'
				],
				dest:'temp/js/production.js'
			},
			releaseVendor: {
				src:[
					'source/js/vendor/jquery-1.11.1.js',
					'source/js/vendor/angular.js',
					'source/js/vendor/angular-route.js',
					'source/js/vendor/angular-messages.js',
					'source/js/vendor/angular-file-upload.js',
					'source/js/vendor/ui-bootstrap-tpls-0.11.0.js',
					'source/js/vendor/bootstrap.js',
					'source/js/vendor/toastr.js',
					'source/js/vendor/moment.js',
					'source/js/vendor/jquery.Jcrop.js'
				],
				dest:'temp/js/vendor.js'
			},
			debugMine: {
				src:[
					'source/js/app.js',
					'source/js/services.js',
					'source/js/controllers.js',
					'source/js/main.js',
					'source/js/photo.js'
				],
				dest:'debug/js/production.js'
			},
			debugVendor: {
				src:[
					'source/js/vendor/jquery-1.11.1.js',
					'source/js/vendor/angular.js',
					'source/js/vendor/angular-route.js',
					'source/js/vendor/angular-messages.js',
					'source/js/vendor/angular-file-upload.js',
					'source/js/vendor/ui-bootstrap-tpls-0.11.0.js',
					'source/js/vendor/bootstrap.js',
					'source/js/vendor/toastr.js',
					'source/js/vendor/moment.js',
					'source/js/vendor/jquery.Jcrop.js'
				],
				dest:'debug/js/vendor.js'
			}
		},
		/**************************************************************************
		* Run a static server
		***************************************************************************/
		connect: {
			server: {
				options: {
					port: 8000,
					base: 'debug'
				}
			}
		},
		/**************************************************************************
		* Copy files for builds
		***************************************************************************/
		copy: {
			release: {
				cwd: 'source',
				src: [ '*', 'img/*', 'partials/*' ],
				dest: 'release',
				expand: true
			},
			debug: {
				cwd: 'source',
				//notice: we need sass here, because we not only need the compiled sass, but the raw sass for source mapping
				src: [ '*', 'img/*', 'partials/*', 'css/sass/**' ],
				dest: 'debug',
				expand: true
			}
		},
		/**************************************************************************
		* Minify HTML
		***************************************************************************/
		htmlmin: {
			release: {
				options: {
					removeComments: false,
					collapseWhitespace: false
				},
				files: [{
						expand: true,
						cwd: 'source',
						src: ['*.html'],
						dest: 'release/',
				}]
			}
		},
		/**************************************************************************
		* Minify images in place
		***************************************************************************/
		imagemin: {
			task: {
				files: [{
					expand: true,
					src: ['source/img/*.{png,gif,jpeg,jpg}'],
					dest: '.',
				}]
			}
		},
		/**************************************************************************
		* Compile SASS
		***************************************************************************/
		sass: {
			release: {
				options: { style: 'compressed' },
				files: {
					'release/css/styles.min.css':'source/css/sass/styles.scss',
				}
			},
			debug: {
				options: {
					style: 'compressed',
					sourcemap: true
				},
				files: {
					//notice, we copy it first, then compile in place, that way the map is right, and we have the sass available to debug
					'debug/css/styles.min.css':'source/css/sass/styles.scss',
				}
			}
		},
		/**************************************************************************
		* Minify JavaScript files
		***************************************************************************/
		uglify: {
			releaseMine: {
				src:'temp/js/production.js',
				dest:'release/js/production.min.js'
			},
			releaseVendor: {
				src:'temp/js/vendor.js',
				dest:'release/js/vendor.min.js'
			},
			debugMine: {
				options: { sourceMap: true },
				src:'debug/js/production.js',
				dest:'debug/js/production.min.js'
			},
			debugVendor: {
				options: { sourceMap: true },
				src:'debug/js/vendor.js',
				dest:'debug/js/vendor.min.js'
			}
		},
		/**************************************************************************
		* Watch files for changes
		***************************************************************************/
		watch: {
			css: {
				//this doesn't work, it recompiles from debug to debug
				files: ['source/css/sass/*.scss'],
				tasks: ['sass:debug']
			},
			html: {
				files: ['source/index.html', 'source/partials/*.html'],
				tasks: ['copy:debug']
			},
			image: {
				files: ['source/img/*'],
				tasks: ['imagemin']
			},
			myscripts: {
				files: ['source/js/*.js'],
				tasks: ['concat:debugMine', 'uglify:debugMine']
			},
			options: {
				livereload: true,
				spawn: false
			},
			vendorscripts: {
				files: ['source/js/vendor/*.js'],
				tasks: ['concat:debugVendor', 'uglify:debugVendor']
			}
		}
		/* Close comments *********************************************************/
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('debug',
						'Creates a test-able folder called debug',
						[
							'clean:debug',
							'concat:debugMine',
							'concat:debugVendor',
							'uglify:debugMine',
							'uglify:debugVendor',
							'imagemin',
							'copy:debug',
							'sass:debug',
							'watch',
							'clean:temp'
							]);
	grunt.registerTask('release',
						'Creates a deploy-able folder called release',
						[
							'clean:release',
							'concat:releaseMine',
							'concat:releaseVendor',
							'uglify:releaseMine',
							'uglify:releaseVendor',
							'imagemin',
							'copy:release',
							'sass:release',
							'htmlmin:release',
							'clean:temp'
							]);
};

```

---

#### Sources

[http://developer.android.com/tools/help/adb.html][link1]

[http://24ways.org/2013/grunt-is-not-weird-and-hard/][link2]

[https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei][link3]

[http://www.sitepoint.com/writing-awesome-build-script-grunt/][link4]

[link1]: http://gruntjs.com/
[link2]: http://24ways.org/2013/grunt-is-not-weird-and-hard/
[link3]: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
[link4]: http://www.sitepoint.com/writing-awesome-build-script-grunt/

[img1]: /assets/2014-08-06/grunt-logo.png