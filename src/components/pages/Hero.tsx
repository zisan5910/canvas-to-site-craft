
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
        <div className="relative">
          <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="https://github.com/RidoanDev.png" 
              alt="Md Ridoan Mahmud Zisan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
            Md Ridoan Mahmud Zisan
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
            Student | Volunteer | Web Application Developer
          </p>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            As a dedicated student and volunteer, I aim to use my academic knowledge 
            and interpersonal skills to contribute to educational and social initiatives. I 
            seek opportunities for growth, collaboration, and positive impact while 
            upholding integrity, empathy, and excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto text-sm sm:text-base">
            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('certificates')}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <Award className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
