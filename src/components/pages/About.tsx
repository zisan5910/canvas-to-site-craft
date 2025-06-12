
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Calendar, Globe, Droplets, MapPin, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <User className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">About Me</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Family Information */}
          <Card className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-red-500/20 to-red-500/5 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                    <Heart className="h-6 w-6 text-red-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Family Information</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-4">
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Father</span>
                    </div>
                    <p className="font-bold text-lg text-primary">Md Rokibul Hasan Shekh</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Mother</span>
                    </div>
                    <p className="font-bold text-lg text-primary">Mst. Zosna Khatun</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Siblings</span>
                    </div>
                    <p className="font-bold text-lg text-primary">1 Younger Sister</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-green-500/20 to-green-500/5 p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white/80 rounded-xl shadow-sm">
                    <User className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">Personal Information</h3>
                </div>
              </div>
              
              <div className="p-6 sm:p-8">
                <div className="grid gap-4">
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Date of Birth</span>
                    </div>
                    <p className="font-bold text-lg text-primary">31 December, 2007</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <User className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Age</span>
                    </div>
                    <p className="font-bold text-lg text-primary">17 years</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Droplets className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Blood Group</span>
                    </div>
                    <p className="font-bold text-lg text-primary">B+</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Nationality</span>
                    </div>
                    <p className="font-bold text-lg text-primary">Bangladeshi</p>
                  </div>
                  
                  <div className="bg-secondary/20 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Religion</span>
                    </div>
                    <p className="font-bold text-lg text-primary">Humanity</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
