import { motion } from "motion/react";
import { Mail, Phone, Youtube, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const contacts = [
    { 
      icon: <Mail size={36} />, 
      title: "ईमेल", 
      value: "jitendrakumart557@gmail.com",
      link: "mailto:jitendrakumart557@gmail.com",
      color: "text-orange-400"
    },
    { 
      icon: <Phone size={36} />, 
      title: "मोबाइल / व्हाट्सएप", 
      value: "+91 9140227239",
      link: "https://wa.me/919140227239",
      color: "text-green-400"
    },
    { 
      icon: <Youtube size={36} />, 
      title: "यूट्यूब", 
      value: "@BhagwatNikunj",
      link: "https://www.youtube.com/@BhagwatNikunj",
      color: "text-red-500"
    }
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full mandala-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-24"
      >
        <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">जुड़ें हमसे</span>
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tight">संपर्क करें</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {contacts.map((contact, idx) => (
          <motion.a
            key={idx}
            href={contact.link}
            target={contact.link.startsWith('http') ? "_blank" : "_self"}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="spiritual-card p-12 group hover:border-saffron/50 transition-all duration-500 flex flex-col items-center text-center space-y-10"
          >
            <div className={`${contact.color} group-hover:scale-125 transition-transform duration-500`}>
              {contact.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">{contact.title}</h3>
              <p className="text-2xl font-bold text-white break-all group-hover:text-saffron transition-colors">{contact.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-40 p-12 md:p-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 border border-white/5 rounded-[4rem] text-center space-y-12 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,153,51,0.05),transparent_70%)]" />
        <div className="space-y-6 max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">आज ही सहयोगी बनें</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-hindi font-light leading-relaxed">
                समाज सेवा और धर्म के इस पवित्र कार्य में आपका एक छोटा सहयोग बहुत बड़ा परिवर्तन ला सकता है। 
            </p>
        </div>

        <motion.a 
            whileHover={{ scale: 1.05 }}
            href="https://wa.me/919140227239" 
            target="_blank"
            rel="noreferrer"
            className="relative z-10 inline-flex items-center gap-4 px-16 py-7 bg-white text-black text-xl font-bold rounded-full hover:bg-saffron hover:text-white transition-all shadow-2xl group"
        >
            WhatsApp <ArrowRight className="group-hover:translate-x-2 transition-transform" />
        </motion.a>
      </motion.div>
    </div>
    </div>
  );
}
