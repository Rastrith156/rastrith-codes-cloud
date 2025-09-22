import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center fade-up">

          {/* Main Content */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Rastrith T R Gowda
          </h1>
          
          <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Engineering Student • Cloud Computing Enthusiast • Future Innovator
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            2nd-year Engineering student at Dayananda Sagar University, passionate about 
            cloud computing and programming. Building skills in Python and C++ 
            to create impactful solutions.
          </p>

          {/* Skills Highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['Python', 'C++', 'Cloud Computing'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium border border-border"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              onClick={() => scrollToSection('about')}
            >
              Learn More About Me
            </Button>
          </div>

          {/* Quick Contact Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:rastrith156@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:8762552464"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Ratrith156"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rastrith-t-r-58472031b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;