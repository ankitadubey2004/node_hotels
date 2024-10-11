const express = require('express');
const app = express();
const db = require('./db'); // Import the MongoDB connection
require('dotenv').config();

// Midnpm dleware to parse JSON bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000; //iska matlab agr hum apne node ko kisi online server pe host kerte hein to vo apna port no. deta hai aur vo normally usi mein host hota hai ,,BUT IF PORT NO define nahi hai to iska matlab pe locally run ker raha like 4000 pe

app.get('/', (req, res) => {
  res.send('Welcome to our Hotel!!');
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person', personRoutes); // Routes for person
app.use('/menu', menuItemRoutes); // Corrected: Routes for menu

// Start the server on port 4000
app.listen(4000, () => {
  console.log('listening on port 4000');
});