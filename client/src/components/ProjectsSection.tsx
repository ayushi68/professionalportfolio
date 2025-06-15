import { GlassCard } from '@/components/ui/glass-card';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'ISKCON Bhilai Management System',
      description: 'Comprehensive 110-page MERN stack application for event management, supporting 500+ users with optimized MongoDB APIs.',
      image: '/iskcon.png',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      stats: [
        { label: 'Faster APIs', value: '40%' }
      ],
      color: 'cyan',
      category: 'MERN Stack',
      demolink: 'https://iskcon-bhilai-management-system.vercel.app/',
      codelink: 'https://github.com/ayushi68/IskconSeva'
    },
    {
      title: 'Evoting DApp',
      description: 'Secure e-Voting decentralized application built with React.js and blockchain, achieving 100% uptime and enhanced security.',
      image: '/vote.png',
      technologies: ['React.js', 'Node.js', 'Blockchain'],
      stats: [
        { label: 'More Engagement', value: '25%' }
      ],
      color: 'teal',
      category: 'React Dashboard',
      // demolink: 'https://evoting-dapp.vercel.app/',
      codelink: 'https://github.com/ayushi68/lottery-app-blockchain'
    },
    {
      title: 'Speaker Verification System',
      description: 'Real-time speaker verification system using OpenCV and CNN, achieving 95% accuracy with real-time detection capabilities.',
      image: '/speaker.jpg',
      technologies: ['scikit-learn', 'CV2', 'Python', 'TensorFlow'],
      stats: [
        { label: 'Accuracy', value: '95%' },
      ],
      color: 'coral',
      category: 'AI/ML',
      codelink: 'https://github.com/ayushi68/SpeakerVerification'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified',
      subtitle: 'Cloud Practitioner',
      icon: 'fab fa-aws',
      color: 'text-yellow-500',
      year: '2023'
    },
    {
      title: 'PHP & MySQL',
      subtitle: 'Web Development',
      icon: 'fab fa-php',
      color: 'text-purple-400',
      year: 'Dec 2023'
    },
    {
      title: 'JavaScript',
      subtitle: 'Web Development',
      icon: 'fab fa-js',
      color: 'text-yellow-400',
      year: 'Mar 2021'
    },
    {
      title: 'Python',
      subtitle: 'Programming',
      icon: 'fab fa-python',
      color: 'text-blue-400',
      year: 'Sep 2018'
    }
  ];

  const getColorClasses = (color: string) => {
    return {
      bg: `bg-${color}/20 hover:bg-${color}/30`,
      text: `text-${color}`,
      border: `border-${color}`
    };
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal to-cyan bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div key={index} className="project-card">
                <GlassCard 
                  variant="dark" 
                  className="transform hover:scale-105 transition-all duration-500"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transform hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-mono`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${colors.text}`}>{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className={`text-2xl font-bold ${colors.text}`}>{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.demolink && (
                      <a
                        href={project.demolink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 ${colors.bg} ${colors.text} px-4 py-2 rounded-xl text-center transition-all duration-300 hover:scale-105`}
                      >
                        <i className="fas fa-external-link-alt mr-2"></i>Demo
                      </a>
                    )}
                    {project.codelink && (
                      <a
                        href={project.codelink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 glass hover:bg-white/20 px-4 py-2 rounded-xl text-center transition-all duration-300 hover:scale-105"
                      >
                        <i className="fab fa-github mr-2"></i>Code
                      </a>
                    )}
                  </div>
                </GlassCard>
              </div>
            );
          })}
        </div>
        
        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-cyan">Certifications & Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <GlassCard 
                key={index}
                variant="dark" 
                className="text-center transform hover:scale-105 transition-all duration-300"
              >
                <i className={`${cert.icon} text-4xl ${cert.color} mb-4`}></i>
                <h4 className={`font-bold ${cert.color} mb-2`}>{cert.title}</h4>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
                <p className="text-xs text-muted-foreground mt-2">{cert.year}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
