const admin = require("firebase-admin");
let serviceAccount = require("../private/switch-database-83160-firebase-adminsdk-eyydt-f35c726d2f.json");
exports.initFirebase = function initFirebase() {
  console.log("Init");
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
};

exports.getDb = function getDb() {
  let db = admin.firestore();
  return db;
};
