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
const Schema = mongoose.Schema;

// Create schema for player
const playerSchema = new Schema({
    fistName: String,
    lastName: String,
    salary: Number,
});

// Create schema for team
const teamSchema = new Schema({
    name: String,
    mascot: String,
    players: [playerSchema],
});

// Exports model
const Teams = mongoose.model('Teams', teamSchema);
module.exports = Teams;
