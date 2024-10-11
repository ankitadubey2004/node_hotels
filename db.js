const mongoose = require('mongoose');
require('dotenv').config();


// Define the MongoDB URL
// const mongoURL = 'mongodb://localhost:27017/hotel'; // Correct port, 'hotel' is the database
// const mongoURL = 'mongodb+srv://AnkitaDubey:ankita_0404@cluster0.xm2n9.mongodb.net/';
const mongoURL = process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    useNewUrlParser: true,   
    useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for the database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;