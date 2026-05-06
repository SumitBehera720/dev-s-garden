import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className="absolute inset-0 bg-dark-950/80 bg-gradient-to-t from-dark-950 via-dark-950/70 to-dark-950/40"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6"
        >
          <span className="text-green-400">🌿</span>
          <span className="text-sm font-medium tracking-wider uppercase text-gray-200">Welcome to Dev's Garden</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight"
        >
          A Place Where <br className="hidden md:block"/>
          <span className="text-gradient">Great Food</span> Meets a <br className="hidden md:block"/>
          <span className="text-white">Peaceful Garden</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed px-4"
        >
          Whether you're planning a family dinner, a casual outing, or a special celebration, Dev’s Garden offers a warm, comfortable, and memorable dining experience.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            to="specialties"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all hover:scale-105 cursor-pointer text-center"
          >
            Explore Menu
          </Link>
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/10 text-white font-bold rounded-full transition-all hover:scale-105 cursor-pointer text-center"
          >
            Book Your Table
          </Link>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
