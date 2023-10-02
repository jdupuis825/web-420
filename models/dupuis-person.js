/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/09/2023
; Description: Routing for person API
============================================
*/


// Require mongoose 
const mongoose = require('mongoose');

// Create schema
const Schema = mongoose.Schema;

// New schema 
const roleSchema = new Schema({
    text: String,
});

// Dependent schema with fields for firstName and lastName
const dependentSchema = new Schema({
    firstName: String,
    lastName: String,
});

// Person scheme with firstName and lastName fields, roles, dependents, and birth date
const personSchema = new Schema({
    firstName: String,
    lastName: String,
    roles: [roleSchema],
    dependents: [dependentSchema],
    birthDate: String,
});

// Declare Person model
 const Person = mongoose.model('Person', personSchema);

 // Exports model
 module.exports = Person;