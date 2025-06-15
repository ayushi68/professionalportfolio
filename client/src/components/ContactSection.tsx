import { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'ayushisamaddar55@gmail.com',
      color: 'cyan',
      href: 'mailto:ayushisamaddar55@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+91 9131564538',
      color: 'teal',
      href: 'tel:+919131564538'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Bhilai, Chhattisgarh, India',
      color: 'coral',
      href: null
    }
  ];

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/ayushi-samaddar',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20 hover:bg-blue-500/30'
    },
    {
      platform: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/ayushi68',
      color: 'text-gray-400',
      bgColor: 'bg-gray-500/20 hover:bg-gray-500/30'
    },
    {
      platform: 'Email',
      icon: 'fas fa-envelope',
      url: 'mailto:ayushisamaddar55@gmail.com',
      color: 'text-red-400',
      bgColor: 'bg-red-500/20 hover:bg-red-500/30'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-coral to-cyan bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="space-y-8">
            <GlassCard variant="dark">
              <h3 className="text-3xl font-bold mb-6 text-cyan">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Ready to bring your ideas to life? Let's discuss how we can work together 
                to create amazing digital experiences.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-${info.color}/20 rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} text-${info.color}`}></i>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="font-semibold hover:text-cyan transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="font-semibold">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4 mt-8">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bgColor} rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110`}
                  >
                    <i className={`${social.icon} ${social.color}`}></i>
                  </a>
                ))}
              </div>
            </GlassCard>
          </div>
          
          {/* Contact Form */}
          <GlassCard variant="dark">
            <h3 className="text-2xl font-bold mb-6 text-teal">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="bg-white/10 border-white/20 focus:border-cyan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-white/10 border-white/20 focus:border-cyan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Subject</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project collaboration"
                  required
                  className="bg-white/10 border-white/20 focus:border-cyan"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-white/10 border-white/20 focus:border-cyan resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan to-teal hover:shadow-lg hover:shadow-cyan/50 transform hover:scale-105 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>Send Message
                  </>
                )}
              </Button>
            </form>
          </GlassCard>
        </div>
        
        {/* Availability Status */}
        <div className="text-center mt-16">
          <GlassCard variant="dark" className="max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-semibold">Available for New Projects</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Currently accepting freelance and full-time opportunities
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
