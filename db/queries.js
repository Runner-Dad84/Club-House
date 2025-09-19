const pool = require('./pool');

//print all comments (defuct)
async function returnAllComments() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
//prints all comments
async function returnAllComments2 () {
  const query = 'SELECT members.username, messages.message, messages.created_at FROM members JOIN messages ON members.member_id = messages.msg_id';
  const { rows } = await pool.query(query);
  return rows;

}
//add new user (defunct)
async function addUser(first, last, username, password, admin) {
    const query = 'INSERT INTO members (first, last, username, password) VALUES ($1, $2, $3, $4, $5)';
  await pool.query(query, [first, last, username, password]);
}

//add new user with status
async function addUser2(first, last, username, password, userInput, admin) {
    pass_code = 'membercode';
    const query = "INSERT INTO members (first, last, username, password, status) VALUES ($1, $2, $3, $4, CASE WHEN $5 = $6 THEN 'Member' ELSE 'Non-member', $7 END)";
    const values = [first, last, username, password, userInput, pass_code, admin]
  await pool.query(query, values);
}

//add comment
async function insertMessage (message, msg_id) {
  const query = 'INSERT INTO messages (message, msg_id) VALUES ($1, $2)';
  await pool.query(query, [message, msg_id]);
}





//NOt using yet below this line!
async function returnThisComment(id) {
  const { rows } = await pool.query('SELECT * FROM comments WHERE id=$1', [id]);
  return rows[0];
}




module.exports = {
  returnAllComments2,
  addUser2,
  insertMessage
};