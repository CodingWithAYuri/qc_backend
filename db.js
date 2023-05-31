const mysql = require('mysql2');

// Set up a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'myapp'
});

module.exports = pool;
