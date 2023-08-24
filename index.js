const http = require("http");
const PORT = 4000 || process.env.PORT;

const hostName = "localhost";
const server = http.createServer((req, res, next) => {
  if (req.url == "/") {
    res.end("<h1>New Home Page</h1>");
  } else {
    res.end("404 page is not found");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server is running on= ${hostName} and ${PORT}`);
});
