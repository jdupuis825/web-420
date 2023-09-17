/*
============================================
; Title: dupuis-session-routes.js
; Author: Jocelyn Dupuis
; Date: 09/17/2023
; Description: Routing for sessions
============================================
*/

// Requires express, user model, bcrypt, and declares router 
const express = require('express');
const User = require('../models/dupuis-user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Variable for saltRounds
const saltRounds = 10;

router.post('/signup', async (req, res) => {
    try {
        const { userName, password, emailAddress } = req.body;

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(401).json({ message: 'Username is already in use' });
        }

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            userName,
            password: hashedPassword,
            emailAddress,
        });

        await newUser.save();

        res.status(200).json({ message: 'Registered user' });
    }   catch (error) {
        res.status(500).json({ message: 'Server Exception' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { userName, password } = req.body;

        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username and/or password' });
        }

        const passwordIsValid = bcrypt.compare(password, user.password);

        if (passwordIsValid) {
            res.status(200).json({ message: 'User logged in' });
        } else {
            res.status(401).json({ message: 'Invalid username and/or password' });
        }
    }   catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Exception' });
    }
});

module.exports = router;