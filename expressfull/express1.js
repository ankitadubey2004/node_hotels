const express = require('express');
const app = express();

// Root route
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel.... How can I help you?');
});

// Chicken route
app.get('/Chicken', (req, res) => {
    res.send('Sure sir, I would love to serve you chicken');
});

// Idli route
app.get('/idli', (req, res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_shambhar: true,
        is_chutney: false
    };
    res.send(customized_idli);
});

app.post('/items', (req, res) => {
    res.send('Data is saved successfully');
});

// Start the server on port 3000
app.listen(4000, () => {
    console.log('listening on port 4000');
});
