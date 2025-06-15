import { useEffect, useRef } from 'react';

const ParticleSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticle = () => {
      if (!containerRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle animate-particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.width = Math.random() * 10 + 5 + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 5 + 5 + 's';
      particle.style.animationDelay = Math.random() * 2 + 's';
      
      containerRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particle && particle.parentNode) {
          particle.remove();
        }
      }, 10000);
    };
    
    // Create particles periodically
    const interval = setInterval(createParticle, 500);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default ParticleSystem;
