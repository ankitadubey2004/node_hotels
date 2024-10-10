const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');  // Import the Person model

// POST route to add a person
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('Person data saved');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET method to fetch all person data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Person data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET method to fetch person data by workType (chef, manager, waitor)
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === 'chef' || workType === 'manager' || workType === 'waitor') {
            const response = await Person.find({ work: workType });
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; //Extract the  id from the URL parameter
        const updatedPersonData = req.body; //The data which we want to update on a person 
        
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData,{ // yahan pe do version honge ek update hone ke pehle aur e update hone ke baad ka
            new : true, //Return the updated document
            runValidators : true, //Run mongoose validation
        }) 

        if(!response){  //if response kuch aa hi nahi raha aur kyuki jo id hum de rahe vo present hi nahi to kya update hogi to vo return karegi 'Person not found'
            return res.status(404).json({error: 'Person not found'}); 
        }
        console.log('data updated');
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the ID from the URL parameter
        
        // Using findByIdAndDelete instead of findByIdAndRemove
        const response = await Person.findByIdAndDelete(personId);

        if (!response) { // If no response, it means the person was not found
            return res.status(404).json({ error: 'Person not found' });
        }

        console.log('Person deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
