const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
pool = require('./db');

// Enable CORS for http://localhost:8000
const app = express();
app.use(cors({
  origin: 'http://localhost:8000' // frontend
}));

// Add routes
const authRoutes = require('./routes/auth');
const registerRoutes = require('./routes/register');

// Set up middleware to parse JSON requests
app.use(bodyParser.json());

// Mount authentication and registration routes
app.use('/auth', authRoutes);
app.use('/register', registerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
