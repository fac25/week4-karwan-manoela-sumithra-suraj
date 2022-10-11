const {Layout, signUpHtml} = require("../templates")

function get(req, res) {
    const body = signUpHtml();
    res.send(body);
}

module.exports = {get}