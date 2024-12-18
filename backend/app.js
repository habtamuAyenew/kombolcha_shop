const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db'); // Import database connection
const userRoutes = require('./routes/userRoutes'); // Import user routes
require('dotenv').config();

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection
db.execute('SELECT 1')
  .then(() => console.log('Connected to the database successfully.'))
  .catch((err) => console.error('Database connection failed:', err));

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Kombolcha Textile API!');
});

// Mount User Routes
app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
