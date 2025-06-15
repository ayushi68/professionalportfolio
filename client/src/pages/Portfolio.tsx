import { useEffect, useState } from 'react';
import { useTheme } from '@/hooks/useTheme';
import ThreeBackground from '@/components/ThreeBackground';
import ParticleSystem from '@/components/ParticleSystem';
import FloatingNav from '@/components/FloatingNav';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Portfolio = () => {
  const { theme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(50px)';
      section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      observer.observe(section);
    });

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    setIsLoaded(true);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    // Add CSS class for fade-in animation
    const style = document.createElement('style');
    style.textContent = `
      .animate-fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className={`min-h-screen gradient-bg font-inter overflow-x-hidden transition-colors duration-500 ${theme === 'dark' ? 'bg-black' : 'bg-gray-100'}`}>
      {/* Background Effects */}
      <ThreeBackground />
      <ParticleSystem />
      
      {/* Navigation */}
      <FloatingNav />
      
      {/* Main Content */}
      {isLoaded && (
        <>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          
          {/* Footer */}
          <footer className={`py-12 px-4 border-t ${theme === 'dark' ? 'border-white/10' : 'border-black/10'}`}>
            <div className="container mx-auto max-w-6xl">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  © 2025 Ayushi Samaddar. Crafted with <span className="text-red-400">♥</span> and lots of coffee.
                </p>
                <p className="text-sm text-muted-foreground">
                  Built with React.js, Three.js, and modern web technologies
                </p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Portfolio;
