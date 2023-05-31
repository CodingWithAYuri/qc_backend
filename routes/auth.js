const express = require('express');

const router = express.Router();

// Authenticate user based on email and password
function authenticateUser(email, password, callback) {
  const query = 'SELECT name, email FROM users WHERE email = ? AND password = ?';
  pool.query(query, [email, password], (error, results) => {
    if (error) {
      callback(error);
    } else if (results.length > 0) {
      callback(null, { success: true, user: results[0] });
    } else {
      callback(null, { success: false, message: 'Invalid email or password' });
    }
  });
}

// Endpoint for authenticating a user
router.post('/', (req, res) => {
  const { email, password } = req.body;
  authenticateUser(email, password, (error, result) => {
    if (error) {
      console.error(error)
      res.status(500).json({ success: false, message: 'Internal server error' });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
