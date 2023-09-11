/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/09/2023
; Description: Routing for person API
============================================
*/


// Variables to require mongoose and create schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// New role schema with text field
let roleSchema = new Schema({
    text: { type: String }
});

// Dependent schema with fields for firstName and lastName
let dependentSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String }
});

// Person scheme with firstName and lastName fields, roles, dependents, and birth date
let PersonSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    roles: [roleSchema],
    dependents: [dependentSchema],
    birthDate: { type: String }
});

// Exports Person model
module.exports = mongoose.model('Person', PersonSchema);