const mongoose = require('mongoose');

// Define the MongoDB URL
const mongoURL = 'mongodb://localhost:27017/hotel'; // Correct port, 'hotel' is the database

mongoose.connect(mongoURL, {
    useNewUrlParser: true,   // Correct spelling of the option
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
