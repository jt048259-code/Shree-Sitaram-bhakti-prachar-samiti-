import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "होम", path: "/" },
  { name: "संस्थापक", path: "/founder" },
  { name: "लक्ष्य", path: "/goal" },
  { name: "हमारे बारे में", path: "/about" },
  { name: "कार्य क्षेत्र", path: "/work" },
  { name: "जुड़ें", path: "/join" },
  { name: "इवेंट", path: "/events" },
  { name: "संपर्क", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <img
                src="https://i.ibb.co/1f7XqfN8/In-Shot-20251225-133758888.jpg"
                alt="Logo"
                className="h-12 w-12 rounded-full border border-saffron/30 shadow-[0_0_15px_-5px_rgba(255,153,51,0.5)] bg-black p-0.5"
              />
            </motion.div>
            <span className="font-serif font-bold text-white text-lg tracking-tight group-hover:text-saffron transition-colors">
              श्री सीताराम भक्ति प्रचार समिति
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:text-saffron border-b-2 ${
                  location.pathname === link.path ? "text-saffron border-saffron" : "text-gray-400 border-transparent hover:border-saffron/30"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
             <a
              href="https://shree-sitaram-bhakti-prachar-samiti.blogspot.com/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold uppercase tracking-widest px-8 py-3 bg-gradient-to-r from-saffron to-deep-orange text-white rounded-full hover:scale-105 shadow-lg shadow-saffron/20 transition-all"
            >
              ब्लॉग
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-saffron p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-black/95 backdrop-blur-3xl border-b border-white/5"
        >
          <div className="px-6 pt-4 pb-12 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-lg font-hindi font-bold rounded-2xl transition-all ${
                  location.pathname === link.path ? "bg-saffron/10 text-saffron" : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
              <a
                href="https://shree-sitaram-bhakti-prachar-samiti.blogspot.com/"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center px-4 py-5 text-lg font-bold bg-gradient-to-r from-saffron to-deep-orange text-white rounded-full shadow-2xl shadow-saffron/20"
              >
                ब्लॉग देखें
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
