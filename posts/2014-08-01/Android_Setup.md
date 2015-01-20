# Setting up for Android Development
#### 8/1/2014

---

###Install the IDE
You will need an IDE to develop for Android, lets go get one

* There are currently two IDE's for Android. The first to come out was built as an extension to the [Eclipse IDE][link1] which was later integrated into [one product][link2]. It worked pretty good, and is still better at a few things (that list is constantly shrinking). Personally, I use the other option, [Android Studio][link3]
* Android Studio seems to be the future of Android development for now, and it's where I'd invest my learning time
* Once that is installed, we should be ready. It comes with some tools, with more available if you need.

---

### Devices
Eventually, you will want to deploy things to a device. Make sure you have a cable, and device. If you need a new device, I personally recommend [Nexus devices][link5]. They are kept up to date, easy to deploy to, and price per performance, cannot be beat.

* If needed, install drivers for your device
	1. Instructions will differ based on your device
	2. Remember, Google is your friend
	3. This is one of the hardest steps, good luck!
* You will need to enable developer mode on your device (instructions may vary depending on device):
	1. On your device, open the Settings app
	2. If you do not see a "Developer options" item, you may have to enable developer mode
		1. Go to About phone
		2. This will sound crazy, but tap on the "Build Number" item repeatedly, this will enable developer mode
		3. If all else fails, Google how to enable developer mode for your specific device
	3. Select the "Developer options" item, and turn it on
	4. Enable the "USB debugging" item
	<br><br>
	![USB Debugging][img1]
	<br><br>
* Make sure you have ADB properly installed
	1. Open up a command line and type in `adb`
	2. If command was not found, you may need to edit your PATH to include adb
		1. By default, on a Mac, adb is found at `/Applications/Android\ Studio.app/sdk/platform-tools/adb`
		2. For Windows... that is an exercise I'll leave up to you
	3. Once the adb command runs and you have drivers installed, try running `adb devices`. Hopefully, this will show you your device.
* Troubleshooting
	1. If you don't see your device from `adb devices`, check your drivers
	2. Sometimes, running `adb kill server` and then trying again will help it recognize new devices

---

### Install a Git client
I use git for version control

* Technically Android Studio has Git built in. If you like IDE integrated source control, check it out.
* I really like the [Atlassian][link4] client
* A much as I like the Atlassian client, getting code from the command line is super simple
	* `git clone https://github.com/jordanroskelley/PlayerScore.git`
	* Most public projects post a URL to use to check out code

---

### Extras
There are tons of things you can do to customize your experience

* Dark themed IDE
	* Preferences -> Appearance -> Theme -> Darcula
* Line numbers
	* Preferences -> Editor -> Appearance -> Show line numbers

---

#### Sources

[http://www.eclipse.org/downloads/][link1]

[http://developer.android.com/sdk/index.html][link2]

[http://developer.android.com/sdk/installing/studio.html][link3]

[link1]: http://www.eclipse.org/downloads/
[link2]: http://developer.android.com/sdk/index.html
[link3]: http://developer.android.com/sdk/installing/studio.html
[link4]: https://www.atlassian.com/software/sourcetree/overview
[link5]: https://play.google.com/store/devices

[img1]: /assets/2014-08-01/developer_options.jpg









