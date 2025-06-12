
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, User, Calendar, Globe, Droplets } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-red-500" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground">Family Information</h3>
              </div>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground">
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm sm:text-base">Father:</span>
                  <span className="font-medium text-sm sm:text-base">Md Rokibul Hasan Shekh</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm sm:text-base">Mother:</span>
                  <span className="font-medium text-sm sm:text-base">Mst. Zosna Khatun</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <span className="text-sm sm:text-base">Siblings:</span>
                  <span className="font-medium text-sm sm:text-base">1 Younger Sister</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <User className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-green-500" />
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground">Personal Information</h3>
              </div>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Date of Birth: 31 December, 2007</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Age: 17 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Droplets className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Blood Group: B+</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Nationality: Bangladeshi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Religion: Humanity</span>
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
