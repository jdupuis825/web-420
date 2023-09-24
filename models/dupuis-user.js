/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/14/2023
; Description: Model for user API
============================================
*/

// Variable to require mongoose 
const mongoose = require('mongoose');

// Variable to create schema
const Schema = mongoose.Schema;

// Declares new user schema with username, password, and  an email address
let userSchema = new Schema({
    username: { type: String },
    password: { type: String },
    emailAddress: { type: Array }
});

// Exports user model
module.exports = mongoose.model('User', userSchema);