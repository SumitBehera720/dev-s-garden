import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-dark-950 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10">
              <img
                src="../dev4.jpg"
                alt="Garden seating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-2xl max-w-[200px] hidden md:block">
              <p className="text-3xl font-bold text-green-400 mb-1">5+</p>
              <p className="text-sm text-gray-300">Years of crafting memorable experiences</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[2px] bg-green-500"></span>
              <span className="text-green-400 font-semibold uppercase tracking-wider">Our Story</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">A Vision of Bringing People Together</h2>
            <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed">
              Dev’s Garden was created with a simple vision—to bring people together over delicious food in a peaceful garden setting.
            </p>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Every dish is prepared with care, combining authentic flavors with a modern touch, making every visit special. Our passion lies in creating a haven where the hustle of the city fades away, replaced by the soothing ambiance of nature and the rich aromas of our carefully curated menu.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-bold text-white mb-2">3.5<span className="text-green-500">/5</span></p>
                <div className="flex text-yellow-500 mb-1">
                  {'★★★★☆'}
                </div>
                <p className="text-sm text-gray-400">Google (94 Reviews)</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white mb-2">3.5<span className="text-green-500">/5</span></p>
                <div className="flex text-yellow-500 mb-1">
                  {'★★★★☆'}
                </div>
                <p className="text-sm text-gray-400">Justdial (89 Ratings)</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
