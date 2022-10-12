const {myHowdiesHtml} = require('../templates')

function get(req, res){
    console.log(req.params.id)
    const body = myHowdiesHtml(req.params.id);
    res.send(body)
}



module.exports = {get}