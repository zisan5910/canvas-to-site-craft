
import { Menu, Code } from 'lucide-react';
import { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HeaderProps {
  onClear: () => void;
}

const Header = ({ onClear }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-700 hover:bg-slate-100 rounded-xl">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 bg-white/95 backdrop-blur-lg border-r border-slate-200/50 p-0">
            <SheetHeader className="p-6 border-b border-slate-200/50">
              <div className="flex flex-col items-center gap-4">
                {/* App Logo */}
                <img 
                  src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
                  alt="Theta Code Logo" 
                  className="w-20 h-20 object-contain rounded-2xl shadow-lg"
                />
                
                {/* App Name with Code Icon */}
                <div className="flex items-center gap-3">
                  <SheetTitle className="text-slate-800 text-2xl font-bold">Theta Code</SheetTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:bg-slate-100 rounded-lg"
                    onClick={() => window.open('https://ridoan-zisan.netlify.app', '_blank')}
                  >
                    <Code className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </SheetHeader>
            
            <ScrollArea className="flex-1 h-[calc(100vh-200px)]">
              <div className="px-6 py-4 space-y-6">
                {/* HTML Section */}
                <div className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-4 border border-orange-200/50">
                  <h4 className="font-semibold text-orange-800 mb-3 text-lg">
                    HTML এর ক্ষেত্রে
                  </h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                      রিয়েল টাইম আউটপুট
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                      চিট কোড গুলো ব্যবহার করে সহজে কোড লেখা
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 mt-1.5"></span>
                      এইচএসসি পরীক্ষার জন্য উপযোগী HTML
                    </li>
                  </ul>
                </div>

                {/* C Programming Section */}
                <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 p-4 border border-blue-200/50">
                  <h4 className="font-semibold text-blue-800 mb-3 text-lg">
                    C Programm এর ক্ষেত্রে
                  </h4>
                  <ul className="text-sm text-slate-700 space-y-2">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                      রিয়েল টাইম আউটপুট
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                      অ্যালগরিদম এর ব্যাখ্যা
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-1.5"></span>
                      ফ্লোচার্ট ভিজুয়ালাইজেশন
                    </li>
                  </ul>
                </div>

                {/* Bottom Text */}
                <div className="text-center pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    এইচএসসি সিলেবাসের অন্তর্ভুক্ত প্রায় সকল HTML ও C Programm
                  </p>
                </div>
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

        {/* App Name with Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png" 
            alt="Theta Code Logo" 
            className="w-8 h-8 object-contain rounded-lg"
          />
          <h1 className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Theta Code
          </h1>
        </div>

        {/* Empty space for balance */}
        <div className="w-10"></div>
      </div>
    </header>
  );
};

export default Header;
