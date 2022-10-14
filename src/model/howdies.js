const db = require("../database/db");

const get_howdies = db.prepare(/*sql*/ `
SELECT 
title,
content,
image_src,
user_id,
howdies.created_at,
users.username AS username
FROM howdies JOIN users ON howdies.user_id = users.id
`);

function displayHowdies() {
  return get_howdies.all();
}

module.exports = { displayHowdies };
