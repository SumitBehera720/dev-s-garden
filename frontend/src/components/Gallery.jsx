import { motion } from 'framer-motion';

const images = [
  { src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800", alt: "Food close-up" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800", alt: "Garden seating" },
  { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800", alt: "Night lighting" },
  { src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800", alt: "Banquet hall" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800", alt: "Customer moments" },
  { src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800", alt: "Biryani" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <span className="text-green-400 font-semibold uppercase tracking-wider mb-2 block">Moments</span>
            <h2 className="text-4xl md:text-5xl font-bold">Our Gallery</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg border border-white/20 px-6 py-2 rounded-full backdrop-blur-sm">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 relative rounded-3xl overflow-hidden aspect-video max-w-4xl mx-auto border border-white/10 group cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1545041532-68c37d80e86b?auto=format&fit=crop&q=80&w=1200" 
            alt="Video Thumbnail"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.6)] group-hover:scale-110 transition-transform">
              <span className="text-white ml-2 text-2xl">▶</span>
            </div>
          </div>
          <div className="absolute bottom-6 left-8">
            <h3 className="text-2xl font-bold text-white">Experience Dev's Garden</h3>
            <p className="text-gray-300">Take a quick tour of our ambiance</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
