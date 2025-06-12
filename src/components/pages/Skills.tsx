
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Languages, Briefcase, MessageCircle, Star, Code, Palette, Globe } from 'lucide-react';

const Skills = () => {
  const languages = [
    { name: "Bengali", level: "Fluent", stars: 5, color: "text-green-500" },
    { name: "English", level: "Professional", stars: 4, color: "text-blue-500" }
  ];

  const skillCategories = [
    {
      title: "Core Professional Skills",
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      gradient: "from-green-500/20 to-green-500/5",
      skills: ["MS Office Suite", "Email Communication", "Team Collaboration", "Time Management", "Problem Solving", "Professional Ethics"]
    },
    {
      title: "Communication Skills",
      icon: <MessageCircle className="h-6 w-6 text-purple-500" />,
      gradient: "from-purple-500/20 to-purple-500/5",
      skills: ["Presentation", "Professional Email"]
    },
    {
      title: "Technical Skills",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      gradient: "from-blue-500/20 to-blue-500/5",
      skills: ["Web Development", "App Development", "AI Concepts"]
    },
    {
      title: "Creative Skills",
      icon: <Palette className="h-6 w-6 text-orange-500" />,
      gradient: "from-orange-500/20 to-orange-500/5",
      skills: ["Canva/Photoshop", "Social Media"]
    }
  ];

  const StarRating = ({ rating, color }: { rating: number; color: string }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 transition-colors ${star <= rating ? `fill-current ${color}` : 'text-gray-300'}`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Lightbulb className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Skills</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">My technical and professional capabilities</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Languages */}
          <Card className="lg:col-span-1 border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/5 p-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/80 rounded-lg">
                    <Languages className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Languages</h3>
                </div>
              </div>
              <div className="p-6 space-y-6">
                {languages.map((lang, index) => (
                  <div key={index} className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-bold text-foreground text-lg">{lang.name}</p>
                        <p className="text-sm text-muted-foreground">({lang.level})</p>
                      </div>
                      <StarRating rating={lang.stars} color={lang.color} />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skill Categories */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-r ${category.gradient} p-6`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/80 rounded-lg">
                        {category.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-secondary/20 hover:bg-secondary/30 px-4 py-3 rounded-lg text-sm font-medium text-foreground text-center transition-colors cursor-default">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
