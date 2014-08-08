# Web API Design

---

### What is a Web API?

When you want to expose data through some medium other than HTML (mobile applications, ajax calls, etc), you want a web API. Web APIs commonly use some kind of data interchange format (like XML or json). There are tons of ways to do it. Some scale better than others. I've used node.js, Microsoft WebAPI 2.0 and Java with Jax-RS to write them, and they all have their strengths and weaknesses. What really matters though is designing a good API that makes sense for someone to code against. This helps maintain separation of concerns. If in the future you want to change out your ENTIRE back end, you can as long as your API stays the same. You code the API, make it secure, fast, etc. They code the front-end or app or whatever they use.

Here is what I call the [Web API Bible][link1]. I desperately wish I had found this before I wrote version one of my web services.

---

#### Sources

[http://info.apigee.com/Portals/62317/docs/web%20api.pdf][link1]


[link1]: http://info.apigee.com/Portals/62317/docs/web%20api.pdf