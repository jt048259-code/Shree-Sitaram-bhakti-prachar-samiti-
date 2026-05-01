import { Youtube, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 py-24 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-6 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://i.ibb.co/1f7XqfN8/In-Shot-20251225-133758888.jpg"
                alt="Logo"
                className="h-10 w-10 rounded-full border border-saffron/30"
              />
              <span className="font-serif font-bold text-white tracking-tight">श्री सीताराम भक्ति प्रचार समिति</span>
            </Link>
            <p className="text-gray-500 max-w-sm text-sm leading-relaxed font-hindi">
              समाज में आध्यात्मिक चेतना, नैतिक मूल्यों एवं भारतीय सनातन संस्कृति का व्यापक प्रसार।
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-saffron uppercase tracking-[0.3em]">नेविगेशन</h4>
            <div className="flex flex-col space-y-3 font-bold text-xs uppercase tracking-widest text-gray-400">
              <Link to="/" className="hover:text-saffron transition-colors">होम</Link>
              <Link to="/about" className="hover:text-saffron transition-colors">परिचय</Link>
              <Link to="/events" className="hover:text-saffron transition-colors">इवेंट्स</Link>
              <Link to="/join" className="hover:text-saffron transition-colors">जुड़ें</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-bold text-saffron uppercase tracking-[0.3em]">सोशल</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@BhagwatNikunj" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-saffron hover:text-white transition-all">
                <Youtube size={16} />
              </a>
              <a href="https://wa.me/919140227239" target="_blank" rel="noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-saffron hover:text-white transition-all">
                <MessageSquare size={16} />
              </a>
              <a href="mailto:jitendrakumart557@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-saffron hover:text-white transition-all">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-[10px] text-gray-600 uppercase tracking-widest">
             © {new Date().getFullYear()} श्री सीताराम भक्ति प्रचार समिति
           </p>
           <p className="text-[10px] text-saffron uppercase tracking-widest italic opacity-50">
             सनातन संस्कृति की सेवा में समर्पित
           </p>
        </div>
      </div>
    </footer>
  );
}
