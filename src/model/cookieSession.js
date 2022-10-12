const {createSession} = require('./sessions')

function createSessionAndCookies(res, userId){
    const sid = createSession(userId);
    res.cookie("sid", sid,{
        signed: true,
        httpOnly: true,
        maxAge: 24*60*60*1000,
        sameSite:"lax"
 });
}

module.exports = {createSessionAndCookies}
