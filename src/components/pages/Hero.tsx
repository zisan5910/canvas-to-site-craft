
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Award, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-primary/5 px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6 sm:space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl card-hover">
              <img 
                src="https://github.com/RidoanDev.png" 
                alt="Md Ridoan Mahmud Zisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-500 rounded-full border-4 border-background flex items-center justify-center animate-pulse-gentle">
              <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gradient-text">Md Ridoan Mahmud Zisan</span>
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Student
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Volunteer
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Web Developer
                </span>
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-6 md:px-8">
                As a dedicated student and volunteer, I aim to use my academic knowledge 
                and interpersonal skills to contribute to educational and social initiatives. I 
                seek opportunities for growth, collaboration, and positive impact while 
                upholding integrity, empathy, and excellence.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('certificates')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Award className="mr-2 h-5 w-5" />
              View Certifications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
