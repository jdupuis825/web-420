/*
============================================
; Title: dupuis-composer-routes.js
; Author: Jocelyn Dupuis
; Date: 09/03/2023
; Description: Routing for composers API assignment
============================================
*/

// Variables that require express, router, and composer model
const express = require("express"); 
const router = express.Router(); 
const Composer = require("../models/dupuis-composer"); 



// Operation GET: find composers
router.get("/composers", async (_req, res) => {
    try {
      // Finds all composers documents
      const composers = await Composer.find();
      res.status(200).json(composers);
      // Error message is displayed
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Operation GET: composer by id parameter
  router.get("/composers/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const composer = await Composer.findById(id);
      res.status(200).json(composer);
       // Error message is displayed
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Operation POST: creates new composer object with request parameters
  router.post("/composers", async (req, res) => {
    const composer = new Composer({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    try {
      await composer.save();
      res.status(201).json(composer);
      // Error message is displayed
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Operation PUT: composers request
  router.put("/composers/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const composer = await Composer.findOne({ _id: id });
      if (composer) {
        composer.set({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
        });
        const savedComposer = await composer.save();
        res.status(200).json(savedComposer);
      } else {
        // Return 401 status when composer doesn't exist
        res.status(401).json({ message: "Invalid composerId" });
      }
      // Error message is displayed
    } catch (error) {
      if (error.name === "MongoError") {
        res.status(501).json({ message: "MongoDB Exception" });
      } else {
        res.status(500).json({ message: "Server Exception" });
      }
    }
  });
  
  // Operation DELETE: composers request
  router.delete("/composers/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deletedComposer = await Composer.findByIdAndDelete(id);
      if (deletedComposer) {
        res.status(200).json(deletedComposer);
      } else {
        res.status(500).json({ message: "Composer not found" });
      }
    } catch (error) {
      if (error.name === "MongoError") {
        res.status(501).json({ message: "MongoDB Exception" });
      } else {
        res.status(500).json({ message: "Server Exception" });
      }
    }
  });
  
  // Exports router
  module.exports = router;

