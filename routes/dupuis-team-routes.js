/*
============================================
; Title: dupuis-team-routes.js
; Author: Jocelyn Dupuis
; Date: 10/07/2023
; Description: Routing for team API 
============================================
*/


const express = require('express');
const router = express.Router();
const Teams = require('../models/dupuis-team');

// Operation GET: find all teams
router.get('/teams', async (_req, res) => {
  try {
    // Finds all team documents 
    const teams = await Teams.find();
    res.status(200).json(teams);
    // Error message is displayed
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Operation POST: assigns player to team
router.post('/teams/:id/players', async (req, res) => {
  const teamId = req.params.id;
  try {
    const team = await Teams.findById(teamId);
    if (team) {
      team.players.push({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        salary: req.body.salary
      });
      await team.save();
      res.status(200).json(team);
    } else {
      res.status(401).json({ message: 'Invalid teamId' });
    }
    // Error message is displayed
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Operation GET: finds player by team id
router.get('/teams/:id/players', async (req, res) => {
  const teamId = req.params.id;
  try {
    const team = await Teams.findById(teamId);
    if (team) {
      res.status(200).json(team.players);
    } else {
      res.status(401).json({ message: 'Invalid teamId' });
    }
    // Error message is displayed
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Operation DELETE: deletes team by id
router.delete('/teams/:id', async (req, res) => {
  const teamId = req.params.id;
  try {
    const deletedTeam = await Teams.findByIdAndDelete(teamId);
    if (deletedTeam) {
      res.status(200).json(deletedTeam);
    } else {
      res.status(401).json({ message: 'Invalid teamId' });
    }
    // Error message is displayed
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Exports router
module.exports = router;




































