# Gradle and the Android Build Process

![Gradle][img2]

---

### What is Gradle?

[Gradle][link4] automates building your project. There is a lot that goes into compiling an app, and Gradles handles this for you. If you've used other build systems, it is similar to Maven or Ant. Most of the time, you won't mess with it too much, but when you want to, it can be a little overwhelming to figure out what is going on.

---

### The make up of a build

There are several files involved in the build process. One thing to note, all the below should be checked into source control. I will try to explain them here (to the best of my limited knowledge). The files/folders are:

1. gradlew (Mac) or gradlew.bat (Windows) - part of what is called the 'gradle wrapper' its purpose is to make sure the gradle build process is working properly on your machine. It checks to make sure you have Java set up properly.
2. The gradle folder - contains the actual gradle-wrapper.jar and this (along with its gradle-wrapper.properties file) which will download gradle if you don't have it. This means you may have several instances of gradle on your machine at the same time, but this is ok, it is fairly light weight and shouldn't be checked into source control.
3. build.gradle (in outermost folder) - mostly just sets up the repository where to get libraries from (more on that later).
4. settings.gradle - where the build process begins. It says to include the app folders gradle file in addition to the default in the root build.gradle file.
5. build.gradle (in app (aka module) folder)

The default build.gradle file works pretty well and looks like this:

```
apply plugin: 'com.android.application'

android {
    compileSdkVersion 20
    buildToolsVersion "20.0.0"

    defaultConfig {
        applicationId "com.something.myapplication"
        minSdkVersion 9
        targetSdkVersion 20
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        release {
            runProguard false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:appcompat-v7:19.+'
}
```

But there is one change I like to make:

```
apply plugin: 'com.android.application'

android {
    compileSdkVersion 20
    buildToolsVersion '20.0.0'

    defaultConfig {
        applicationId "com.something.myapplication"
        minSdkVersion 9
        targetSdkVersion 20
        versionCode 1
        versionName "1.0"
    }
    buildTypes {
        debug {
            applicationIdSuffix '.debug'
        }
        release {
            runProguard false
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
}

dependencies {
    compile fileTree(dir: 'libs', include: ['*.jar'])
    compile 'com.android.support:appcompat-v7:19.+'
}
```

You'll notice that in the android.buildTypes area, there is now a debug section. This adds an applicationIdSuffix to the package name of the app. What does this do?

When you attempt to install an app on Android, it checks the package name (found in the android.defaultConfig.applicationId identifier in the build.gradle file) against what is installed on your device.

* New - it installs the app.
* Already exists - it will check the key used to sign the app.
	* If it is the same, then it will usually install over the top of the existing app.
	* If it differs, it will error out and force you to uninstall the other one first (or force install, more on that in the adb post).

So, with all this, what adding the applicationIdSuffix does is that it lets you have the same app on the device twice, once for your production version, and once for your debug version:

* com.something.myapplication
* com.something.myapplication.debug

---

### How do I add libraries to my project?

You could download a jar, put it in the libs folder, track it in source control (even though source control kinda sucks for binary files), etc, but that is really annoying :(

One of the steps in the Gradle build process is dependency resolution. This means that if you add a dependency, Gradle will try to go get whatever you say you depend on. This is pretty sweet. That means that if I want to add a library like [Square's Retrofit][link5] (a great library that handles HTTP connections for you), it is easy.

1. Open your myapplication/app/build.gradle file
2. In the dependencies area, add: `compile 'com.squareup.retrofit:retrofit:1.+'`
3. Click the 'Sync Project with Gradle Files' button in the toolbar at the top of the IDE

![Gradle Sync][img1]

This tells it to find, download and compile retrofit. The 1.+ at the end says to go get the latest sub-version under the major version 1. This is usually fairly safe, as most projects try not to make breaking API changes within a major version. You could do something like

`compile 'com.squareup.retrofit:retrofit:1.6.1'`

This will just get version 1.6.1, nothing else. You could also try

`compile 'com.squareup.retrofit:retrofit:+'`

This could be dangerous, if they come out with a new major version that breaks your code, it won't warn you, it'll just download, compile, and fail.

There are more of these sorts of modifers that'll let you control which version you get, read more about it [here][link6]. You'll note it goes to the page for Ant's Ivy, which [Gradle apparently used to use][link7].

---

### Creating a signed app

In Android Studio, click Build -> Generate Signed APK

* Pick the project to compile
* Select the keystore and enter the passwords and aliases
* Pick an output folder, and Build Type (probably Release)
* Once that completes, you should now have an apk file called AppName-release.apk wherever you set the output to

---

### Developer account

You will also need to [create a developer account on the Play Store][link1]. This is what you will use to distribute your apps.

The process to submit a signed app to the Play Store is fairly self-explanitory once you get there, so I'm not gonna waste your time here. Just remember to come up with good descriptions and take good screenshots.

---

#### Sources

[http://gradleplease.appspot.com/][link1]

[http://search.maven.org/][link2]

[https://bintray.com/bintray/jcenter][link3]

[http://www.gradle.org/][link4]

[http://square.github.io/retrofit/][link5]

[http://ant.apache.org/ivy/history/trunk/settings/version-matchers.html][link6]

[http://stackoverflow.com/questions/14979856/gradle-dependency-versions-sign][link7]

---

[link1]: http://gradleplease.appspot.com/
[link2]: http://search.maven.org/
[link3]: https://bintray.com/bintray/jcenter
[link4]: http://www.gradle.org/
[link5]: http://square.github.io/retrofit/
[link6]: http://ant.apache.org/ivy/history/trunk/settings/version-matchers.html
[link7]: http://stackoverflow.com/questions/14979856/gradle-dependency-versions-sign

[img1]: /assets/2014-08-01/sync_gradle.png
[img2]: /assets/2014-08-01/gradle.png