
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-green-500" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">Education</h2>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">My academic journey</p>
        </div>

        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="font-semibold text-green-600 text-sm sm:text-base">
                      KARATOA MULTIMEDIA SCHOOL AND COLLEGE
                    </span>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block" />
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">2023-2024</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Major: Higher Math</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-4 sm:p-5 lg:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-green-500 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2">
                    Secondary School Certificate (SSC)
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <span className="font-semibold text-green-600 text-sm sm:text-base">
                      DHUNAT GOVT N.U. PILOT MODEL HIGH SCHOOL
                    </span>
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block" />
                  </div>
                  <p className="text-muted-foreground mb-2 text-sm sm:text-base">2021-2022</p>
                  <p className="text-base sm:text-lg font-semibold text-green-600 mb-2">GPA: 5.00/5.00</p>
                  <div className="space-y-1 text-muted-foreground text-sm sm:text-base">
                    <p>Group: Science</p>
                    <p>Major: Higher Math</p>
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
