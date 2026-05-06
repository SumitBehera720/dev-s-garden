import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Specialties from './components/Specialties';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import EventsBooking from './components/EventsBooking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import OpeningAnimation from './components/OpeningAnimation';

function App() {
  useEffect(() => {
    // Initialize Locomotive Scroll for smooth scrolling
    const scroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        smoothTouch: false,
        touchMultiplier: 2,
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="bg-dark-950 min-h-screen text-white font-sans selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden w-full max-w-[100vw]" data-scroll-container>
      <OpeningAnimation />
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Specialties />
      <Gallery />
      <Reviews />
      <EventsBooking />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
