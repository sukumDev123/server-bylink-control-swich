const http = require("http");
const port = 8080;
const app = require("./lib/express");
const firebase = require("./lib/firebase");
/**
 *
 * @param {*} time number time want to update value on database.
 */
function getUpdateDataGrahpEveryTimeSet(time) {
  // setInterval(() => {}, time);
}

http.createServer(app.expressSerive()).listen(port, () => {
  getUpdateDataGrahpEveryTimeSet(1000);
  firebase.initFirebase();
  console.log(`Listening port ${port}`);
});
