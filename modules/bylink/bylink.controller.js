const byLink = require('../../lib/bylink')

exports.handleGetBylink = async function handleGetBylink(req, res) {
  try {
    const handleGetData = await byLink.getDataInformation(req.query.status)
    res.json(handleGetData)
  } catch (error) {
    res.json(error)
  }
}

exports.handlePostBylink = async function handlePostBylink(req, res) {
  try {
    const handlePutData = await byLink.putDataInformation(
      req.body.status,
      req.body.pin
    )

    res.json(handlePutData)
  } catch (error) {
    res.json(error)
  }
}
