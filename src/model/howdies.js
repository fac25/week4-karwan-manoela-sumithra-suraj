const db = require("../database/db");

const get_howdies = db.prepare(/*sql*/ `
SELECT *,
users.username AS username
FROM howdies JOIN users ON howdies.user_id = users.id
`);

function displayHowdies() {
  return get_howdies.all();
}

module.exports = { displayHowdies };
