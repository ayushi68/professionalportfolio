import { GlassCard } from '@/components/ui/glass-card';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'IIT Bhilai',
      location: 'Bhilai, Chhattisgarh',
      period: 'Jan 2025 - Mar 2025',
      status: 'completed',
      color: 'cyan',
      achievements: [
        'Developed secure e-Voting DApp using React.js and blockchain, achieving 100% uptime',
        'Designed responsive UI, improving accessibility',
        'Implemented RESTful APIs with Node.js, enhancing integration efficiency by 20%'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Nyson AI',
      location: 'Bhilai, Chhattisgarh',
      period: 'Jul 2024 - Dec 2024',
      status: 'completed',
      color: 'teal',
      achievements: [
        'Built web applications using MERN full stack',
        'Developed RESTful APIs with MongoDB, improving data retrieval by 40%'
      ]
    },
    {
      title: 'Software Developer',
      company: 'IIT Bhilai',
      location: 'Bhilai, Chhattisgarh',
      period: 'Apr 2024 - Jun 2024',
      status: 'completed',
      color: 'coral',
      achievements: [
        'Built Video KYC solution with OpenCV, increasing onboarding speed by 30%',
        'Optimized models by finding EER by 80%',
        'Set up Speaker Verification models working with large datasets'
      ]
    },
    {
      title: 'Software Developer',
      company: 'IIT Bhilai',
      location: 'Bhilai, Chhattisgarh',
      period: 'Oct 2023 - Dec 2023',
      status: 'completed',
      color: 'yellow-400',
      achievements: [
        'Optimized ML model training with CUDA, reducing training time by 80%',
        'Worked with millions of data points for time and space complexity optimization',
        'Improved test pass rates by 78% through unit testing and optimization'
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === 'current') {
      return (
        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono">
          Current
        </span>
      );
    }
    return (
      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono">
        Completed
      </span>
    );
  };

  const getColorClasses = (color: string) => {
    return {
      dot: `bg-${color} shadow-${color}`,
      text: `text-${color}`,
      chevron: `text-${color}`
    };
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan to-coral bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="relative pl-8">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan via-teal to-coral rounded-full"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              return (
                <div key={index} className="timeline-item relative">
                  <div className={`absolute -left-6 top-6 w-4 h-4 rounded-full shadow-lg ${
                    exp.status === 'current' ? 'animate-pulse' : ''
                  } ${colors.dot}/50`} 
                  style={{ 
                    backgroundColor: exp.color === 'cyan' ? 'var(--cyan)' : 
                                   exp.color === 'teal' ? 'var(--teal)' : 
                                   exp.color === 'coral' ? 'var(--coral)' : 
                                   '#facc15'
                  }}></div>
                  <GlassCard 
                    variant="dark" 
                    className="ml-8 transform hover:scale-105 transition-all duration-500"
                  >
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold ${colors.text}`}>{exp.title}</h3>
                        <p className="text-teal font-semibold">{exp.company}</p>
                        <p className="text-muted-foreground">{exp.location}</p>
                      </div>
                      {getStatusBadge(exp.status)}
                    </div>
                    <p className="text-muted-foreground mb-4 font-mono">{exp.period}</p>
                    <ul className="space-y-2 text-muted-foreground">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <i className={`fas fa-chevron-right ${colors.chevron} mr-3 mt-1`}></i>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
