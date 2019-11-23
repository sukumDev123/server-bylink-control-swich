const control = require("./bylink.controller");
exports.bylinkRouter = function bylinkRouter(router) {
  router.get("/bylinkGet", control.handleGetBylink);
  router.post("/bylinkPost", control.handlePostBylink);
  return router;
};
