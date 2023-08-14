/*
============================================
; Title: app.js
; Author: Jocelyn Dupuis
; Date: 08/10/2023
; Description: App file for project
============================================
*/

"use strict";

// Require statements for express, http, swaggerUI, swaggerJsdoc, and mongoose
const express = require('express');
const http = require('http');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const mongoose = require('mongoose');

// Variable named and assigned to express library
const app = express();

// PORT set 
const port = process.env.PORT || 3000;

// Sets app to use express.json and express.urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Defined object literal 
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
}

// Variable named to call the swagger Jsdoc library using options object literal
const openapiSpecification = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

http.createServer(app).listen(port, () => {
    console.log('Application started and listening on port ${port}');
});