const collectionChartValue = db => db.collection("VALUE");
const updateValueOfSwitch = async (pin, db, values) => {
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
  const handleAllPinUpdateV = async (pin, ind) => {
    try {
      const snapShot = await getPinValues(db, pin);
      const newVal = snapShot.data().value;
      newVal.push({ value: values[ind], createAt: +new Date() });
      updateValueOfSwitch(pin, db, newVal);
    } catch (error) {
      updateValueOfSwitch(pin, db, [
        { value: values[ind], createAt: +new Date() }
      ]);
    }
  };
  if (pins.length) {
    pins.forEach(handleAllPinUpdateV);
  }
};

exports.getAllValues = db => collectionChartValue(db).get();
