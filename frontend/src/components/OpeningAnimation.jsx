import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const OpeningAnimation = () => {
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const leafRef = useRef(null);

  useEffect(() => {
    // Disable scrolling during animation
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        // Re-enable scrolling after animation
        document.body.style.overflow = 'auto';
        if (overlayRef.current) {
          overlayRef.current.style.display = 'none';
        }
      }
    });

    // Animate leaf icon and text in
    tl.to(leafRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    // Hold for a moment, then animate out
    .to([leafRef.current, textRef.current], {
      opacity: 0,
      y: -20,
      duration: 0.5,
      delay: 0.5,
      ease: "power2.in"
    })
    // Slide up the overlay
    .to(overlayRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "power4.inOut"
    });

  }, []);

  return (
    <div 
      ref={overlayRef} 
      className="fixed inset-0 z-[100] bg-dark-950 flex flex-col items-center justify-center pointer-events-auto"
    >
      <div 
        ref={leafRef}
        className="opacity-0 translate-y-10 scale-50 text-6xl text-green-400 mb-6"
      >
        🌿
      </div>
      <div 
        ref={textRef}
        className="opacity-0 translate-y-10 flex flex-col items-center"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-4xl md:text-5xl font-bold text-green-400">Dev's</span>
          <span className="text-4xl md:text-5xl font-bold text-white">Garden</span>
        </div>
        <div className="h-[2px] w-0 bg-green-500 rounded-full" style={{ width: '100%' }}></div>
        <p className="mt-4 text-gray-300 tracking-[0.2em] uppercase text-sm">Experience the Peace</p>
      </div>
    </div>
  );
};

export default OpeningAnimation;
