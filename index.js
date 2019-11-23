const http = require("http");
const port = 8080;
const app = require("./lib/express");
http
  .createServer(app.expressSerive())
  .listen(port, () => console.log(`Listening port ${port}`));
