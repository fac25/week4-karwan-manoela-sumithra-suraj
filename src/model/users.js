const db = require("../database/db");

const insert_user = db.prepare(/*sql*/`
INSERT INTO users (username, email, hash)
VALUES ($username, $email, $hash)
RETURNING id
`);

function createUser(username, email, hash){
    return insert_user.get({username, email, hash});
}

const select_user = db.prepare(/*sql*/`
SELECT id, username, email, hash, created_At
FROM users
WHERE email = $email
`);

function getUserByEmail(email){
    return select_user.get({email});

}

module.exports = {getUserByEmail, createUser}