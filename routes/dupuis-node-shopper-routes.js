/*
============================================
; Title: dupuis-node-shopper-routes.js
; Author: Jocelyn Dupuis
; Date: 09/22/2023
; Description: Routing for node shopper
============================================
*/


// Require 
const express = require("express");
const router = express.Router();
const Customer = require("../models/dupuis-customer");


// Operation: POST createCustomer
router.post("/customers", async (req, res) => {
  try {
    const newCustomer = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
    };
    const customer = await Customer.create(newCustomer);
    res
      .status(200)
      .json({ message: "Customer added to MongoDB", data: customer });
  } catch (error) {
    // Debug 
    console.error(error); 
    if (error.name === "MongoDBError") {
      res.status(501).json({ message: "MongoDB Exception", error: error });
    } else {
      res.status(500).json({ message: "Server Exception", error: error });
    }
  }
});

// Operation: POST: createInvoiceByUserName
router.post("/customers/:username/invoices", async (req, res) => {
  try {
    // Error handling
    console.log(`Querying username: ${req.params.username}`);

    const customer = await Customer.findOne({ userName: req.params.username });
    if (!customer) {
      return res.status(404).json({ message: "User not found" });
    }
    // New invoice
    const newInvoice = {
      subtotal: req.body.subtotal,
      tax: req.body.tax,
      dateCreated: req.body.dateCreated,
      dateShipped: req.body.dateShipped,
      lineItems: req.body.lineItems,
    };

    // Invoice for customer
    customer.invoices.push(newInvoice);
    await customer.save();
    res
      .status(200)
      .json({ message: "Invoice added to MongoDB", data: newInvoice });
  } catch (error) {
    console.error(error);
    if (error.name === "MongoError") {
      res.status(501).json({ message: "MongoDB Exception", error: error });
    } else {
      res.status(500).json({ message: "Server Exception", error: error });
    }
  }
});

// Operation: GET findAllInvoicesByUserName
router.get("/customers/:username/invoices", async (req, res) => {
  try {
    const customer = await Customer.findOne({ userName: req.params.username });
    if (customer) {
      res
        .status(200)
        .json({
          message: "Invoices retrieved successfully",
          data: customer.invoices,
        });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    // Debug 
    console.error("Error:", error); 
    if (error.name === "MongoError") {
      res.status(501).json({ message: "MongoDB Exception", error: error });
    } else {
      res.status(500).json({ message: "Server Exception", error: error });
    }
  }
});

// Exports router
module.exports = router;