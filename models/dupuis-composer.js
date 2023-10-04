/*
============================================
; Title: dupuis-composer.js
; Author: Jocelyn Dupuis
; Date: 09/02/2023
; Description: Composer model for composers API assignment
============================================
*/

// Require mongoose 
const mongoose = require("mongoose");

// Create schema
const schema = mongoose.Schema;

// Defines new schema
const composerSchema = new schema({
    firstName: String,
    lastName: String,
});

// Exports model
module.exports = mongoose.model('Composer', composerSchema);