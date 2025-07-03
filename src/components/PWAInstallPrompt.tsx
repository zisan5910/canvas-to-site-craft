
import { Download } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

const PWAInstallPrompt = () => {
  const { showInstallPrompt, installApp } = usePWAInstall();

  // Only show on mobile devices
  const isMobile = window.innerWidth <= 768;

  if (!showInstallPrompt || !isMobile) return null;

  return (
    <>
      {/* Full screen overlay with blur */}
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
        
        {/* Install Popup */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-sm mx-auto">
          
          {/* App Icon */}
          <div className="flex justify-center mb-4">
            <img
              src="https://i.postimg.cc/NMq1Y6K6/Picsart-25-07-03-17-55-04-190.png"
              alt="Theta Code"
              className="w-16 h-16 rounded-2xl shadow-lg"
            />
          </div>
          
          {/* App Name */}
          <h2 className="text-xl font-bold text-center text-gray-900 mb-2">
            Theta Code
          </h2>
          
          {/* Description */}
          <p className="text-center text-gray-600 text-sm mb-6">
            অ্যাপ ইনস্টল করে অফলাইনে ব্যবহার করুন
          </p>
          
          {/* Install Button */}
          <button
            onClick={installApp}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg"
          >
            <Download className="w-5 h-5" />
            ইনস্টল করুন
          </button>
          
        </div>
      </div>
    </>
  );
};

export default PWAInstallPrompt;
