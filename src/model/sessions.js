const db = require("../database/db.js");
const crypto = require("node:crypto");

const insert_session = db.prepare(/*sql */ `
    INSERT INTO sessions (id, user_id, expires_at)
    VALUES ($id, $user_id, DATE('now' + '7 days')) 
    `);

function createSession(user_id) {
  const id = crypto.randomBytes(18).toString("base64");
  insert_session.run({ id, user_id });
  return id;
}

// Deletes Sessions
const delete_session = db.prepare(/*sql*/ `
DELETE FROM sessions 
WHERE id = ?
`);

function removeSession(sid) {
  return delete_session.run(sid);
}

// Gets Sessions
const get_session = db.prepare(/*sql*/ `
  SELECT * FROM sessions 
  WHERE id = ?
`);
function getSession(sid) {
  return get_session.get(sid);
}

// Exports
module.exports = { createSession, removeSession, getSession };
