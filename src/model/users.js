
const db = require("../database/db.js")

const get_user_by_email = db.prepare(/*sql*/`
SELECT *
FROM users 
WHERE email = ?
`)

function getUserByEmail(email) {
    return get_user_by_email.get(email);
}

const insert_user = db.prepare(/*sql*/`
INSERT INTO users (username, email, hash)
VALUES ($username, $email, $hash)
RETURNING id
`);

function createUser(username, email, hash){
    return insert_user.get({username, email, hash});
}

module.exports = {getUserByEmail, createUser}
