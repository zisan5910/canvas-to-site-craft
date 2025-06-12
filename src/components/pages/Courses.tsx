
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, ExternalLink, Award, Bot, Globe, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "AI, Data Science, Machine Learning & Cyber Security",
      description: "Gained foundational knowledge of AI concepts and applications",
      provider: "GOOGLE, IBM, Sololearn, Simplilearn|Skillup",
      duration: "6 Months",
      icon: <Bot className="h-8 w-8 text-blue-500" />,
      gradient: "from-blue-500/20 to-blue-500/5",
      links: ["Certificate", "Course 1", "Course 2"]
    },
    {
      title: "Complete Web Development",
      description: "Acquired hands-on skills in building modern web applications",
      provider: "Programming Hero",
      duration: "1 week",
      icon: <Globe className="h-8 w-8 text-green-500" />,
      gradient: "from-green-500/20 to-green-500/5",
      links: ["Certificate", "Course"]
    },
    {
      title: "Digital Marketing",
      description: "Learned strategic online promotion techniques",
      provider: "HubSpot Academy",
      duration: "1 week",
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      gradient: "from-orange-500/20 to-orange-500/5",
      links: ["Certificate", "Course"]
    },
    {
      title: "Corporate Skills",
      description: "Mastered professional etiquette, management basics, and communication techniques",
      provider: "10 Minute School",
      duration: "3 weeks",
      icon: <Users className="h-8 w-8 text-purple-500" />,
      gradient: "from-purple-500/20 to-purple-500/5",
      links: ["Certificate", "Course"]
    }
  ];

  return (
    <section id="courses" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Professional Courses</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">Continuous learning and skill development</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className={`bg-gradient-to-r ${course.gradient} p-6 sm:p-8`}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 leading-tight">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="bg-secondary/30 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Provider</span>
                    </div>
                    <p className="text-sm font-semibold text-primary">{course.provider}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {course.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex items-center gap-1 bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300">
                        <Award className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-primary">{link}</span>
                        <ExternalLink className="h-3 w-3 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
