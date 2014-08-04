# Android Project Structure

---

### New Project

Here is what the folders in a new project look like:

![Default Folder][img1]

---

### The src->main folder

There are two main folders (java and res) and one file in here (AndroidManifest.xml).

---

#### AndroidManifest.xml

[The Docs][link6]

The AndroidManifest.xml file describes your app, so the device knows what it is going to do (permission to access internet, etc), what hardware you *require* (Camera, NFC, etc), as well as what Activities you can call. Here is the default manifest file

```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.something.myapplication" >

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".MyActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>

</manifest>
```

This says that the package is com.something.myapplication, it tells where to find the app icon and what the app is called (we'll get into the @ thing in a bit), it defines an activity (and inside that, says that that activity is the one to launch when the user clicks the icon).

If you are running an app, and try to transition to a new activity that hasn't been defined in this file, then your app will crash, and have some permission error. To add a new activity, you just need to add a new `<activity>` node, like so:

```
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.something.myapplication" >

    <application
        android:allowBackup="true"
        android:icon="@drawable/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/AppTheme" >
        <activity
            android:name=".MyActivity"
            android:label="@string/app_name" >
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />

                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <!-- this is a new activity -->
        <activity
        	android:name=".MyNewActivity"
        	android:label="@string/myNewActivityName" />

    </application>

</manifest>
```

You don't have to put anything inside this node, because it isn't the launch activity.

---

#### java folder

There really isn't too much that is special about this folder, it just contains .java files. You can break it up into packages, just like normal java. In fact, Android supports [most*][link1] of the standard Java library, so have fun.

---

#### res folder

[The Docs][link4]

This is where things get different. What are all these folders for?

1. drawable-* - this is for images, based on screen size. Different screen 'densities' will use different image files. From [the docs][link2]
>xlarge screens are at least 960dp x 720dp
>
>large screens are at least 640dp x 480dp
>
>normal screens are at least 470dp x 320dp
>
>small screens are at least 426dp x 320dp

2. layout - describe the layout of your views in xml
3. menu - describe your menus (and their options) in xml
4. values - this is where things can get confusing
	1. dimens - to be honest, I've never touched this...
	2. strings - this lets you separate your on screen text from your code and layout. More on this in a bit.
	3. styles - you can go all the way down the rabbit hole here and create your own super-custom UIs here... It can get out of control quickly. Generally, I try to stick with the default UI unless I have a purpose for changing something.

---

#### strings.xml and the funny @ thing

[The Docs][link3]

Here is the default strings.xml file:

```
<?xml version="1.0" encoding="utf-8"?>
<resources>

    <string name="app_name">My Application</string>
    <string name="hello_world">Hello world!</string>
    <string name="action_settings">Settings</string>

</resources>
```

You have a resources root node, with string children. You have a name and the value for each of these. The name is how you refer to this text.

Why would you want to create all this overhead of referring to strings by saying `@strings/app_name` (in xml), or even worse in code, `getResources().getString(R.string.app_name)`? Well, later, when you have to translate your app into Spanish, here is all you have to do:

1. Create a new folder inside your res folder named `values-es`
2. Create a new strings.xml file in there
3. Copy/paste your other strings.xml content, but replace all the english text with Spanish translations
4. Congratulations, when someone has their phone language set to Spanish, their app is now in Spanish

For a list of all the customization you can perform on these folders (language, screen density, etc), see [the docs][link5].

---

#### Wait, what is this R.string thing now?

If you were particularly astute, you probably noticed that when we referenced the string in code, we used `R.string.app_name`. Every time you add or change one of these xml files, the R file is regenerated (so don't try to put anything in here by hand). Just for your information, the file can be found at `<project>/app/build/generated/source/r/debug/com.something.myapplication/R` and here is a bit of what is in there:

```
	//tons of stuff cut

    public static final class string {
        public static final int app_name=0x7f0b0000;

        //tons more stuff cut
    }

    //and yet more stuff cut
```

Basically, it maps the name to a memory location.

---

#### Sources

[http://en.wikipedia.org/wiki/Comparison\_of\_Java\_and\_Android\_API][link1]

[http://developer.android.com/guide/practices/screens_support.html][link2]

[http://developer.android.com/guide/topics/resources/string-resource.html][link3]

[http://developer.android.com/guide/topics/resources/available-resources.html][link4]

[http://developer.android.com/guide/topics/resources/providing-resources.html][link5]

[http://developer.android.com/guide/topics/manifest/manifest-intro.html][link6]

---

[link1]: http://en.wikipedia.org/wiki/Comparison_of_Java_and_Android_API
[link2]: http://developer.android.com/guide/practices/screens_support.html
[link3]: http://developer.android.com/guide/topics/resources/string-resource.html
[link4]: http://developer.android.com/guide/topics/resources/available-resources.html
[link5]: http://developer.android.com/guide/topics/resources/providing-resources.html
[link6]: http://developer.android.com/guide/topics/manifest/manifest-intro.html

[img1]: /assets/2014-08-04/folder_before.png



















