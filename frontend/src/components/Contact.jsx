import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark-950 relative border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Reach Out</span>
            <h2 className="text-3xl md:text-5xl font-bold">Contact & Location</h2>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/3 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-3xl flex-1 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-green-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Gadajagasora, Odisha 752054</p>
              <a href="https://maps.app.goo.gl/3t6sBqV16n94GkHq8" target="_blank" rel="noreferrer" className="text-green-400 font-medium flex items-center gap-2 hover:text-green-300 transition-colors">
                Get Directions <ExternalLink size={16} />
              </a>
            </div>

            <div className="glass-panel p-8 rounded-3xl flex-1 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6">
                <Phone className="text-green-400 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <a href="tel:+910000000000" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                  <span className="text-xl">🍽️</span>
                  <span>Order on Zomato</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map Embed — no scroll animation to prevent iframe repaint flicker */}
          <div className="lg:w-2/3 glass-panel rounded-3xl overflow-hidden p-2 h-[350px] md:h-[400px] lg:h-[500px]">
            <iframe
              src="https://maps.google.com/maps?q=6PRF+6G6,+Gadajagasora,+Odisha+752054&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dev's Garden Location"
            ></iframe>
          </div>
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-24 max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is the average cost?", a: "₹200–₹1200 depending on your order." },
              { q: "Do you offer delivery?", a: "Yes, through online platforms and direct service." },
              { q: "Can I book a table?", a: "Yes, reservations are available through our website." },
              { q: "Do you have vegetarian options?", a: "Yes, a wide range of vegetarian dishes." },
              { q: "Is it family-friendly?", a: "Absolutely! Kids and families love the environment." }
            ].map((faq, index) => (
              <div key={index} className="glass-panel p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-green-400">Q.</span> {faq.q}
                </h4>
                <p className="text-gray-400 pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
