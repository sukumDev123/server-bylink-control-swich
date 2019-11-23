const bylinkK = require("../modules/bylink/bylink.router");

const express = require("express");
const bodyParser = require("body-parser");
function headerSet(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  next();
}

function notFoundPage(req, res, next) {
  let err = {
    message: "Not Found",
    status: 404
  };

  next(err);
}
function handlerErroo(error, req, res, next) {
  res.status(error.status || 500).json({
    status: error.status,
    message: error.message
  });
}

const midleware = app => {
  app.use(express.static("./"));
  app.use(
    bodyParser.urlencoded({
      extended: true
    })
  );
  app.use(bodyParser.json());
  app.use(headerSet);
};

const app_router = app => {
  const Router = express.Router();

  app.use("/api/bylink/", bylinkK.bylinkRouter(Router));
  app.use(notFoundPage);
  app.use(handlerErroo);
};
exports.expressSerive = function expressSerive() {
  const app = express();
  app.use(morgan("dev"));
  midleware(app);
  app_router(app);
  return app;
};
