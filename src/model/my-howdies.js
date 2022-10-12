
const db = require("../database/db")

const get_my_howdies = db.prepare(/*sql*/ `
SELECT *
FROM howdies
WHERE user_id = ?
`)

function displayMyHowdies(user_id) {
    return get_my_howdies.all(user_id);
}

const insert_howdie = db.prepare(/*sql*/ `
    INSERT into howdies (title, content, image_src, user_id)
    VALUES (
        $title,
        $content,
        $img_src,
        $user_id
    )
    RETURNING created_at
`)

function insertHowdie(title, content, img_src, user_id) {
    return insert_howdie.get({title, content, img_src, user_id});
};

module.exports = { displayMyHowdies, insertHowdie }