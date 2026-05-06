import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-scroll';

const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const TwitterIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);

const Footer = () => {
  return (
    <footer className="relative bg-dark-950 pt-20 pb-10 overflow-hidden border-t border-white/5 mt-auto">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-900/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <span className="text-3xl font-bold text-green-400">🌿 Dev's</span>
              <span className="text-3xl font-bold text-white">Garden</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-sm text-lg leading-relaxed">
              Where great food meets a peaceful garden ambiance. We create memorable dining experiences crafted with care and authentic flavors.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-gray-400 hover:bg-green-500 hover:text-white transition-all hover:-translate-y-1">
                <TwitterIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xl font-bold text-white mb-6 font-serif tracking-wide">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Specialties', 'Gallery', 'Reviews'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? 'hero' : link.toLowerCase()} 
                    smooth={true} 
                    duration={500} 
                    className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-4"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6 font-serif tracking-wide">Hours</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Mon - Fri:</span> 
                <span className="text-white font-medium">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Saturday:</span> 
                <span className="text-white font-medium">11:00 AM - 11:30 PM</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <span>Sunday:</span> 
                <span className="text-green-400 font-medium">11:00 AM - 11:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-bold text-white mb-6 font-serif tracking-wide">Get in Touch</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-dark-800 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-green-400" />
                </div>
                <span className="text-gray-400 mt-2 leading-tight">6PRF+6G6, Gadajagasora, Odisha 752054</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-dark-800 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-green-400" />
                </div>
                <a href="tel:+919938151632" className="text-gray-400 hover:text-white transition-colors">+91 99381 51632</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-dark-800 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-green-400" />
                </div>
                <a href="mailto:hello@devsgarden.com" className="text-gray-400 hover:text-white transition-colors">hello@devsgarden.com</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Dev's Garden. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
