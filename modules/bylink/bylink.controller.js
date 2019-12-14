const byLink = require("../../lib/bylink");

exports.handleGetBylink = async function handleGetBylink(req, res) {
  try {
    const handleGetData = await byLink.getDataInformation(req.query.status);
    res.json(handleGetData);
  } catch (error) {
    res.json(error);
  }
};

exports.handlePostBylink = async function handlePostBylink(req, res) {
  try {
    const handlePutData = await byLink.putDataInformation(
      req.body.status,
      req.body.pin
    );

    res.json(handlePutData);
  } catch (error) {
    res.json(error);
  }
};

exports.getProfileBy = async function getProfileBy(req, res) {
  try {
    const handleGetProfile = await byLink.getProfile();
    res.json(handleGetProfile);
  } catch (error) {
    res.json(error);
  }
};

exports.getHistoryBy = async function getHistoryBy(req, res) {
  try {
    const getHistoryData = await byLink.getHistory(req.query.pinKey);
    res.json(getHistoryData);
  } catch (error) {
    res.json(error);
  }
};
