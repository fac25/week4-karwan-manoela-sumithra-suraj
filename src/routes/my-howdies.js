const {myHowdiesHtml, signUpFailed, sanitise} = require('../templates')
const { insertHowdie } = require("../model/my-howdies");

function get(req, res){
    const session = req.session;
    const user_id = session?.user_id;
    const currentUser = req.params.id;

    if(!session || user_id != currentUser ) {
        return res.status(400).send(signUpFailed("You are not authorised to see this"))
    }
    const body = myHowdiesHtml(req.params.id, session);
    res.send(body)
}

function post(req, res) {
    
    const {title, content } = req.body
    const image = req.file // const img_path = "../images/" + image.path

    const user_id = req.session.user_id;

    let error={};
    let errFlag = false;
    if(!title ){
        error.title = "Please enter the title";
        errFlag = true;
    }
    if(!content){
        error.content = "Please enter the content";
        errFlag = true;
    }
  
    if(!image){
        error.image = "Please upload the image";
        errFlag = true;
    }
    
    
    if(errFlag){
        return res.status(400).send(myHowdiesHtml(user_id, req.session, error));
    }
    
    const img_path = image.path.replace("public", "..")

    

    // req.file.mimetype .jpg
    // get user_id
    const date = insertHowdie(sanitise(title), sanitise(content), img_path, user_id).created_at;
    res.redirect(`/my-howdies/${user_id}`)
}

module.exports = {get, post}
