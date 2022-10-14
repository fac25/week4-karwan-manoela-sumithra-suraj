const {signUpHtml} = require("../templates")
const {createSessionAndCookies} = require("../model/cookieSession");
const {createUser, getUserByEmail} = require('../model/users');

const bcrypt = require('bcryptjs');

function get(req, res) {
    const session = req.session;
    const body = signUpHtml(session);
    res.send(body);
}

function post(req,res){
    const {username, email, password} = req.body;

    const formInputs = {
        username: "",
        email: "",
      }


    let error={};
    let errFlag = false;
    if(!username ){
        error.username = "Please enter your username";
        errFlag = true;
        formInputs.email = email;
    }
    if(!email){
        error.email = "Please enter your email";
        errFlag = true;
        formInputs.username = username;
    }
    if(!password){
        error.password = "Please enter a password"
        errFlag=true;
    }
    
    if(errFlag){
        return res.status(400).send(signUpHtml(req.session, error, formInputs));
    }
    
    const existingUser = getUserByEmail(email); 
    if(existingUser) return res.redirect('/login');

    bcrypt.hash(password, 12).then((hashedPwd)=>{
        const user = createUser(username, email,hashedPwd);
        createSessionAndCookies(res, user.id);
        res.redirect(`/my-howdies/${user.id}`);
    });

}

module.exports = {get, post}