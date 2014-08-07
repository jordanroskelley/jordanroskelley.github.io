# Using Retrofit

![Square][img1]

---

### What is Retrofit

[The Docs][link1]

Retrofit is a type-safe REST client for Android and Java... What?!?

On Android, if you want to get data from a web server, you have to create an HTTP connection, make a request, receive a response, parse the response into an object of some sort, and then use that object. Oh, and you have to do this all on a background thread, otherwise your app will crash. Oh yeah, and different versions of Android can have different HTTP stacks available. There are hundreds of tutorials on how to write your own HTTP calling widget. I don't really recommend that unless you are a masochist. I tried it, and got it pretty close to usable, but it was never really reliable. Instead, I recommend using some sort of library to abstract away all that HTTP pain.

So that brings us to Retrofit. Retrofit is a library from Square Inc (yes, the mobile payment company), that makes getting data nice.

---

### Getting Retrofit

Luckily for us, Retrofit is available by just adding the library to our Gradle build file (under the dependencies area)

```
compile 'com.squareup.okhttp:okhttp:2.+'
compile 'com.squareup.okhttp:okhttp-urlconnection:2.+'
compile 'com.squareup.retrofit:retrofit:+'
compile 'com.google.code.gson:gson:2.+'
```

So what do these do?

* okhttp & okhttp-urlconnection - these are an additional HTTP stack, designed for speed. Retrofit can work without them, but they make things a bit faster.
* retrofit - this is Retrofit itself
* gson - A [library from Google][link3] that turns json strings into objects. More on that below.

---

### Gson

Lets say you have a json string like so

```
{"name": "Jordan Roskelley", "hairColor": "purple", "favoriteSeason": "spring"}
```

And you want a Java object, so you can use it. Define an object

```
package com.whatever;

public class Person {
	public String name;
	public String hairColor;
	public String favoriteSeason;

	//yes, bad encapsulation, I should use getter/setter, but this is a demo
}
```

Then use Gson to convert


```
package com.whatever;

import com.google.gson.Gson;
import com.whatever.Person;

public class MyClass {
	public void converter() {
		//this is your string, it can come from a web service, or be hardcoded into your code, wherever
		String json = "{\"name\": \"Jordan Roskelley\", \"hairColor\": \"purple\", \"favoriteSeason\": \"spring\"}";

		//this is your gson object, it converts stuff
		Gson g = new Gson();

		//convert from string to person
		Person mPerson = g.fromJson(json, Person.class);

		//now, you can use your new mPerson
	}
}
```

One tip I have is that if you have written your API first, and want to generate Java objects from some json you already have, check [this site][link2] out. This can save a lot of time in boilerplate typing.

---

### Using Retrofit

So, how do I use Retrofit?

First, you define your service. Basically, this is a map of your API.

```
package com.whatever;

import retrofit.Callback;
import retrofit.http.GET;
import retrofit.http.Path;

public interface MyService {
    @GET("/people/{id}")
    void getPerson(@Path("id") int id, Callback<Person> callback);

    //you put all your other service calls in here too
    @GET("/dogs/{dogId}")
    void getDog(@Path("dogId") int dogId, Callback<Dog> callback);
}
```

Break it down

* @GET("/people/{id}")
	* This is going to be an HTTP Get request (not a POST, etc)
	* The URL will be whatever was in your setup (which we define in the next section) plus whatever is in the parenthesis, this means your full URL will be `https://webservices.whatever.com/people/{id}`
	* {id} means that we will fill this part in later
* void getPerson(@Path("id") int id, Callback<Person> callback);
	* void - no return, we will instead use the Callback object to wait for a return
	* getPerson - function name
	* @Path("id") int id - bind to the `{id}` part of the path and replace it with our `int id`
	* Callback<Person> callback - we create a callback, which will be passed in and out. It is created by whomever will call us, and be filled out by us with a Person object (or an error).



Then, I build a ServiceProvider, which gives you a singleton of your service.

```
package com.whatever;

import retrofit.RestAdapter;

public enum ServiceProvider {
    INSTANCE;

    private MyService mMyService;

    public MyService getMyService() {
        if(mMyService == null) {
            RestAdapter restAdapter = new RestAdapter
                    .Builder()
                    .setEndpoint("https://webservices.whatever.com")
                    .setLogLevel(RestAdapter.LogLevel.FULL)
                    .build();

            mMyService = restAdapter.create(MyService.class);
        }

        return mMyService;
    }
}
```

What is this?

* We only want to create one MyService (they're kind of expensive). So this makes it a singleton we can reuse.
* If we have one, get it, otherwise create a new MyService
* We give our RestAdapter an endpoint (the server to call)
* We turn logging on, this will log all HTTP calls (comment out this line for production)

Ok, now you have all the set up stuff out of the way, let's actually use it.

```

package com.whatever;

import retrofit.Callback;
import retrofit.RetrofitError;
import retrofit.client.Response;

public class MyFragment extends Fragment {
    public static final String TAG = "MyFragment";

    private MyService mMyService;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRetainInstance(true);

        //get our MyService. This will either create a new one (the first time) or reuse an existing one
        mMyService = ServiceProvider.INSTANCE.getMyService();
    }

    @Override
    public void onActivityCreated(Bundle savedInstanceState) {
        super.onActivityCreated(savedInstanceState);

        //gather the data needed for request
        String personIdToGet = 5;

        //set up our callback, this is what will handle the result of our call
        Callback callback = new Callback<Person>() {
            @Override
            public void success(Person person, Response response) {
    			Log.d(TAG, "You got a person named: " + person.name);
            }

            @Override
            public void failure(RetrofitError error) {
    			Log.d(TAG, "You got an error with status code: " + error.getResponse().getStatus());
            }
        };

        //actually call our service
        mMyService.getPerson(personIdToGet, callback);
    }
}
```

There is a lot more you can do with Retrofit. You can also create POST and DELETE calls, you can set custom HTTP headers (like for authorization, etc). This is just the tip of the iceburg. Check out [the docs][link1] for more examples.

---

#### Sources

[http://square.github.io/retrofit/][link1]

[http://www.jsonschema2pojo.org/][link2]

[https://code.google.com/p/google-gson/][link3]


[link1]: http://square.github.io/retrofit/
[link2]: http://www.jsonschema2pojo.org/
[link3]: https://code.google.com/p/google-gson/

[img1]: /assets/2014-08-07/square.png
