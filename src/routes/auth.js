const { getSessionId } = require("../model/sessions");

function session(req, res, next) {
  const session_id = req.signedCookies.sid;
  const session = getSessionId(session_id);
  req.session = session;
  next()
}

module.exports = { session };
