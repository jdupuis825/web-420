/*
============================================
; Title: dupuis-team.js
; Author: Jocelyn Dupuis
; Date: 10/07/2023
; Description: Model for Team API
============================================
*/

// Require mongoose
const mongoose = require("mongoose");

// Create schema
const schema = mongoose.Schema;

// Create schema for team
const teamSchema = new schema({
    name: String,
    mascot: String,
    players: [playerSchema],
});

const playerSchema = new schema({
    fistName: String,
    lastName: String,
    salary: Number,
});

// Exports model
const Teams = mongoose.model('Teams', teamSchema);
module.exports = Teams;
