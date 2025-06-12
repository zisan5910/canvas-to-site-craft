
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, ExternalLink, Users, Heart, Code, Calendar, ArrowRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Bogura Online Blood Donation Organisation",
      role: "Volunteer & Developer",
      period: "2023-Present",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      gradient: "from-red-500/20 to-red-500/5",
      achievements: [
        "Built blood donor platform serving 68k+ community members",
        "Implemented digital system reducing response time by 40%"
      ],
      links: ["Facebook Group", "Web Application"]
    },
    {
      title: "Youth Hope BD",
      role: "Volunteer & Developer",
      period: "2025-Present",
      icon: <Users className="h-8 w-8 text-green-500" />,
      gradient: "from-green-500/20 to-green-500/5",
      achievements: [
        "Developed platform for youth development and social services",
        "Created tools for volunteer management and event organization"
      ],
      links: ["Web Application"]
    }
  ];

  const projects = [
    { name: "BOBDO", description: "online blood donation website and web app", icon: <Heart className="h-5 w-5 text-red-500" /> },
    { name: "YouthHopeBD", description: "platform for youth development and social services", icon: <Users className="h-5 w-5 text-green-500" /> },
    { name: "UniConverter", description: "Unit converter supporting 50+ measurement categories", icon: <Code className="h-5 w-5 text-blue-500" /> },
    { name: "DevHub", description: "My all projects", icon: <Briefcase className="h-5 w-5 text-purple-500" /> }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Briefcase className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Experience</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">Volunteer work and development projects</p>
        </div>

        <div className="space-y-8 sm:space-y-12 max-w-6xl mx-auto mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${exp.gradient} p-6 sm:p-8`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-lg font-medium text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.role} | {exp.period}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="flex items-center gap-1 bg-white/80 hover:bg-white px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 shadow-sm">
                          <span className="text-sm font-medium text-foreground">{link}</span>
                          <ExternalLink className="h-3 w-3 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl">
                        <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">Web Development Projects</h3>
              <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
                <Code className="h-5 w-5 text-primary" />
                <span>Independent Developer | 2023-Present</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-transparent hover:from-primary/5 hover:to-primary/10 transition-all duration-300 card-hover border border-border/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                      {project.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-foreground text-lg">{project.name}</h4>
                        <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
