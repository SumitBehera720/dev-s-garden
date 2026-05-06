import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Customer Review",
    rating: 5,
    text: "A perfect place for family dinners! The garden ambiance is peaceful, food quality is excellent, and service is very quick."
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Loved the chicken biryani and butter paneer—rich flavors and great presentation. Feels premium yet comfortable."
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Spacious venue with a beautiful garden setup. Perfect for functions. Parking is very convenient."
  },
  {
    name: "Customer Review",
    rating: 4,
    text: "Good food at reasonable prices. Service is impressive. Would visit again!"
  },
  {
    name: "Customer Review",
    rating: 4,
    text: "Nice ambiance and friendly staff. Food was tasty, just pricing could be slightly better."
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-dark-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/5 rounded-full blur-[120px] -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4 text-yellow-500 text-xl">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-dark-700 rounded-full flex items-center justify-center text-gray-400 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-xs text-green-400">Verified Diner</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
