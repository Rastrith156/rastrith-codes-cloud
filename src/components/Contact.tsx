import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rastrith156@gmail.com",
      href: "mailto:rastrith156@gmail.com",
      description: "Send me an email for any inquiries or opportunities"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8762552464",
      href: "tel:8762552464",
      description: "Feel free to call for direct communication"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/Ratrith156",
      href: "https://github.com/Ratrith156",
      description: "Check out my code repositories and projects"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "rastrith-t-r-58472031b",
      href: "https://www.linkedin.com/in/rastrith-t-r-58472031b",
      description: "Connect with me professionally"
    }
  ];

  const interests = [
    "Internship Opportunities",
    "Cloud Computing Projects",
    "Collaborative Learning",
    "Open Source Contributions",
    "Technical Discussions",
    "Academic Collaborations"
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to connect with fellow students, professionals, and anyone interested 
            in technology and innovation. Let's discuss opportunities and ideas together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-primary hover:text-primary-light transition-smooth font-medium block mb-2"
                        >
                          {contact.value}
                        </a>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="shadow-soft border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-primary font-medium mb-2">Bangalore, Karnataka, India</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Currently studying at Dayananda Sagar University
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Interests & Availability */}
          <div className="fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">I'm interested in...</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="p-3 bg-card text-card-foreground rounded-lg border border-border text-sm font-medium text-center shadow-soft hover:shadow-medium hover:scale-105 transition-smooth cursor-default"
                  >
                    {interest}
                  </div>
                ))}
              </div>

              <Card className="shadow-soft border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Let's Connect!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Whether you're a fellow student, industry professional, or someone with similar interests, 
                    I'd love to hear from you. I'm particularly interested in:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Learning opportunities and mentorship</li>
                    <li>• Internship and project collaboration</li>
                    <li>• Technical discussions about cloud computing</li>
                    <li>• Study groups and academic partnerships</li>
                    <li>• Industry insights and career guidance</li>
                  </ul>
                  
                  <div className="pt-4 space-y-3">
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-smooth shadow-medium"
                      onClick={() => window.location.href = 'mailto:rastrith156@gmail.com?subject=Hello Rastrith!&body=Hi Rastrith,%0D%0A%0D%0AI came across your portfolio and would like to connect...'}
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                    
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open('https://www.linkedin.com/in/rastrith-t-r-58472031b', '_blank')}
                      >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open('https://github.com/Ratrith156', '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-16 text-center fade-up">
          <Card className="max-w-2xl mx-auto shadow-soft border-border">
            <CardContent className="p-6">
              <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for faster communication.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;