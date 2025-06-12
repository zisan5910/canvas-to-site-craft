
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
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <img 
              src="https://github.com/RidoanDev.png" 
              alt="Md Ridoan Mahmud Zisan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Md Ridoan Mahmud Zisan
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
            Student | Volunteer | Web Application Developer
          </p>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            As a dedicated student and volunteer, I aim to use my academic knowledge 
            and interpersonal skills to contribute to educational and social initiatives. I 
            seek opportunities for growth, collaboration, and positive impact while 
            upholding integrity, empathy, and excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('certificates')}
            className="w-full sm:w-auto"
          >
            <Award className="mr-2 h-5 w-5" />
            Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
