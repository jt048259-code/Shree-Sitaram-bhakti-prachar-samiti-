import { motion } from "motion/react";
import { Handshake, ArrowRight, ExternalLink } from "lucide-react";

export default function Join() {
  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-1/2 mandala-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-10"
        >
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">सहभागिता</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tight">
             जनकल्याण व <br />
             <span className="text-gradient-saffron italic">राष्ट्र निर्माण</span>
          </h1>
          <div className="space-y-8 text-2xl text-gray-400 font-hindi font-light leading-[1.8]">
            <p>
              यदि आपके हृदय में धर्म, सेवा, संस्कार और समाज के प्रति उत्तरदायित्व की भावना है, और आप अपने जीवन का कुछ अंश जनकल्याण व राष्ट्र निर्माण के लिए समर्पित करना चाहते हैं, तो श्री सीताराम भक्ति प्रचार समिति से जुड़कर आप इस पुण्य कार्य का भाग बन सकते हैं। 
            </p>
            <p className="font-bold text-white border-l-4 border-saffron pl-8 py-4 bg-white/5 rounded-r-2xl">
              "आपका एक कदम किसी के जीवन में आशा की किरण बन सकता है।"
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="spiritual-card p-12 md:p-20 text-center space-y-12 glow-orange"
        >
          <div className="space-y-4">
             <h2 className="text-4xl md:text-5xl font-bold text-white">सहयोगी बनें</h2>
             <p className="text-gray-400 text-xl font-hindi">यदि आप धर्म और समाज सेवा में योगदान देना चाहते हैं, तो नीचे दिए गए बटन पर क्लिक करके फॉर्म भरें।</p>
          </div>

          <motion.a
             whileHover={{ y: -5, scale: 1.02 }}
             href="https://forms.gle/rBK9fURBF7NTGF8u7/"
             target="_blank"
             rel="noreferrer"
             className="inline-flex items-center justify-center gap-4 w-full py-8 bg-gradient-to-r from-saffron to-deep-orange text-white text-2xl font-bold rounded-full shadow-[0_20px_40px_-10px_rgba(255,153,51,0.4)] transition-all group"
          >
            Join the Samiti <ExternalLink size={28} />
          </motion.a>

          <p className="text-[10px] text-gray-500 uppercase tracking-[0.4em]">
            समिति के प्रतिनिधि आपसे संपर्क करेंगे।
          </p>
        </motion.div>
      </div>
    </div>
    </div>
  );
}
