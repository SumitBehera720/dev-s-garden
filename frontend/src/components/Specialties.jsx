import { motion } from 'framer-motion';

const specialties = [
  { name: 'Chicken Biryani', icon: '🍗', desc: 'Rich flavors crafted with care, authentic spices.' },
  { name: 'Butter Paneer', icon: '🧀', desc: 'Creamy, rich tomato gravy with soft paneer cubes.' },
  { name: 'Naan & North Indian', icon: '🫓', desc: 'Freshly baked breads and traditional curries.' },
  { name: 'Vegetarian Delights', icon: '🥗', desc: 'Wide variety of pure vegetarian options.' },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-24 bg-dark-950 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Specialties</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience rich flavors crafted with care. From budget meals to premium dining, we have something for everyone.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-panel p-8 rounded-3xl text-center group hover:bg-dark-800 transition-colors"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Info */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-[80px]"></div>
          <h3 className="text-2xl font-bold mb-8 text-center border-b border-white/10 pb-4">Dining Experience & Pricing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-gray-300">Lunch & Dinner available</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-gray-300">Dine-in & Delivery options</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-gray-300">Spacious seating & banquet hall</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-400">✔️</span>
                  <span className="text-gray-300">Garden area with relaxing vibe</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-300 font-medium">Budget meals</span>
                <span className="text-green-400 font-bold">₹200 – ₹300</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-gray-300 font-medium">Regular dining</span>
                <span className="text-green-400 font-bold">₹400 – ₹600</span>
              </div>
              <div className="flex justify-between items-end pb-2">
                <span className="text-gray-300 font-medium">Premium / Events</span>
                <span className="text-green-400 font-bold">₹2000+</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Specialties;
