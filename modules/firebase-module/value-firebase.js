const collectionChartValue = db => db.collection("VALUE");
const funcAsyncData = async (pin, ind, db, values) => {
  console.log({ pin, ind, values });
  try {
    collectionChartValue(db)
      .doc(pin + "")
      .set({ value: values });
  } catch (error) {
    console.log({ error });
  }
};

const getPinValues = (db, pin) =>
  collectionChartValue(db)
    .doc(pin + "")
    .get();
exports.updatePinValues = (db, pins, values) => {
  let datas = [];
  if (pins.length) {
    pins.forEach((pin, ind) => {
      try {
        getPinValues(db, pin).then(sap => {
          sap.forEach(snapShotData => {
            console.log(snapShotData.data());
          });
        });
      } catch (error) {
        funcAsyncData(pin, ind, db, values[ind]);
        console.log(error);
      }
    });
  }
};
