import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Specialties', to: 'specialties' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Reviews', to: 'reviews' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark-950/80 backdrop-blur-lg border-b border-white/10 shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-400"> Dev's</span>
          <span className="text-2xl font-bold text-white">Garden</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-green-400 cursor-pointer font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="booking"
            smooth={true}
            duration={500}
            className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all cursor-pointer"
          >
            Book a Table
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 w-full flex flex-col py-4 px-4 shadow-lg border-t border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-green-400 py-3 border-b border-white/5 cursor-pointer font-medium"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="booking"
            smooth={true}
            duration={500}
            onClick={() => setIsOpen(false)}
            className="mt-4 px-5 py-3 text-center bg-green-500 text-white font-semibold rounded-full"
          >
            Book a Table
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
