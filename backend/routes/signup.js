const express = require('express');
const router = express.Router();
const { User } = require('../models/User'); 

router.post('/', async (req, res) => {
  try {
    const { username, mobile, email, password } = req.body;
    const newUser = new User({ username, mobile, email, password });
    await newUser.save();
    res.status(200).json({ message: 'Registration completed successfully!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'User already exist with this *mail-id*' });
  }
});

module.exports = router;