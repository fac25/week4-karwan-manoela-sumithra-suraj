const {signInHtml, signUpFailed} = require("../templates")

function get(req, res) {
    const body = signInHtml();
    res.send(body);
}

function post(req, res) {
    const {email, password} = req.body;
    // const user = getUserByEmail(email);
    const userId = user?.id ;
    console.log(userId)
    if (!user) {
        const body = signUpFailed()
        return res.status(400).send(body);
    }

    res.status(400).redirect("/home")
}

module.exports = { get, post }