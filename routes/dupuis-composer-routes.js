/*
============================================
; Title: dupuis-composer-routes.js
; Author: Jocelyn Dupuis
; Date: 09/03/2023
; Description: MRouting for composers API assignment
============================================
*/

// Variables that require express, router, and composer model
const express = require('express'); 
const router = express.Router(); 
const Composer = require('../models/dupuis-composer'); 

/**
 * findAllComposers
 * @openapi
 * /api/composers
 * get:
 *   tags:
 *     - Composers
 *   description: API for returning an array of composer objects.
 *   summary: returns an array of composers in JSON format.
 *   responses: 
 *     '200':
 *       description: Array of composers
 *     '500':
 *       description: Server Exception
 *     '501':
 *       description: MongoDB Exception 
 */       
router.get('/composers', async(req, res) => {    
    try {
        // Finds all composers documents
        Composer.find({}, function(err, composers) {
            // If there's an error a error message is displayed
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            // If successful a list of all composers will be the response
            } else {
                console.log(composers);
                res.json(composers);
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
 * findComposerById
 * @openapi
 * /api/composers/:id
 * get:
 *   tags:
 *     - Composers
 *   description: API for returning a composer document.
 *   summary: returns a composer document.
 *   parameters:
 *     - name: id
 *       in: path
 *       required: true
 *       description: Composer document id
 *       schema:
 *         type: string      
 *   responses: 
 *     '200':
 *       description: Composer document
 *     '500':
 *       description: Server Exception
 *     '501':
 *       description: MongoDB Exception
 */   

router.get('/composers/:id', async(req, res) => {     
    try {
        // Finds a composer by id parameter
        Composer.findOne({'_id': req.params.id}, function(err, composer) {
            // If error occurs with MongoDB
            if (err) {                
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            // If successful composer document is displayed
            } else {
                console.log(composer);
                res.json(fruit);
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
 * createComposer
 * @openapi
 * /api/composer:
 *   post:
 *     tags:
 *       - Composer
 *     name: createComposer
 *     description: API for adding a new composer document to MongoDB Atlas
 *     summary: Creates a new composer document
 *     requestBody:
 *       description: Composer information
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - firstName
 *               - lastName
 *             properties:
 *               firstName
 *                 type: string
 *               lastName:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Composer document
 *       '500':
 *         description: Server Exception
 *       '501':
 *         description: MongoDB Exception
 */

router.post('/composers', async(req, res) => {
    try {
        // Creates a new composer object with request parameters
        const newComposer = {
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        await Composer.create(newComposer, function(err, composer) {
            // If error occurs with MongoDB
            if (err) {
                console.log(err);
                res.status(501).send({
                    'message': `MongoDB Exception: ${err}`
                })
            // If successful a new composer document is added
            } else {
                console.log(composer);
                res.json(composer);
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

// Exports router module
module.exports = router;