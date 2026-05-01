import { motion } from "motion/react";
import { Youtube, MessageSquare } from "lucide-react";

export default function Founder() {
  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-10 rotate-45 scale-150" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-24"
      >
        <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">समिति प्रणेता</span>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          संस्थापक
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-saffron/20 to-deep-orange/20 rounded-full blur-2xl group-hover:opacity-100 transition-opacity" />
            <img
              src="https://i.ibb.co/twgpRwX6/Screenshot-20251222-061837-2.png"
              alt="Sansthapak"
              className="w-full max-w-md rounded-full border-4 border-white/5 shadow-2xl relative z-10 transition-all duration-700 hover:scale-105"
            />
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-12"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">जितेंद्र राम त्रिपाठी जी</h2>
            <p className="text-2xl text-saffron font-medium font-hindi italic">भागवत प्रवक्ता एवं समाज सुधारक</p>
          </div>

          <div className="space-y-8 text-2xl text-gray-400 leading-relaxed font-hindi font-light italic border-l-4 border-saffron/30 pl-8">
            <p>
              जितेंद्र राम त्रिपाठी जी भागवत प्रवक्ता एवं समाज सुधारक हैं। वे श्री सीताराम भक्ति प्रचार समिति के संस्थापक हैं।
            </p>
            <p>
              गौ माता को राष्ट्रमाता घोषित कराने हेतु वे निरंतर जनजागरण अभियान चला रहे हैं। समाज में व्याप्त कुरीतियों को समाप्त करना उनका मुख्य संकल्प है।
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-8 border-t border-white/5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://wa.me/919140227239"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-500 px-10 py-4 rounded-full font-bold hover:bg-green-500/20 transition-all shadow-xl"
            >
              <MessageSquare size={20} /> WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.youtube.com/@BhagwatNikunj"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 text-red-500 px-10 py-4 rounded-full font-bold hover:bg-red-500/20 transition-all shadow-xl"
            >
              <Youtube size={20} /> YouTube
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
