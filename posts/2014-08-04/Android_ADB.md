# ADB - Android Debug Bridge

---

### What is it?

[The Docs][link1]

ADB is how you communicate with an Android device or emulator. It stands for Android Debug Bridge. In order to communicate with a device, it must allow adb connections. By default, the emulator has adb turned on by default. For a hardware device, turning this on was covered in the Setting up for Android Development post.

The IDE uses adb to upload your app to a device and read it's logs.

Things I use adb for (outside the IDE):

* Check if my device is recognized
	* `adb devices`
```
List of devices attached 
00112233aabbccdd	device
```
* Restart adb
	* `adb kill server`
* Get to the command line on your device
	* `adb shell`
	* Side note: if your device is rooted, then from here, you can enter `sudo su` and then browse any directory on the device
* Manually upload signed apk (for testing before deploying to Play Store)
	* `adb install myapplication-release.apk`
* Deleting apps that were signed with the wrong key
	* `adb uninstall com.something.myapplication`
* Debugging sqlite stuff
	* First, get to shell on device `adb shell`
	* Then, use `sqlite3 /data/data/com.something.myapplication/databases/mydbname.db`
* Copy file from device
	* `adb pull /sdcard/file.png`
* If you are feeling particularly brave, you can even run your apps without a cable
	* See [this section][link2] of the adb docs page.

---

#### Sources

[http://developer.android.com/tools/help/adb.html][link1]

[http://developer.android.com/tools/help/adb.html#wireless][link2]

[link1]: http://developer.android.com/tools/help/adb.html
[link2]: http://developer.android.com/tools/help/adb.html#wireless