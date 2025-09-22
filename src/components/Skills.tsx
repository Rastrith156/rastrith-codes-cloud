import { Code, Cloud, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 75, description: "Object-oriented programming, data structures, and algorithms" },
        { name: "C++", level: 70, description: "System programming, competitive programming, and software development" }
      ]
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      skills: [
        { name: "Cloud Fundamentals", level: 60, description: "Understanding of cloud architecture, services, and deployment models" },
        { name: "AWS Basics", level: 45, description: "Learning AWS services, EC2, S3, and cloud infrastructure" }
      ]
    },
    {
      title: "Additional Skills",
      icon: Database,
      skills: [
        { name: "Problem Solving", level: 80, description: "Analytical thinking and algorithm design" },
        { name: "Version Control", level: 65, description: "Git, GitHub, and collaborative development workflows" }
      ]
    }
  ];

  const interests = [
    "Machine Learning",
    "DevOps",
    "System Design",
    "Open Source",
    "Web Security",
    "API Development"
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Currently developing proficiency in programming languages and cloud technologies, 
            with a focus on building practical solutions and continuous learning.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="fade-up shadow-soft hover:shadow-medium transition-smooth border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-foreground">{skill.name}</h4>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Interests */}
        <div className="fade-up">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Areas of Interest & Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card text-card-foreground rounded-full text-sm font-medium border border-border shadow-soft hover:shadow-medium hover:scale-105 transition-smooth cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center fade-up">
          <Card className="max-w-4xl mx-auto shadow-soft border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Learning Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                "As a 2nd-year engineering student, I believe in learning by doing. I'm constantly exploring 
                new technologies, working on practical projects, and staying updated with industry trends. 
                My goal is to build a strong foundation in programming and cloud computing while developing 
                the problem-solving skills necessary for innovative engineering solutions."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;