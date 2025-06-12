
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, ExternalLink, Award, Star } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text">Education</h2>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">My academic journey and achievements</p>
        </div>

        <div className="space-y-8 sm:space-y-12 max-w-5xl mx-auto">
          {/* HSC */}
          <Card className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl">
                    <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      Higher Secondary Certificate (HSC)
                    </h3>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                      <Award className="h-4 w-4" />
                      2023-2024
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="font-semibold text-primary text-lg sm:text-xl">
                      KARATOA MULTIMEDIA SCHOOL AND COLLEGE
                    </span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground icon-hover cursor-pointer" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl">
                      <p className="font-medium text-foreground">Major Subject</p>
                      <p className="text-lg text-primary font-semibold">Higher Math</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/5 to-transparent p-4 rounded-xl">
                      <p className="font-medium text-foreground">Group</p>
                      <p className="text-lg text-primary font-semibold">Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SSC */}
          <Card className="border-0 shadow-2xl card-hover bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 rounded-2xl">
                    <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-600" />
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      Secondary School Certificate (SSC)
                    </h3>
                    <div className="flex items-center gap-2 text-sm sm:text-base text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full">
                      <Award className="h-4 w-4" />
                      2021-2022
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <span className="font-semibold text-primary text-lg sm:text-xl">
                      DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL
                    </span>
                    <ExternalLink className="h-5 w-5 text-muted-foreground icon-hover cursor-pointer" />
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-6 rounded-xl border-l-4 border-yellow-500">
                    <div className="flex items-center gap-3 mb-4">
                      <Star className="h-6 w-6 text-yellow-600" />
                      <span className="text-2xl font-bold text-yellow-600">GPA: 5.00/5.00</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-foreground">Group</p>
                        <p className="text-lg text-primary font-semibold">Science</p>
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Major Subject</p>
                        <p className="text-lg text-primary font-semibold">Higher Math</p>
                      </div>
                    </div>
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

export default Education;
