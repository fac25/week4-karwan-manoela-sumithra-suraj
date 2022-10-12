const { getSessionId } = require("../model/sessions");
const { NavBar } = require("../templates");

function get(req, res) {
  const session_id = req.signedCookies.sid;
  const session = getSessionId(session_id);

  if (session) {
    const body = NavBar(session);
    res.send(body);
  }
}

module.exports = { get };
