const express = require('express');
const app = express();
const db =  require('./db');

// Root route
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel.... How can I help you?');
});

// Start the server on port 3000
app.listen(4000, () => {
    console.log('listening on port 4000');
});
