import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:rastrith156@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:8762552464",
      label: "Phone"
    },
    {
      icon: Github,
      href: "https://github.com/Ratrith156",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rastrith-t-r-58472031b",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Rastrith T R Gowda</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Engineering student passionate about cloud computing and programming. 
              Building skills to create innovative solutions for tomorrow's challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-primary transition-smooth"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Me', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Current Status</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>🎓 2nd Year Engineering Student</p>
              <p>🏫 Dayananda Sagar University</p>
              <p>📍 Bangalore, Karnataka</p>
              <p>🎯 Expected Graduation: 2028</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Rastrith T R Gowda. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="h-4 w-4 text-red-500" /> for learning and growth
              </p>
              <button
                onClick={scrollToTop}
                className="text-sm text-primary hover:text-primary-light transition-smooth"
              >
                Back to Top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;