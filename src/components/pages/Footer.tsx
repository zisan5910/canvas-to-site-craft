
import React from 'react';
import { Linkedin, Github, Facebook, Instagram, Twitter, MessageSquare, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, href: "https://www.linkedin.com/in/ridoan2007", label: "LinkedIn", color: "hover:text-blue-500" },
    { icon: <Github className="h-6 w-6" />, href: "https://github.com/RidoanDev", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <Facebook className="h-6 w-6" />, href: "https://m.facebook.com/ridoan2007", label: "Facebook", color: "hover:text-blue-600" },
    { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/ridoan2007", label: "Instagram", color: "hover:text-pink-500" },
    { icon: <Twitter className="h-6 w-6" />, href: "https://x.com/ridoan2007", label: "Twitter", color: "hover:text-blue-400" },
    { icon: <MessageSquare className="h-6 w-6" />, href: "https://wa.me/8801712525910", label: "WhatsApp", color: "hover:text-green-500" }
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Let's Connect</h3>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Follow me on social media and let's build something amazing together!
            </p>
          </div>
          
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="flex items-center justify-center gap-2 text-sm opacity-80">
              Made with <Heart className="h-4 w-4 text-red-400" /> by Md Ridoan Mahmud Zisan
            </p>
            <p className="text-xs opacity-60 mt-2">
              © 2024 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
