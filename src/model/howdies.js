const db = require("../database/db");

const get_howdies = db.prepare(/*sql*/ `
SELECT 
id,
title,
content,
image_src,
user_id, --- Do we need this?
created_at, --- Do we need this?
users.username AS username
FROM howdies JOIN users ON howdies.user_id = users.id
`);

function displayHowdies() {
  return get_howdies.all();
}

module.exports = { displayHowdies };
