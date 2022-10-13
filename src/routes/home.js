const { HomePage } = require("../templates");

function get(req, res) {
  const session = req.session;
  const body = HomePage(session);
  res.send(body);
}

module.exports = { get };
