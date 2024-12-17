const mysql = require('mysql2');
require('dotenv').config(); // Load .env file variables

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Use environment variables
  user: process.env.DB_USER,         // Use environment variables
  password: process.env.DB_PASSWORD, // Use environment variables
  database: process.env.DB_NAME,     // Use environment variables
});

// Export the promise-based connection
module.exports = pool.promise();

