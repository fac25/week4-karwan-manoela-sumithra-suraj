const { HomePage } = require("../templates");

function get(req, res) {
  const body = HomePage();
  res.send(body);
}

module.exports = { get };
