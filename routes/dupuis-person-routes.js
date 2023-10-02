/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/09/2023
; Description: Routing for people
============================================
*/


// Variables to require express, router, and person model
const express = require('express');
const router = express.Router();
const Person = require('../models/dupuis-person');

// Operation GET: Person request
router.get('/persons', async (req, res) => {
    try {
      const persons = await Person.find();
      res.status(200).json(persons);
    } catch (error) {
      res.status(500).json({ message: 'Server Exception' });
    }
  });
  
// Operation POST: creates person request
router.post('/persons', async (req, res) => {
  const createPerson = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    roles: req.body.roles,
    dependents: req.body.dependents,
    birthDate: req.body.birthDate,
  });
  try {
    await createPerson.save();
    res.status(200).json(createPerson);
  } catch (error) {
    res.status(500).json({ message: 'Server Exception' });
  }
});

// Exports router
module.exports = router;

















/**
 * findAllPersons
 * @openapi
 * /api/persons:
 *   get:
 *     tags:
 *       - Persons
 *     description: API for returning an array of person objects
 *     summary: Returns an array of persons in JSON 
 *     responses:
 *       '200':
 *         description: Array of person documents
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */
router.get('/persons', async(req, res) => {
    try {
        // Finds all composers documents
        person.find({}, function(err, persons) {
            // If there's an error a error message is displayed
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
             // If successful a list of all composers will be the response
            } else {
                console.log(persons);
                res.json(persons);
            }
        })
    // If error occurs with server a server error message is displayed
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

/**
 * createPerson
 * @openapi
 * /api/persons:
 *   post:
 *     tags:
 *       - Persons
 *     name: createPerson
 *     description: API for adding new persons document to MongoDB
 *     summary: Creates new persons document
 *     requestBody:
 *       description: persons information
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - firstName
 *               - lastName
 *               - roles
 *               - dependents
 *               - birthDate
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               roles:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     text:
 *                       type: string
 *               dependents:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     firstName:
 *                       type: string
 *                     lastName:
 *                       type: string
 *               birthDate:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Array of person documents
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */
router.post('/persons', async(req, res) => {
    try {
        // Creates new person object using the request's parameters
        const newPerson = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            roles: req.body.roles,
            dependents: req.body.dependents,
            birthDate: req.body.birthDate
        }

        // Waiting for a response from the server
        await person.create(newPerson, function(err, person) {
            // If there's an error a error message is displayed
            if (err) {
                // If there's an error a error message is displayed
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            // If successful a list of all composers will be the response
            } else {
                console.log(person);
                res.json(person);
            }
        })
    // If error occurs with server a server error message is displayed
    } catch (e) {
        console.log(e);
        res.status(500).send({
            'message': `Server Exception: ${e.message}`
        })
    }
})

// Exports person module
module.exports = router;