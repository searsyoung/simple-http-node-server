# simple-http-node-server

### Exercises

####Questions

> Why is the fs core module important for Node development?

A. It provides access to the filesystem from your code.

> What is the difference between sync and non-sync methods in the fs module?

A. Synchronous is blocking, which means code has to complete execution of that line of code before continuing on. Asynchronous is non-blocking, so your code won't wait for for the command to complete prior to moving on to the next line of code.

> Why are modules used?

A. Simplify your code (don't reinvent the wheel!) by leveraging libraries already built, tested, and verified by the community (or perhaps even those built by your own team for reuse within the company as approved modules). Helps achieve the DRY principle with your projects.

> Why are libraries such as fs used in Node programming?

A. Simplify your code (don't reinvent the wheel!) by leveraging libraries already built, tested, and verified by the community (or perhaps even those built by your own team for reuse within the company as approved modules). Helps achieve the DRY principle with your projects.

####Code Practice

> Create a Github repo called simple-http-node-server. Create an HTTP server on port 3000 with a request handler that creates a file named hello-world.txt. You will be using the fs module to do this. Write the content: "Hello to this great world" to the hello-world.txt file. Please submit your finished code in your submission.

```js
const http = require("http");
const port = 3000;
const fs = require("fs");

// Handles HTTP requests.
const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`);
};

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on part 8000
server.listen(port, err => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  fs.writeFile("hello-world.txt", "Hello to this great world", "utf8", err => {
    if (err) throw err;

    console.log("success");
  });
});
```
