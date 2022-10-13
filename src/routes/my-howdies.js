const {myHowdiesHtml, signUpFailed} = require('../templates')
const { insertHowdie } = require("../model/my-howdies");
const { getUserByEmail } = require('../model/users');

function get(req, res){
    const session = req.session;
    const user_id = session?.user_id;
    const currentUser = req.params.id;
    console.log(currentUser+"," + user_id )

    if(!session || user_id != currentUser ) {
        return res.status(400).send(signUpFailed("You are not authorised to see this"))
    }
    const body = myHowdiesHtml(req.params.id, session);
    res.send(body)
}

function post(req, res) {
    const image = req.file
    // const img_path = "../images/" + image.path
    const img_path = image.path.replace("public", "..")
    const {title, content, } = req.body

    // TO DO: get user_id from session
    const user_id = req.params.id

    // req.file.mimetype .jpg
    // get user_id
    const date = insertHowdie(title, content, img_path, user_id).created_at;
    res.redirect(`/my-howdies/${user_id}`)
}

module.exports = {get, post}
