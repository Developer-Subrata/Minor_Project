const express = require('express');
const { Contact } = require('../models/User'); // Adjust the import as per your models structure

const router = express.Router();

router.post('/', async (req, res) => {
    const { name, email, subject, message} = req.body;
    const newContact = new Contact({
        name,
        email,
        subject,
        message
    });
    try {
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);
    } catch (error) {
        res.status(500).json({ message: 'Failed to Contact', error });
    }
});

module.exports = router;


