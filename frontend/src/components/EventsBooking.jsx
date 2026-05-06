import { useState } from 'react';
import { motion } from 'framer-motion';

const EventsBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '',
    type: 'Table Booking'
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    
    try {
      // Hardcoded API URL for production to ensure bookings work on Vercel
      const apiUrl = 'https://dev-s-garden.onrender.com';
      const response = await fetch(`${apiUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', phone: '', date: '', guests: '', type: 'Table Booking' });
        setTimeout(() => setStatus({ loading: false, success: false, error: null }), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Something went wrong' });
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setStatus({ loading: false, success: false, error: 'Cannot connect to server. Please try again.' });
    }
  };

  return (
    <section id="booking" className="py-20 md:py-24 bg-dark-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2"
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Reservations & Events</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Book Your Table Now</h2>
            <p className="text-gray-400 mb-8 text-base md:text-lg">
              Secure your spot for an unforgettable dining experience. We also cater to special events and celebrations.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-white mb-2">Birthday Parties 🎂</h3>
                <p className="text-gray-400">Make your special day memorable with our vibrant garden ambiance.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-white mb-2">Family Functions 👨‍👩‍👧‍👦</h3>
                <p className="text-gray-400">Spacious banquet hall perfect for family gatherings.</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-white mb-2">Small Celebrations 🎊</h3>
                <p className="text-gray-400">Intimate setups for anniversaries and casual outings.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 blur-[50px]"></div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Reservation Form</h3>
              
              {status.success && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 text-green-400 rounded-xl">
                  Reservation request sent successfully! We will contact you shortly to confirm.
                </div>
              )}
              
              {status.error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500 text-red-400 rounded-xl">
                  {status.error}
                </div>
              )}
              
              <div className="space-y-5 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <input 
                      type="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Guests</label>
                    <input 
                      type="number" 
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      required
                      className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors"
                      placeholder="2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Booking Type</label>
                  <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-dark-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 transition-colors appearance-none"
                  >
                    <option>Table Booking</option>
                    <option>Birthday Party</option>
                    <option>Family Function</option>
                    <option>Corporate Event</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={status.loading}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors mt-4"
                >
                  {status.loading ? 'Processing...' : 'Confirm Reservation'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsBooking;
