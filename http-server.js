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

  //console.log(`server is listening on ${port}`);
});
