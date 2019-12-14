const collectionSwitchInformationDb = db => db.collection("SWITCH_INFORMATION");
exports.updateTimeOpenOfSwitch = (db, switch_is, status) =>
  new Promise((res, rej) => {
    try {
      collectionSwitchInformationDb(db)
        .doc(switch_is)
        .set({
          name_switch: switch_is,
          switch_time: +new Date(),
          statue: status
        });
      res(`update switch is ${switch_is} success.`);
    } catch (error) {
      console.log({ firebaseError: error });
      rej(error);
    }
  });

exports.getAllInformationOfSwitch = db =>
  collectionSwitchInformationDb(db).get();
