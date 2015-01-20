# Push Notification Architecture
#### 8/12/2014

---

# Why are push notifications cool?

Before push, if you wanted to send semi-real-time data to a user, they had to poll your site (meaning they would check for updates every X seconds). Remember, with HTTP once the client makes a request they disappear, and until they talk to you again, you don't know how to reach them. This polling worked, but it required your device to wake up, turn on it's network connection, talk to the server, then, if there was actually data, do something. The problem is that nearly all the time, there was no new data. For a desktop, this was an annoyance, but not the end of the world. You have virtually unlimited power and network resources. On a mobile device, this is a problem. Your mobile device is battery powered, and one of the big battery drains is your network. If you have to wake up the WiFi every X seconds, then your device battery is sad.

---

# Push Architecture

In order to understand how push notifications work, it is good to understand how the architecture works.

<img src='/assets/2014-08-12/push.png' class='img-responsive' />

---

# Token Registration

* User installs and launches app
* When the app is first run, the app registers to receive push notifications with Apple/Google
* At this point, the app gets a token
	* This token identifies **this** app installed on **this** device
	* Think of this token as an email address to reach this user at
	* The token is not tied to anything in your app, other than the app itself. This means that if your user logs out and a new user logs in, you will have the same token for the new user. BE CAREFUL!
	* You can have many of these tokens per user, depending on how many devices they sign in on (iOS or Android devices, or multiples thereof)
* At this point, your app will need to send this token up to your server, so you can tie the token to the user

---

# Sending a Notification

* When you want to send a notification, you will need to send a message (in a special format that we'll talk about later in different articles) to a server that is run by either Apple or Google.
* Those servers will handle getting the notification to the user

---

# How do Apple/Google contact the user?

Earlier, I said that servers lose contact with the user once their request is done, so how do Apple/Google get the notification to the user?

* When your device has an internet connection, it has an IP address
* Both Android and iOS have a service that is always running on the device that watches this IP address, and when it changes, it will contact Apple/Google and update them of your new IP address
	* Yes, this means that Apple/Google ALWAYS have your IP address
* Then, when you want to send a notification to your user, you send it to Apple/Google, they look up the IP address, and forward it to that system service, which in turn notifies your app that it has a new message
	* This system service is listening to be contacted by Apple/Google. It is basically running a server on your device, just listening and waiting for a 'request'

---

# Wrap Up

This process allows just one service on your device to handle all notifications, without polling anything. When your IP changes, it updates Apple/Google with that new IP address. This is very battery efficient.

One thing to note, some manufacturers (Samsung, possibly others) have their own push service running in addition to Google's push service. It won't interfere with you sending push notifications, but it is really annoying that they feel the need to create their own, when Google provides theirs for free.

---

#### Sources

[http://developer.android.com/google/gcm/gcm.html][link1]

[https://developer.apple.com/notifications/][link2]

[link1]: http://developer.android.com/google/gcm/gcm.html
[link2]: https://developer.apple.com/notifications/