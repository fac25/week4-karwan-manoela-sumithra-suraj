const { getSessionId } = require("../model/sessions");

function get(req, res) {
  const session_id = req.signedCookies.sid;
  const session = getSessionId(session_id);

  if (session) {
    return res.redirect("/home");
  }
}

module.exports = { get };
