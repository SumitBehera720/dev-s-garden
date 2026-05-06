const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// @route POST /api/reservations
// @desc Create a new reservation
router.post('/', async (req, res) => {
  try {
    const { name, phone, date, guests, type } = req.body;
    
    const newReservation = new Reservation({
      name, phone, date, guests, type
    });

    await newReservation.save();
    res.status(201).json({ success: true, message: 'Reservation created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
  }
});

// @route GET /api/reservations
// @desc Get all reservations
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: reservations.length, data: reservations });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
