const {signInHtml, signUpFailed} = require("../templates")
const {getUserByEmail} = require("../model/users.js")
const bcrypt = require("bcryptjs")

function get(req, res) {
    const body = signInHtml();
    res.send(body);
}

function post(req, res) {
    const {email, password} = req.body;
    // const user = getUserByEmail(email); //returns an user object
    const user = {
        "id": 1,
        "email": "man@abv.com",
        "hash": "123"
    }
    const userId = user?.id ;
    console.log(userId)
    if (!user) {
        const body = signUpFailed()
        return res.status(400).send(body);
    }
    // compare hashed password
    bcrypt.compare(password, user.hash).then((match) => {
        if(!match) return res.status(400).send(signUpFailed());
        const sid = createSession(userId);
        res.cookie("sid", sid, {
            signed: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            sameSite: "lax",
            httpOnly: true
        })
        return res.status(400).redirect(`/my-howdies?id=${userId}`)
    })
}

module.exports = { get, post }