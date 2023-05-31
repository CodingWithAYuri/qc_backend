const express = require('express');

const router = express.Router();

// Register a new user
function registerUser(name, email, password, callback) {
  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  pool.query(query, [name, email, password], (error, result) => {
    if (error) {
      callback(error);
    } else {
      const user = { id: result.insertId, name, email };
      callback(null, { success: true, user });
    }
  });
}

// Endpoint for registering a new user
router.post('/', (req, res) => {
  const { name, email, password } = req.body;
  registerUser(name, email, password, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
