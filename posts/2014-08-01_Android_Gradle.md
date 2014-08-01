# The Android Build Process and Gradle

---

### What is Gradle?

[Gradle][link4] automates building your project. There is a lot that goes into compiling an app, and Gradles handles this for you. If you've used other build systems, it is similar to Maven or Ant. Most of the time, you won't mess with it too much, but when you want to, it can be a little overwhelming to figure out what is going on.

---

### The make up of a build file

---

### How do I add libraries to my project?

You could download a jar, put it in a folder, link it, etc, but that is really annoying, plus you then have to check that jar into source control :(

One of the steps in the Gradle build process is dependency resolution. This means that if you add a dependency, Gradle will try to go get whatever you say you depend on. This is pretty sweet. That means that if I want to add a library like [Square's Retrofit][link5] (a great library that handles HTTP connections for you), here is what you do

---

### Customizing the build process

Lets say you have two servers, a live server and a development server. And lets say you don't want to manually change the URL of that server in your app every time you switch from live to dev.

---

#### Sources

[http://gradleplease.appspot.com/][link1]

[http://search.maven.org/][link2]

[https://bintray.com/bintray/jcenter][link3]

[http://www.gradle.org/][link4]

[http://square.github.io/retrofit/][link5]

---

[link1]: http://gradleplease.appspot.com/
[link2]: http://search.maven.org/
[link3]: https://bintray.com/bintray/jcenter
[link4]: http://www.gradle.org/
[link5]: http://square.github.io/retrofit/