const http = require("http");
const port = 8080;
const app = require("./lib/express");
const firebase = require("./lib/firebase");
const bylnk = require("./lib/bylink");
const valueFirebase = require("./modules/firebase-module/value-firebase");
/**
 *
 * @param {*} time number time want to update value on database.
 */
function getUpdateDataGrahpEveryTimeSet(time) {
  const db = firebase.getDb();
  setInterval(() => {
    bylnk.getProfile().then(data => {
      const gauge = data.response.widgets.filter(d => d.type === "GAUGE");
      const pins = gauge.map(d => d.pin);
      const values = gauge.map(d => parseFloat(d.value));
      valueFirebase.updatePinValues(db, pins, values);
    });
  }, time);
}

http.createServer(app.expressSerive()).listen(port, () => {
  firebase.initFirebase();
  // getUpdateDataGrahpEveryTimeSet(5000);
  console.log(`Listening port ${port}`);
});
