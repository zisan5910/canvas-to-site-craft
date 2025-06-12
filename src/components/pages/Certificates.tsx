import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Download, Share, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certificates = () => {
  const [currentCertificate, setCurrentCertificate] = React.useState(0);

  const certificates = [
    // High-Demand Tech Skills
    {
      title: "Machine Learning",
      issuer: "Coursera",
      date: "2024",
      description: "Fundamentals of machine learning algorithms and applications",
      image: "https://i.postimg.cc/mrSrY5Kq/machine-learning.png"
    },
    {
      title: "Python for Data Science and AI",
      issuer: "IBM",
      date: "2024",
      description: "Using Python for data analysis, visualization, and AI applications",
      image: "https://i.postimg.cc/GhG5stCC/Python-for-Data-Science-and-Al.png"
    },
    {
      title: "Complete Web Development",
      issuer: "Programming Hero",
      date: "2024",
      description: "Full-stack web development covering modern frameworks and technologies",
      image: "https://i.postimg.cc/gkr6Ym10/Complete-Web-Development.png"
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "Stanford Online",
      date: "2024",
      description: "Basic concepts and applications of AI technologies",
      image: "https://i.postimg.cc/VsZdZ25P/introduction-to-artificial-intelligence.png"
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "2024",
      description: "Core principles of information security and cyber defense",
      image: "https://i.postimg.cc/nhk0pcgv/Foundations-of-Cyber-Security.png"
    },
    {
      title: "Introduction to Cyber Security",
      issuer: "Cisco",
      date: "2024",
      description: "Fundamentals of protecting systems and networks from digital attacks",
      image: "https://i.postimg.cc/RZKhFFdv/introduction-to-cyber-security.png"
    },
    {
      title: "Introduction to Python",
      issuer: "Sololearn",
      date: "2024",
      description: "Comprehensive course covering Python fundamentals and programming concepts",
      image: "https://i.postimg.cc/L6qhcvZY/Introduction-to-Python.jpg"
    },
    {
      title: "Digital Marketing",
      issuer: "HubSpot Academy",
      date: "2024",
      description: "Strategic online marketing and promotional techniques",
      image: "https://i.postimg.cc/XvKr2JBs/digital-marketing.png"
    },
    // Professional Skills
    {
      title: "Presentation and Public Speaking",
      issuer: "Toastmasters International",
      date: "2024",
      description: "Developing effective communication and presentation skills",
      image: "https://i.postimg.cc/VvJLcL5Q/Presentation-and-Public-Speaking.png"
    },
    {
      title: "CV writing and interview",
      issuer: "LinkedIn Learning",
      date: "2024",
      description: "Professional resume building and interview preparation techniques",
      image: "https://i.postimg.cc/cJGKMYCK/CV-writing-and-interview.jpg"
    },
    {
      title: "Business Case Solving Certificate",
      issuer: "Harvard Business School Online",
      date: "2024",
      description: "Analytical techniques for solving complex business problems",
      image: "https://i.postimg.cc/4y27zSHZ/Business-Case-Solving-Certificate.png"
    },
    {
      title: "Communication hacks",
      issuer: "Udemy",
      date: "2024",
      description: "Effective communication strategies for professional settings",
      image: "https://i.postimg.cc/dQ5yPLHX/Communication-hacks.jpg"
    },
    {
      title: "Corporate etiquette",
      issuer: "Skillsoft",
      date: "2024",
      description: "Professional workplace behavior and business manners",
      image: "https://i.postimg.cc/vHjxTCdt/Corporate-etiquette.jpg"
    },
    {
      title: "Basic of management",
      issuer: "Coursera",
      date: "2024",
      description: "Fundamental principles of business management",
      image: "https://i.postimg.cc/0jyKKsQc/Basic-of-management.jpg"
    },
    {
      title: "Money management",
      issuer: "Khan Academy",
      date: "2024",
      description: "Personal finance and investment strategies",
      image: "https://i.postimg.cc/fLTRBvNb/Money-management.jpg"
    },
    {
      title: "Microsoft Office Starter Course Certificate",
      issuer: "Microsoft Learn",
      date: "2024",
      description: "Essential skills for using Microsoft Office applications",
      image: "https://i.postimg.cc/bvPJ2hVk/Microsoft-Office-Starter-Course-Certificate.png"
    },
    {
      title: "Email Writing Certificate",
      issuer: "Grammarly",
      date: "2024",
      description: "Professional email composition and business correspondence",
      image: "https://i.postimg.cc/fLwJ1NxD/Email-Writing-Certificate.png"
    },
    // Sustainability & Global Issues
    {
      title: "Net Zero 101- What, Why and How",
      issuer: "Climate Action",
      date: "2024",
      description: "Understanding net zero emissions and climate action strategies",
      image: "https://i.postimg.cc/ZR7Kgybx/Net-Zero-101-What-Why-and-How.jpg"
    },
    {
      title: "Introduction to Sustainable Development in Practice",
      issuer: "UN Sustainable Development Solutions Network",
      date: "2024",
      description: "Practical approaches to implementing sustainable development goals",
      image: "https://i.postimg.cc/tCL7pPhr/Introduction-to-Sustainable-Development-in-Practice.jpg"
    },
    {
      title: "The UN Climate Change process",
      issuer: "United Nations",
      date: "2024",
      description: "Understanding international climate change agreements and policies",
      image: "https://i.postimg.cc/zv4DDZRL/The-UN-Climate-Change-process.jpg"
    },
    {
      title: "Gender equality and human rights in climate action and renewable energy",
      issuer: "UN Women",
      date: "2024",
      description: "Intersection of gender equality, human rights and environmental action",
      image: "https://i.postimg.cc/V6Dd8VRM/Gender-equality-and-human-rights-in-climate-action-and-renewable-energy.jpg"
    },
    // Academic & Competitions
    {
      title: "Bangladesh Mathematical Olympiad",
      issuer: "Bangladesh Math Olympiad Committee",
      date: "2024",
      description: "National mathematics competition for students",
      image: "https://i.postimg.cc/pLFhFkWb/Bangladesh-Mathematical-Olympiad.png"
    },
    {
      title: "ICT Olympiad - Part 1",
      issuer: "Bangladesh ICT Division",
      date: "2024",
      description: "National information technology competition - preliminary round",
      image: "https://i.postimg.cc/1XJXxKgP/ICT-Olympiad-01.png"
    },
    {
      title: "ICT Olympiad - Part 2",
      issuer: "Bangladesh ICT Division",
      date: "2024",
      description: "National information technology competition - final round",
      image: "https://i.postimg.cc/D020YNwB/ICT-Olympiad-02.png"
    },
    {
      title: "National GK Olympiad",
      issuer: "Bangladesh Olympiad Foundation",
      date: "2024",
      description: "National general knowledge competition",
      image: "https://i.postimg.cc/tTg8j6x0/GK-olympiad.jpg"
    },
    // Language Proficiency
    {
      title: "IELTS mock test solution",
      issuer: "British Council",
      date: "2024",
      description: "Preparation materials for IELTS examination",
      image: "https://i.postimg.cc/L5W5qgG8/IELTS-mock-test-solution.jpg"
    },
    {
      title: "Academic English grammar",
      issuer: "Cambridge English",
      date: "2024",
      description: "Advanced English grammar for academic purposes",
      image: "https://i.postimg.cc/qRLC7RkN/Academic-English-grammar.jpg"
    },
    {
      title: "English for Everyday Certificate",
      issuer: "EF Education First",
      date: "2024",
      description: "Practical English language skills for daily communication",
      image: "https://i.postimg.cc/nrrMcGRW/English-for-Everyday-Certificate.png"
    }
  ];

  const nextCertificate = () => {
    setCurrentCertificate((prev) => (prev + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setCurrentCertificate((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section id="certificates" className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 text-green-500" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Certifications</h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground">Professional achievements and recognitions</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-2 border-primary/20">
            <CardContent className="p-4 sm:p-8">
              <div className="text-center mb-6 sm:mb-8">
                <div className="w-full h-48 sm:h-64 rounded-lg flex items-center justify-center mb-4 sm:mb-6 relative overflow-hidden">
                  <img
                    src={certificates[currentCertificate].image}
                    alt={certificates[currentCertificate].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center z-10 p-3 sm:p-4 bg-background/80 rounded-lg max-w-xs sm:max-w-sm">
                      <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">
                        {certificates[currentCertificate].title}
                      </h3>
                      <p className="text-sm sm:text-md text-muted-foreground">
                        {certificates[currentCertificate].issuer}
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                        {certificates[currentCertificate].date}
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-2">
                  {certificates[currentCertificate].description}
                </p>

                <div className="flex justify-center items-center gap-4 mb-4 sm:mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevCertificate}
                    className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {currentCertificate + 1} / {certificates.length}
                  </span>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextCertificate}
                    className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-sm sm:text-base">
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Download Certificate
                  </Button>
                  <Button variant="outline" className="text-sm sm:text-base">
                    <Share className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
