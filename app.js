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

// Require composer and person API from routes file
const composerAPI = require('./routes/dupuis-composer-routes');
const Composer = require('./models/dupuis-composer');
const Person = require('./models/dupuis-person');
const personAPI = require('./routes/dupuis-person-routes');
const userAPI = require('./routes/dupuis-user-routes');
const customerAPI = require('./routes/dupuis-node-shopper-routes');

// MongoDB connection string
const conn = 'mongodb+srv://web420_user:s3cret@bellevueuniversity.t2iiezr.mongodb.net/web420DB';

// Connect to MongoDB
mongoose
  .connect(conn)
  .then(() => {
    console.log("Connection to MongoDB was successful");
  })
  .catch((err) => {
    console.log("MongoDB ERROR! ", err);
  });

// Defined object literal 
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'WEB 420 RESTful APIs',
            version: '1.0.0',
        },
    },
    apis: ['./docs/dupuis-composers.yaml',
           './docs/dupuis-persons.yaml',
           './docs/dupuis-users.yaml',
           './docs/dupuis-customers.yaml'],
};

// Variable named to call the swagger Jsdoc library using options object literal
const openapiSpecification = swaggerjsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

// Use composer and person APIs
app.use('/api', composerAPI);
app.use('/api', personAPI);
app.use('/api', userAPI);
app.use('/api', customerAPI);

http.createServer(app).listen(app.get('port'), function() {
    console.log(`Application started and listening on port ${app.get('port')}`);
});

