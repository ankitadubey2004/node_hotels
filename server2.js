const express = require('express');
const app = express();
const db =  require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // Middleware to parse JSON bodies

const Person  = require('./models/Person');  // Import the Person model
const MenuItem = require('./models/MenuItem');

// Root route
app.get('/', function (req, res) {
  res.send('Welcome to my Hotel.... How can I help you?');
});

// POST route to add a person
app.post('/person', async (req, res) => {
    try {
        const data = req.body;

        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});
// GET method to fetch all person data
app.get('/person', async (req, res)  => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);  // Return the fetched data
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET method to fetch all person data
app.get('/menu', async (req, res)  => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);  // Return the fetched data
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.post('/menu', async (req, res) => {
    try {
        const data = req.body;

        const newmenu = new MenuItem(data);

        // Save the new person to the database
        const response = await newmenu.save();
        console.log('data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }    
});

//Parameterized call of a person
app.get('/person/:workType' , async (req,res) => { //: colon lagane se [workType] variable ban gaya
    try{
        const workType = req.params.workType;
        if(workType == 'chef'|| workType == 'manager' || worktype == 'waitor'){
             const response = await Person.find({work : workType})  //yahan hum work mein kya pass er rahe worktype agar usko wor mil gaya
             console.log('response fetched');
             res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work Type'});
        }
    }catch{
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})


// Start the server on port 4000
app.listen(4000, () => {
    console.log('listening on port 4000');
});
