const { removeSession } = require("../model/sessions");

function post(req, res) {
  removeSession(req.signedCookies.sid);
  res.clearCookie("sid");

  res.redirect("/");
}

module.exports = { post };
