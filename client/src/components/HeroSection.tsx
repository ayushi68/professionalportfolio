import { GlassCard } from '@/components/ui/glass-card';

const HeroSection = () => {
  const handleDownloadCV = () => {
    // Create a blob with CV content or redirect to CV file
    const link = document.createElement('a');
    link.href = '/cv_ayushi_samaddar.pdf'; // This would be served from public folder
    link.download = 'Ayushi_Samaddar_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="container mx-auto text-center z-10 relative">
        <GlassCard 
          variant="dark" 
          className="max-w-4xl mx-auto transform hover:scale-105 transition-all duration-500"
        >
          <div className="animate-float mb-8">
            <div className="w-40 h-40 mx-auto rounded-full glass p-4 mb-6 animate-glow">
              <div className="w-full h-full bg-gradient-to-br from-cyan to-teal rounded-full flex items-center justify-center">
                <i className="fas fa-user text-4xl text-white"></i>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan to-teal bg-clip-text text-transparent">
            Ayushi Samaddar
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-6 font-mono">
            Full Stack Developer & ML Engineer
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Results-driven developer with 1+ years of experience crafting responsive web applications 
            and intelligent systems. Specialized in React.js, Node.js, and Machine Learning integration.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={scrollToProjects}
              className="download-btn bg-gradient-to-r from-cyan to-teal px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-cyan/50"
            >
              View My Work
            </button>
            <button 
              onClick={handleDownloadCV}
              className="download-btn glass px-8 py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 border border-cyan hover:bg-cyan/20"
            >
              <i className="fas fa-download mr-2"></i>Download CV
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="mailto:ayushisamaddar55@gmail.com" 
              className="text-2xl hover:text-cyan transition-colors duration-300 hover:scale-125 transform"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="https://linkedin.com/in/ayushi-samaddar" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan transition-colors duration-300 hover:scale-125 transform"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="https://github.com/ayushi68" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan transition-colors duration-300 hover:scale-125 transform"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </GlassCard>
      </div>
      
      <div className="scroll-indicator">
        <i className="fas fa-chevron-down text-cyan text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;
