const {signUpHtml} = require("../templates")
const {createSessionAndCookies} = require("../model/cookieSession");
const {createUser, getUserByEmail} = require('../model/users');

const bcrypt = require('bcryptjs');

function get(req, res) {
    const body = signUpHtml();
    res.send(body);
}

function post(req,res){
    const {username, email, password} = req.body;

    const existingUser = getUserByEmail(email); 

    if(existingUser) return res.redirect('/');

    bcrypt.hash(password, 12).then((hashedPwd)=>{
        const user = createUser(username, email,hashedPwd);
        createSessionAndCookies(res, user.id);
        res.redirect(`/my-howdies/${user.id}`);
    });

}

module.exports = {get, post}