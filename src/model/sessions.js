const db = require('../database/db.js')
const crypto = require('node:crypto')

const insert_session = db.prepare(/*sql */`
    INSERT INTO sessions (id, user_id, expires_at)
    VALUES ($id, $user_id, DATE('now' + '7 days')) 
    `
)

function createSession(user_id){
    const id = crypto.randomBytes(18).toString('base64')
    insert_session.run({id, user_id})
    return id
}

module.exports = {createSession}