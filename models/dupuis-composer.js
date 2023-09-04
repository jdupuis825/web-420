/*
============================================
; Title: dupuis-composer.js
; Author: Jocelyn Dupuis
; Date: 09/02/2023
; Description: Mongoose model for composers API assignment
============================================
*/

// Imports mongoose models and 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defines new mongoose schema
let composerSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String }
});

// Exports mongoose model
module.exports = mongoose.model('Composer', composerSchema);