const {signInHtml, signUpFailed} = require("../templates")
const {getUserByEmail} = require("../model/users.js")
const {createSessionAndCookies} = require("../model/cookieSession");
const bcrypt = require("bcryptjs")

function get(req, res) {
    const body = signInHtml();
    res.send(body);
}

function post(req, res) {
    const {email, password} = req.body;
    const user = getUserByEmail(email); //returns an user object
    const userId = user?.id ;
    
    if (!user) {
        const body = signUpFailed()
        return res.status(400).send(body);
    }
    // compare hashed password
    bcrypt.compare(password, user.hash).then((match) => {
        if(!match) return res.status(400).send(signUpFailed());
        createSessionAndCookies(res, userId);
        return res.redirect(`/my-howdies/${userId}`)
    })
}

module.exports = { get, post }
