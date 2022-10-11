const {Layout, signUpHtml} = require("../templates")

function get(req, res) {
    const {title, content} = signUpHtml();
    const body = Layout({title, content})
    res.send(body);
}

module.exports = {get}