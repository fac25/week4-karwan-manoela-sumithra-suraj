const {signInHtml, failedAttempt, checkForErrors} = require("../templates")
const {getUserByEmail} = require("../model/users.js")
const {createSessionAndCookies} = require("../model/cookieSession");
const bcrypt = require("bcryptjs")

function get(req, res) {
    const session = req.session;
    const body = signInHtml(session);
    res.send(body);
}

function post(req, res) {
    const {email, password} = req.body;

    let errors = checkForErrors({email, password});

    const formInputs = {
        email: "",
      }
    if(!password ){
       formInputs.email = email;
    }
    
    if((Object.keys(errors).length > 0)){
        return res.status(400).send(signInHtml(req.session, errors, formInputs));
    }
    
    const user = getUserByEmail(email); //returns an user object
    const userId = user?.id ;
    
    if (!user) {
        const body = failedAttempt("Login failed")
        return res.status(400).send(body);
    }
    // compare hashed password
    bcrypt.compare(password, user.hash).then((match) => {
        if(!match) return res.status(400).send(failedAttempt("Login failed"));
        createSessionAndCookies(res, userId);
        return res.redirect(`/my-howdies/${userId}`)
    })
}

module.exports = { get, post }
