const informationCOntroller = require("./information.controller");

exports.informationRouter = router => {
  router.get("/openSwitch", informationCOntroller.openSwitchController);
  router.get(
    "/getAll",
    informationCOntroller.getAllInfomrationOfSwitchController
  );
  return router;
};
