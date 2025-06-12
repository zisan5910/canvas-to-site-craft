
import React from 'react';
import { Linkedin, Github, Facebook, Instagram, Twitter, MessageSquare } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://www.linkedin.com/in/ridoan2007", label: "LinkedIn" },
    { icon: <Github className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://github.com/RidoanDev", label: "GitHub" },
    { icon: <Facebook className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://m.facebook.com/ridoan2007", label: "Facebook" },
    { icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://www.instagram.com/ridoan2007", label: "Instagram" },
    { icon: <Twitter className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://x.com/ridoan2007", label: "Twitter" },
    { icon: <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />, href: "https://wa.me/8801712525910", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg opacity-90">Social Media</p>
          
          <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
