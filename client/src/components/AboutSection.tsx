import { GlassCard } from '@/components/ui/glass-card';

const AboutSection = () => {
  const frontendSkills = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-cyan', progress: 90 },
    { name: 'JavaScript', icon: 'fab fa-js', color: 'text-yellow-400', progress: 85 },
    { name: 'HTML5/CSS3', icon: 'fab fa-html5', color: 'text-orange-400', progress: 95 }
  ];

  const backendSkills = [
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-400', progress: 85 },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-400', progress: 80 },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-coral', progress: 75 }
  ];

  const cloudSkills = [
    { name: 'AWS', icon: 'fab fa-aws', color: 'text-yellow-500', progress: 70 },
    { name: 'TensorFlow', icon: 'fas fa-brain', color: 'text-purple-400', progress: 75 },
    { name: 'OpenCV', icon: 'fas fa-eye', color: 'text-cyan', progress: 80 }
  ];

  const stats = [
    { value: '1+', label: 'Years Experience', color: 'text-cyan' },
    { value: '15+', label: 'Projects Completed', color: 'text-teal' },
    { value: '500+', label: 'Users Served', color: 'text-coral' },
    { value: '95%', label: 'Accuracy Rate', color: 'text-cyan' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-coral to-teal bg-clip-text text-transparent">
          About Me & Skills
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Info */}
          <GlassCard variant="dark" className="transform hover:scale-105 transition-all duration-500">
            <h3 className="text-3xl font-bold mb-6 text-cyan">Professional Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building scalable web applications 
              and intelligent systems. My journey spans from blockchain development to machine learning, 
              always focused on creating impactful solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl p-4 text-center">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Location</span>
                <span className="text-muted-foreground">Bhilai, Chhattisgarh, India</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Education</span>
                <span className="text-muted-foreground">BTech Computer Science (78%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Availability</span>
                <span className="text-green-400">Immediate</span>
              </div>
            </div>
          </GlassCard>
          
          {/* Skills Visualization */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-teal mb-8">Technical Expertise</h3>
            
            {/* Frontend Skills */}
            <GlassCard variant="dark">
              <h4 className="text-xl font-semibold mb-4 text-cyan">Frontend Development</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="skill-sphere glass rounded-xl p-4 text-center transform hover:scale-110 transition-all duration-300">
                    <i className={`${skill.icon} text-3xl ${skill.color} mb-2`}></i>
                    <div className="text-sm">{skill.name}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* Backend Skills */}
            <GlassCard variant="dark">
              <h4 className="text-xl font-semibold mb-4 text-teal">Backend Development</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="skill-sphere glass rounded-xl p-4 text-center transform hover:scale-110 transition-all duration-300">
                    <i className={`${skill.icon} text-3xl ${skill.color} mb-2`}></i>
                    <div className="text-sm">{skill.name}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            {/* Cloud & ML Skills */}
            <GlassCard variant="dark">
              <h4 className="text-xl font-semibold mb-4 text-coral">Cloud & ML</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cloudSkills.map((skill, index) => (
                  <div key={index} className="skill-sphere glass rounded-xl p-4 text-center transform hover:scale-110 transition-all duration-300">
                    <i className={`${skill.icon} text-3xl ${skill.color} mb-2`}></i>
                    <div className="text-sm">{skill.name}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className={`h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`}
                        style={{ width: `${skill.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
