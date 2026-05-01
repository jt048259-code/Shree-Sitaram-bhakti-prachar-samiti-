import { motion } from "motion/react";

export default function Goal() {
  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full mandala-bg opacity-10" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-32"
      >
        <div className="text-center space-y-4">
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">हमारा विज़न</span>
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tight">हमारा लक्ष्य</h1>
        </div>

        <div className="space-y-20 text-3xl md:text-5xl text-white leading-tight font-hindi font-light italic text-center max-w-5xl mx-auto border-l-4 border-r-4 border-saffron/20 px-12">
          <p>
            "श्री सीताराम भक्ति प्रचार समिति" का उद्देश्य समाज में आध्यात्मिक चेतना, नैतिक मूल्यों एवं भारतीय सनातन संस्कृति का व्यापक और सतत प्रसार करना है। 
          </p>
          <p className="text-gray-500">
            समिति का लक्ष्य युवाओं, बच्चों तथा समाज के प्रत्येक वर्ग को धर्म, संस्कार, सेवा और सद्भावना से जोड़ते हुए उन्हें चरित्रवान, अनुशासित, कर्तव्यनिष्ठ एवं राष्ट्रभक्त नागरिक के रूप में विकसित करना है। 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pt-24 border-t border-white/5">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            className="spiritual-card p-12 space-y-8"
          >
            <h3 className="text-3xl font-bold text-saffron">मुख्य प्राथमिकताएं</h3>
            <p className="text-gray-400 text-2xl font-hindi leading-relaxed font-light">
              गौ संरक्षण, शिक्षा का संवर्धन, निर्धनों एवं असहायों की सेवा, पर्यावरण संरक्षण तथा सामाजिक कुरीतियों के उन्मूलन के माध्यम से मानवता की निस्वार्थ सेवा करना समिति की प्रमुख प्राथमिकताएं हैं।
            </p>
          </motion.div>
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 20 }}
             className="spiritual-card p-12 space-y-8"
          >
            <h3 className="text-3xl font-bold text-saffron">दीर्घकालिक विज़न</h3>
            <p className="text-gray-400 text-2xl font-hindi leading-relaxed font-light">
              भक्ति, साधना, संस्कार शिविरों, धार्मिक अनुष्ठानों एवं सांस्कृतिक कार्यक्रमों के माध्यम से समाज में सकारात्मक सोच, सामाजिक समरसता एवं राष्ट्र निर्माण की भावना को सुदृढ़ करना।
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
