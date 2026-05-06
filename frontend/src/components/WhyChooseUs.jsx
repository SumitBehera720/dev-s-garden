import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Zap, Users, Car, PartyPopper } from 'lucide-react';

const reasons = [
  { icon: Leaf, title: 'Garden Ambiance', desc: 'Beautiful garden-themed setting for peace.' },
  { icon: ShieldCheck, title: 'Fresh Ingredients', desc: 'Hygienic and freshly sourced components.' },
  { icon: Zap, title: 'Fast Service', desc: 'Attentive staff ensuring no delays.' },
  { icon: Users, title: 'Family Friendly', desc: 'A safe and welcoming environment for all.' },
  { icon: Car, title: 'Free Parking', desc: 'Ample and secure parking space available.' },
  { icon: PartyPopper, title: 'Perfect for Events', desc: 'Spacious banquet hall for gatherings.' },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-dark-900 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-900/20 rounded-full blur-[100px] -z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-900/20 rounded-full blur-[100px] -z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold">Experience the Best</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="w-14 h-14 bg-dark-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <Icon className="text-green-400 w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400">{reason.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
