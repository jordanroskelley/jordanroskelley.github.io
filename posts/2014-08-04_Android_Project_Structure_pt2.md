# Android Project Structure, Part 2

---

### What else is there?

In the first part, we talked about the default project structure. In part two, we see how to customize things a bit.

---

### Customizing the build process

First, most of your project lives in your app->src->main folder. Well, if you create the following folders in your src folder `debug->res->values`, and put in there a `strings.xml`, and in there add

```
<?xml version="1.0" encoding="utf-8"?>
<resources>

	<string name="app_name">Debug My Application</string>

</resources>
```

then when you just run your app, it will now have a different name, because this new node overrides the one in the main folder when you debug. If you create a release build, it is the same as before.

Yay? How is this useful?

* Lets say you have two servers, a live server and a development server and lets say you don't want to manually change the URL of that server in your app every time you switch from live to dev. Just add a placeholder to your server url in here, and when you debug, it points to dev, when you deploy, it points to live.
* You want to be able to tell the difference between your live and dev builds by supplying a different icon. Just add a new `drawable` folder and put in a 'beta' icon.
* Different settings for your analytics? (ie, you don't want to mess up your statistics by sending analytics when you debug)
* Turn logging off for deployment
