import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';

const FloatingNav = () => {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navItems = [
    { id: 'home', icon: 'fas fa-home', color: 'text-cyan' },
    { id: 'about', icon: 'fas fa-user', color: 'text-teal' },
    { id: 'experience', icon: 'fas fa-briefcase', color: 'text-coral' },
    { id: 'projects', icon: 'fas fa-code', color: 'text-cyan' },
    { id: 'contact', icon: 'fas fa-envelope', color: 'text-teal' }
  ];

  return (
    <nav className="fixed top-5 right-5 z-50 glass rounded-2xl p-4">
      <div className="flex items-center space-x-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`p-2 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-110 ${
              activeSection === item.id ? 'bg-white/20' : ''
            }`}
          >
            <i className={`${item.icon} ${item.color}`}></i>
          </button>
        ))}
        <button
          onClick={toggleTheme}
          className="theme-toggle p-2 rounded-lg hover:bg-white/20"
        >
          <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} text-yellow-400`}></i>
        </button>
      </div>
    </nav>
  );
};

export default FloatingNav;
