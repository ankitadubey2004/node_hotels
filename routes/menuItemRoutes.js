 const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');


// GET all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Menu data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET menu items by taste (sweet, spicy, sour)
router.get('/:taste', async (req, res) => {  // Corrected taste parameter extraction
    try {
        const taste = req.params.taste;
        if (taste === 'sweet' || taste === 'spicy' || taste === 'sour') {
            const response = await MenuItem.find({ taste });  // Query based on taste field
            console.log('Response fetched');
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste type' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST new menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newmenu = new MenuItem(data);
        const response = await newmenu.save();
        console.log('Menu data saved');
        res.status(201).json(response);  // Use 201 for creation success
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT (update) menu item by ID
router.put('/:id', async (req, res) => {
  try {
    const menuItemId = req.params.id; // Extract the ID from the URL parameter
    const updatedMenuItemData = req.body; // Get the data to update from the request body
    
    // Find the menu item by ID and update it
    const response = await MenuItem.findByIdAndUpdate(menuItemId, updatedMenuItemData, {
      new: true, // Return the updated document
      runValidators: true, // Run mongoose validation
    });

    if (!response) { // If no response, the item was not found
      return res.status(404).json({ error: 'Item not found' });
    }

    console.log('Menu item updated');
    res.status(200).json(response); // Return the updated menu item
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE menu item by ID
router.delete('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id; // Extract the ID from the URL parameter

        const response = await MenuItem.findByIdAndDelete(menuItemId);

        if (!response) {  // Check if the item was found
            return res.status(404).json({ error: 'Item not found' });
        }

        console.log('Item deleted successfully');
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//commend added
module.exports = router;