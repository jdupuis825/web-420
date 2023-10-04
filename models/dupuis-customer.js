/*
============================================
; Title: dupuis-person.js
; Author: Jocelyn Dupuis
; Date: 09/22/2023
; Description: Model for customer API
============================================
*/

// Require mongoose
const mongoose = require("mongoose");

// Create schema
const schema = mongoose.Schema;

// New schema for name, price, and quantity
const lineItemSchema = new schema({
  name: String,
  price: Number,
  quantity: Number,
});

// New schema for subtotal, tax, dateCreated, date, Shipped, and lineItems
const invoiceSchema = new schema({
  subtotal: Number,
  tax: Number,
  dateCreated: Date,
  dateShipped: Date,
  lineItems: [lineItemSchema],
});

// New schema for firstName, lastName, userName, and invoices
const customerSchema = new schema({
  firstName: String,
  lastName: String,
  userName: String,
  invoices: [invoiceSchema],
});

// Exports model
module.exports = mongoose.model('Customer', customerSchema);