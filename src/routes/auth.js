const { getSession } = require("../model/sessions");

function session(req, res, next) {
  const session_id = req.signedCookies.sid;
  const session = getSession(session_id);
  req.session = session;
  next()
}

module.exports = { session };
