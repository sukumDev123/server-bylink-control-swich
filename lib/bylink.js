const request = require("request");
const fs = require("fs");
const dotenv = require("dotenv");
const token = dotenv.parse(fs.readFileSync("./.env")).TOKEN;

exports.getDataInformation = function getDataInformation(d) {
  return new Promise((res, rej) =>
    request(`http://blynk-cloud.com/${token}/get/D${d}`, function(
      error,
      response,
      body
    ) {
      if (error) {
        rej({ status: 500, response: error });
      } else {
        res({ status: response.statusCode, response: body });
      }
    })
  );
};
exports.putDataInformation = function putDataInformation(status0or1, d) {
  return new Promise((res, rej) =>
    request(
      {
        method: "PUT",
        url: `http://blynk-cloud.com/${token}/update/D${d}`,
        headers: {
          "Content-Type": "application/json"
        },
        body: `["${status0or1}"]`
      },
      function(error, response, body) {
        if (error) {
          rej({ status: 500, response: error });
        }
        res({ status: response.statusCode, response: "update status sucess" });
      }
    )
  );
};
// var request = require('request')
exports.getProfile = function getProfile() {
  return new Promise((res, rej) =>
    request(
      {
        method: "GET",
        url: `http://blynk-cloud.com/${token}/project`,
        headers: {
          "Content-Type": "application/json"
        }
      },
      function(error, response, body) {
        if (error) {
          rej({ status: 500, response: error });
        } else {
          res({ status: response.statusCode, response: JSON.parse(body) });
        }
      }
    )
  );
};
exports.getHistory = function getHistory(d) {
  return new Promise((res, rej) =>
    request(
      {
        method: "GET",
        url: `http://blynk-cloud.com/${token}/data/D${d}`,
        headers: {
          "Content-Type": "application/x-gzip"
        }
      },
      (error, response, body) => {
        if (error) {
          rej({ status: 500, response: error });
        } else {
          res({ status: response.statusCode, response: body });
        }
        console.log({ error, response, body });
      }
    )
  );
};
