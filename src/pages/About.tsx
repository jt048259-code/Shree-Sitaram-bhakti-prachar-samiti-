import { motion } from "motion/react";
import { ShieldCheck, Heart, Users } from "lucide-react";

export default function About() {
  const values = [
    { icon: <ShieldCheck size={32} />, title: "सनातन संस्कृति", desc: "हमारी प्राचीन संस्कृति का संरक्षण एवं संवर्धन।" },
    { icon: <Heart size={32} />, title: "निस्वार्थ सेवा", desc: "मानवता की सेवा ही हमारा परम धर्म है।" },
    { icon: <Users size={32} />, title: "सामुदायिक एकता", desc: "प्रेम और सद्भावना से समाज को जोड़ना।" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="space-y-8"
        >
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">परिचय</span>
          <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tight">
            हमारे बारे में <br />
            <span className="text-gradient-saffron italic">एक परिचय</span>
          </h1>
          <div className="space-y-6 text-xl text-gray-400 font-hindi font-light leading-[1.8]">
            <p>
              श्री सीताराम भक्ति प्रचार समिति एक सामाजिक-धार्मिक एवं सेवा-प्रधान संस्था है, जो समाज के सर्वांगीण विकास, आध्यात्मिक जागरण तथा भारतीय सनातन संस्कृति के संरक्षण एवं संवर्धन हेतु निरंतर कार्यरत है।
            </p>
            <p>
              समिति का विश्वास है कि धर्म, संस्कार, सेवा और सद्भावना के माध्यम से ही एक सशक्त, नैतिक एवं समरस समाज का निर्माण संभव है। इसी उद्देश्य से समिति जनकल्याण, गौ सेवा, शिक्षा के प्रसार और निर्धनों की सहायता में अग्रणी है।
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="relative"
        >
          <div className="aspect-square rounded-[60px] bg-gradient-to-br from-saffron to-deep-orange overflow-hidden shadow-2xl relative group">
             <img 
              src="https://i.ibb.co/1f7XqfN8/In-Shot-20251225-133758888.jpg" 
              alt="About" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 group-hover:scale-110 transition-transform duration-1000" 
             />
             <div className="absolute inset-0 flex items-center justify-center p-12 text-white text-center">
                <p className="text-3xl font-bold italic leading-relaxed font-hindi">
                   "सेवा केवल कर्म नहीं, बल्कि साधना है।"
                </p>
             </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-saffron/10 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="spiritual-card p-12 text-center space-y-8 group hover:border-saffron/50 transition-all duration-500"
          >
            <div className="w-24 h-24 bg-white/5 text-saffron rounded-[2rem] flex items-center justify-center mx-auto mb-4 group-hover:bg-saffron group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-xl">
              {item.icon}
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-hindi text-white">{item.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
         initial={{ opacity: 0, y: 40 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mt-40 p-12 md:p-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-white/10 rounded-[4rem] shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[150px] -mr-80 -mt-80 pointer-events-none" />
        <div className="relative z-10 space-y-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-saffron">समिति का मूल संकल्प</h2>
          <p className="text-2xl md:text-3xl leading-relaxed font-hindi text-gray-300 font-light italic">
            "समिति द्वारा आयोजित भक्ति कार्यक्रम, धार्मिक अनुष्ठान, संस्कार शिविर और सांस्कृतिक आयोजनों के माध्यम से समाज में सकारात्मक चेतना का विकास किया जाता है। मानवता की सेवा को ईश्वर की सेवा मानते हुए समाज में प्रेम, शांति, सहयोग एवं नैतिक मूल्यों की स्थापना करना ही हमारा मूल संकल्प है।"
          </p>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
