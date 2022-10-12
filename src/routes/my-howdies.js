const {myHowdiesHtml} = require('../templates')
const { insertHowdie } = require("../model/my-howdies")

function get(req, res){
    console.log(req.params.id)
    const body = myHowdiesHtml(req.params.id);
    res.send(body)
}

function post(req, res) {
    const image = req.file
    // const img_path = "../images/" + image.path
    const img_path = image.path.replace("public", "..")
    const {title, content, } = req.body

    // TO DO: get user_id from session
    const user_id = req.params.id
    console.log(req.body)

    // req.file.mimetype .jpg
    // get user_id
    const date = insertHowdie(title, content, img_path, user_id).created_at;
    res.redirect(`/my-howdies/${user_id}`)
}

module.exports = {get, post}