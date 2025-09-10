const { Pool } = require('pg');

const pool = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "runnerdad84",
  database: "clubhouse_database",
  password: "Scarborough-02!",
  port: 5432 // The default port
});

async function connectDB() {
  try {
    await pool.query("SELECT NOW()");
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // exit explicitly so you know why
  }
}

connectDB();

module.exports = pool;