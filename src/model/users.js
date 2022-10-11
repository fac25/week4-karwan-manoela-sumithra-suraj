const db = require("../database/db.js")

const get_user_by_email = db.prepare(/*sql*/`
SELECT *
FROM users 
WHERE email = ?
`)

function getUserByEmail(email) {
    return get_user_by_email.get(email);
}

module.exports = { getUserByEmail }