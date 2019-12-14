const databaseInformationSW = require("../firebase-module/switch-firenase");
const databaseValue = require("../firebase-module/value-firebase");
async function handleOpenSwitch(db, switchNumber, statusOpenOrClose) {
  let message = "";
  let status = "";
  if (switchNumber) {
    if (statusOpenOrClose) {
      try {
        message = await databaseInformationSW.updateTimeOpenOfSwitch(
          db,
          switchNumber,
          statusOpenOrClose
        );
        status = 200;
      } catch (error) {
        console.log({ error });
        message = error;
        status = 500;
      }
    } else {
      message = "status  params is empty";
      status = 404;
    }
  } else {
    message = "switch numper params is empty";
    status = 404;
  }

  return {
    message,
    status
  };
}

exports.getAllInfomrationOfSwitchController = async (req, res) => {
  try {
    const db = req.db;
    const snapshot = await databaseInformationSW.getAllInformationOfSwitch(db);
    let datas = [];
    snapshot.forEach(snapShotData => {
      datas.push(snapShotData.data());
    });
    res.json({ datas, status: 200 });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      status: 500,
      message: "ERROR"
    });
  }
};
exports.openSwitchController = async (req, res) => {
  try {
    const db = req.db;
    const switchNumber = req.query.switch;
    const statusOpenOrClose = req.query.status;
    const { message, status } = await handleOpenSwitch(
      db,
      switchNumber,
      statusOpenOrClose
    );
    res.status(status).json({ message, status });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      status: 500,
      message: "ERROR"
    });
  }
};

exports.getAllPinsValue = async (req, res) => {
  try {
    const dataVal = await databaseValue.getAllValues(req.db);
    let datas = [];
    dataVal.forEach(snapShot => {
      datas.push({
        id: snapShot.id,
        values: snapShot.data().value
      });
    });
    res.status(200).json({ datas, status: 0 });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      status: 500,
      message: "ERROR"
    });
  }
};
