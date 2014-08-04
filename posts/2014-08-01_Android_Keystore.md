# Android Keys & Keystore

---

### What is a keystore?

A keystore is just a lockable (password protected) container for keys.

Thanks captain obvious, so... what's a key?

All apps that get installed on an Android emulator or device must be signed. Code signing is a cryptographic process that helps protect your code and identifies who developed the code. By default, when you click the 'play' button, it uses the "debug.keystore" key. This is a default key with a default password, used to get the app on your device. You can find the file here:

* Mac: `~/.android/debug.keystore`
* Windows: `%USERPROFILE%\.android\debug.keystore`

Keys of this sort come in pairs, a public key and a private key. The private key **NEEDS** to be kept safe. If someone untrustworthy gets your private key, you need to create a new key and re-release your apps.

---

### Creating a keystore

So, in order to put your app on the Play Store, you can't use the debug.keystore, so you will need to [generate your own keystore][link2].

This can be confusing, but just remember what you are doing:

* Create a key holder (keystore)
* Create key inside of keystore
* Identify developer

To do this, we will use a command called keytool ([documentation here][link3])

* Mac: `/usr/bin/keytool` (though it should already be on the path)
* Windows: `C:\Program Files\Java\jre7\bin\keytool.exe`

`keytool -genkey -v -keystore your-name-here.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`

So, what does this do?

* genkey - generate a key pair (private and public)
* v - verbose mode, so it shows you what is going on
* keystore - name of keystore file, you should name it in the format your-name-here.keystore
* alias - the name of the key within the keystore
* keyalg - the algorithm used for signing
* keysize - the default is 1024, but 2048 should be your minimum
* validity - how long (in days) is this key good for. Keys have a built in expiration date

Once you run this, it will generate a keystore with a key in it. Along the way, it'll ask you all sorts of wacky questions. First, you need a password for the keystore. Then, after that, if you don't answer the question, the default is on the left. It is probably best to use different passwords for the store and the key.

---

### What is in the keystore?

Later, you may want to see what exactly you put inside that keystore file. You can do this with:

`keytool -list -keystore your-name-here.keystore`

That should spit out something that looks like this:

```
Keystore type: JKS
Keystore provider: SUN

Your keystore contains 1 entry

alias_name, Aug 1, 2014, PrivateKeyEntry, 
Certificate fingerprint (SHA1): 5E:47:D9:26:C5:B9:89:D7:8B:08:58:F1:CB:52:00:66:DA:33:53:EB
```

---

### What key signed my app?

If you want to reverse the signing process and see which key signed an app:

1. Unzip the apk (yes, every 'app' is just a zip file with a fancy extension, rename it from `file.apk` to `file.zip`, then unzip it)
2. Inside that folder (along with a bunch of compiled gobbledygook) should be a folder called `META-INF` with a file `CERT.RSA`
3. Run: `keytool -printcert -file CERT.RSA`, that should spit out:

```
Owner: CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown
Issuer: CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown
Serial number: 29e34a51
Valid from: Fri Aug 01 15:49:34 MDT 2014 until: Tue Dec 17 14:49:34 MST 2041
Certificate fingerprints:
	 MD5:  57:DC:6F:05:FA:C3:DE:7B:A0:3E:5E:2F:2F:CE:46:21
	 SHA1: 5E:47:D9:26:C5:B9:89:D7:8B:08:58:F1:CB:52:00:66:DA:33:53:EB
	 SHA256: 86:6E:AD:80:21:4B:43:6F:B8:CD:69:DC:60:52:B6:F9:A2:4E:00:C7:CC:1E:F1:08:1C:E0:BD:34:30:57:24:55
	 Signature algorithm name: SHA256withRSA
	 Version: 3

Extensions: 

#1: ObjectId: 2.5.29.14 Criticality=false
SubjectKeyIdentifier [
KeyIdentifier [
0000: 69 35 51 61 41 90 9D 76   F1 44 64 BA BF 8E 4E D8  i5QaA..v.Dd...N.
0010: 8D 93 41 26                                        ..A&
]
]
```

Now, you'll notice that the SHA1 line in there is the same as the SHA1 from the previous section when we printed what was in the keystore. Yay!

---

#### Sources

[https://play.google.com/apps/publish/][link1]

[http://developer.android.com/tools/publishing/app-signing.html][link2]

[http://docs.oracle.com/javase/6/docs/technotes/tools/windows/keytool.html][link3]

---

[link1]: https://play.google.com/apps/publish/
[link2]: http://developer.android.com/tools/publishing/app-signing.html
[link3]: http://docs.oracle.com/javase/6/docs/technotes/tools/windows/keytool.html