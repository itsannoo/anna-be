const express = require('express');
const router = express.Router();
const rencanacontroller = require('../controller/rencanacontroller')
const isAuthenticated = require('../middleware/authmiddleware')

// Create a new Rencana

router.post('/rencana',isAuthenticated, rencanacontroller.createRencana);

// Get all Rencana
router.get('/rencna', isAuthenticated,rencanacontroller.getAllRencana);

// Get a specific Rencana by ID
router.get('/rencana/:id', rencanacontroller.getRencanaById);

// Update a Rencana by ID
router.put('/rencana/:id', isAuthenticated,rencanacontroller.updateRencanaById);

// Delete a Rencana by ID
router.delete('/rencana/:id', isAuthenticated,rencanacontroller.deleteRencanaById);

module.exports = router;12
