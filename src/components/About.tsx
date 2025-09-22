import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      period: "2026 - 2028",
      institution: "Dayananda Sagar University",
      degree: "Bachelor of Engineering",
      location: "Bangalore",
      status: "Currently Pursuing",
      description: "2nd-year Engineering student focusing on cloud computing and modern programming technologies."
    },
    {
      period: "2022 - 2024",
      institution: "Harish PU College",
      degree: "Pre-University Course (PUC)",
      location: "Karnataka",
      status: "Completed",
      description: "Successfully completed pre-university education with focus on science and mathematics."
    },
    {
      period: "2012 - 2022",
      institution: "MES School Mudigere",
      degree: "Primary & Secondary Education",
      location: "Mudigere",
      status: "Completed",
      description: "Completed foundational education from 1st to 10th standard with strong academic performance."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated engineering student with a passion for technology and innovation, 
            currently pursuing my degree while building expertise in cloud computing and programming.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Story */}
          <div className="fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Rastrith T R Gowda, currently in my 2nd year of Engineering at Dayananda Sagar University 
                in Bangalore. My academic journey began at MES School Mudigere, where I developed a strong foundation 
                in science and mathematics, completing my education from 1st to 10th standard in 2022.
              </p>
              <p>
                After completing my PUC at Harish PU College in 2024, I embarked on my engineering journey with 
                a clear vision: to become proficient in cloud computing and modern programming technologies. 
                I'm particularly drawn to the scalability and innovation that cloud platforms offer.
              </p>
              <p>
                Currently, I'm building my technical expertise in Python and C++, while also developing 
                web development skills with HTML and CSS. My goal is to leverage these skills to create 
                meaningful solutions in the cloud computing domain, contributing to the future of technology.
              </p>
              <p>
                I believe in continuous learning and staying updated with the latest technological trends. 
                As I progress through my engineering program, I'm excited about the opportunities to apply 
                my knowledge in real-world projects and contribute to innovative solutions.
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="fade-up">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border border-border shadow-soft hover:shadow-medium transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Currently Pursuing' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-accent text-accent-foreground'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 fade-up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years of Education', value: '11+' },
              { label: 'Engineering Year', value: '2nd' },
              { label: 'Expected Graduation', value: '2028' },
              { label: 'Current Focus', value: 'Cloud Computing' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;