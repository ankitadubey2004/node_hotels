const express = require('express');
const app = express();
const db = require('./db'); // Import the MongoDB connection
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to our Hotel!!');
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
// app.use('/person', personRoutes); // Routes for person
app.use('/menu', menuItemRoutes); // Corrected: Routes for menu

// Start the server on port 4000
app.listen(4000, () => {
  console.log('listening on port 4000');
});
