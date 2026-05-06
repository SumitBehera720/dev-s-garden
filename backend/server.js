const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory store (fallback when MongoDB is not available)
let reservations = [];

// Try MongoDB connection (optional — server runs even without it)
let mongoose = null;
let Reservation = null;

try {
  mongoose = require('mongoose');
  const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    guests: { type: Number, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  });
  Reservation = mongoose.model('Reservation', reservationSchema);

  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/devsgarden')
    .then(() => console.log('✅ MongoDB Connected'))
    .catch(() => console.warn('⚠️  MongoDB not available — using in-memory storage'));
} catch (e) {
  console.warn('⚠️  Mongoose not loaded — using in-memory storage');
}

// POST /api/reservations — Create a new reservation
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, phone, date, guests, type } = req.body;

    if (!name || !phone || !date || !guests) {
      return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    if (Reservation && mongoose.connection.readyState === 1) {
      // MongoDB is connected — save to DB
      const newReservation = new Reservation({ name, phone, date, guests, type });
      await newReservation.save();
    } else {
      // Fallback — save to memory
      reservations.push({ name, phone, date, guests, type, createdAt: new Date() });
      console.log('📋 Reservation (in-memory):', { name, phone, date, guests, type });
    }

    res.status(201).json({ success: true, message: 'Reservation created successfully!' });
  } catch (error) {
    console.error('Reservation error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// GET /api/reservations — List all reservations
app.get('/api/reservations', async (req, res) => {
  try {
    if (Reservation && mongoose.connection.readyState === 1) {
      const data = await Reservation.find().sort({ createdAt: -1 });
      return res.status(200).json({ success: true, count: data.length, data });
    }
    res.status(200).json({ success: true, count: reservations.length, data: reservations });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  const dbStatus = mongoose && mongoose.connection.readyState === 1 ? 'MongoDB' : 'In-Memory';
  res.status(200).json({ message: "Dev's Garden API is running 🌿", storage: dbStatus });
});

// Start server regardless of DB status
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`💾 Storage: ${Reservation ? 'MongoDB (if connected)' : 'In-memory fallback'}`);
});
