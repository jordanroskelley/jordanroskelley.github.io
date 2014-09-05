# Cocoapods

![Cocoapods][img1]

---

# What are they?

[Main Site][link1]

Cocoapods allow you to easily add libraries to your iOS application. They have lots of libraries on their website for you to try out.

---

# Getting Started

To get started with Cocoapods

* First, install cocoapods by running `sudo gem install cocoapods`
* Create a file named `Podfile` at the root of your (already created) iOS project
* At the [Cocoapods][link1] website, find a library you want to use, for example, [AFNetworking][link2]
	* They will usually show you what you need to put into your Podfile, for example:
```
platform :ios, '7.0'
pod "AFNetworking", "~> 2.0"
```
* Then, from your project folder, just run `pod install` to download the libraries.
* One side effect of using Cocoapods is that you can no longer open your `xcodeproj` file, but you now have to use the `xcworkspace` file.
* Now, you can just import and use that library in your code

---

#### Sources

[http://cocoapods.org/][link1]

[https://github.com/AFNetworking/AFNetworking][link2]

[link1]: http://cocoapods.org/
[link2]: https://github.com/AFNetworking/AFNetworking

[img1]: /assets/2014-08-12/cocoapods.png