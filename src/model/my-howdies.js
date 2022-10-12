
const db = require("../database/db")

const get_my_howdies = db.prepare(/*sql*/ `
SELECT *
FROM howdies
WHERE user_id = ?
`)

function displayMyHowdies(user_id) {
    return get_my_howdies.all(user_id);
}

module.exports = { displayMyHowdies }