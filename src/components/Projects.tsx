import { ExternalLink, Github, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const upcomingProjects = [
    {
      title: "Cloud-Based Task Manager",
      description: "A web application for task management with cloud storage integration, user authentication, and real-time collaboration features.",
      technologies: ["Python", "HTML", "CSS", "Cloud Services"],
      category: "Web Development",
      timeline: "Planned for Q1 2025"
    },
    {
      title: "Personal Finance Tracker",
      description: "A desktop application to track personal expenses and income with data visualization and budget planning features.",
      technologies: ["C++", "Data Visualization"],
      category: "Desktop Application",
      timeline: "Planned for Q2 2025"
    },
    {
      title: "Learning Management System",
      description: "A comprehensive platform for students to access course materials, submit assignments, and track progress.",
      technologies: ["Python", "HTML", "CSS", "Database"],
      category: "Educational Platform",
      timeline: "Planned for Q3 2025"
    }
  ];

  const learningGoals = [
    "Build full-stack web applications",
    "Deploy applications on cloud platforms",
    "Implement user authentication systems",
    "Create responsive and accessible designs",
    "Practice database design and management",
    "Learn DevOps and CI/CD practices"
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While I'm currently building my technical foundation, I have exciting projects planned 
            that will showcase my growing skills in programming and cloud computing.
          </p>
        </div>

        {/* Current Status */}
        <div className="text-center mb-12 fade-up">
          <Card className="max-w-2xl mx-auto shadow-soft border-border">
            <CardContent className="p-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Building My Portfolio</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a 2nd-year engineering student, I'm currently focused on strengthening my 
                programming fundamentals and learning cloud computing concepts. My portfolio will 
                grow with practical projects that demonstrate real-world applications of my skills.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Projects */}
        <div className="fade-up mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Planned Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth border-border group">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{project.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Project Learning Objectives
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Star className="h-5 w-5 text-primary" />
                  Technical Goals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {learningGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Github className="h-5 w-5 text-primary" />
                  Portfolio Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  My approach to building a strong portfolio includes:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Starting with fundamental projects to build confidence</li>
                  <li>• Gradually increasing complexity with each new project</li>
                  <li>• Focusing on clean, well-documented code</li>
                  <li>• Implementing industry best practices</li>
                  <li>• Seeking feedback from peers and mentors</li>
                </ul>
                <div className="pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open('https://github.com/Ratrith156', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Follow My Progress on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;