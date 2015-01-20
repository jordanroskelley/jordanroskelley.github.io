# CORS Cross Origin Resource Sharing
#### 8/11/2014

---

### What is CORS?

[Wikipedia][link1]

By default, most browsers will only allow you to view content from the same server you got the page from. If you go to `http://www.google.com`, you can only view content from `google.com`. This means that if your web page comes from a different server than your data, things won't work. This is where CORS comes in. CORS stands for `cross-origin resource sharing`.

Here is a scenario. You have two servers, S1 and S2. On S1, you have your web page. On S2, you have the data you want to access from the web page served by S1. Somebody goes to S1 and loads your page. Then, your page requests data from S2. S2 doesn't care who makes the request, they will return the data as normal. But, when the browser gets the data, they will ignore it unless it has the CORS header.

The CORS header is Access-Control-Allow-Origin, and it must have a value:

```
Access-Control-Allow-Origin: *
```

---

### How to enable CORS

This is different for every kind of server out there, so I'm not even going to try, but check out [this site][link2], they did.

---

#### Sources

[http://en.wikipedia.org/wiki/Cross-origin_resource_sharing][link1]

[http://enable-cors.org/][link2]

[link1]: http://en.wikipedia.org/wiki/Cross-origin_resource_sharing
[link2]: http://enable-cors.org/