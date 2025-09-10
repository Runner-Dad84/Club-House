const pool = require('./pool');

//print all comments
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
//add new user
async function addUser(first, last, username, password) {
    const query = 'INSERT INTO members (first, last, username, password) VALUES ($1, $2, $3, $4)';
  await pool.query(query, [first, last, username, password]);
}






//sign in user
async function returnThisComment(id) {
  const { rows } = await pool.query('SELECT * FROM comments WHERE id=$1', [id]);
  return rows[0];
}

//add comment
async function addComment (comment, author) {
    const query = 'INSERT INTO comments (comment, author) VALUES ($1, $2)';
  await pool.query(query, [comment, author]);
}


module.exports = {
  returnAllComments,
  returnAllComments2,
  addUser,
};