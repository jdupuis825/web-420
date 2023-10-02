/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/14/2023
; Description: Model for user API
============================================
*/

// require mongoose 
const mongoose = require('mongoose');

// Create schema
const Schema = mongoose.Schema;

// New user schema with username, password, and  an email address
const userSchema = new Schema({
    username: String,
    password: String,
    emailAddress: [{type: String, unique: true}],
});

// Declares user model
const User = mongoose.model('User', userSchema);

// Exports model
module.exports = User;