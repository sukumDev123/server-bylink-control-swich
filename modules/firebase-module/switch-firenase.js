const collectionDb = db => db.collection("SWITCH_INFORMATION");
exports.updateTimeOpenOfSwitch = (db, switch_is, status) =>
  new Promise((res, rej) => {
    try {
      collectionDb(db)
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

// exports.getInformationOfSwitch = (db, switch_is) => {
//   new Promise((res, rej) => {
//     collectionDb(db)
//       .doc(switch_is)
//       .get()
//       .then(snapshot => {
//         console.log({ snapshot });
//         // snapshot.forEach(doc => {
//         //   console.log(doc.id, "=>", doc.data());
//         // });
//       });
//   });
// };

exports.getAllInformationOfSwitch = db => collectionDb(db).get();
// exports.addSwitchNewSwitch = db => new Promise((res, rej) => {});
