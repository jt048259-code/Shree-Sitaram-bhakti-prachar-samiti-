import { motion } from "motion/react";
import { Wheat, BookOpen, HeartHandshake, ShieldCheck, GraduationCap, Users, Sprout } from "lucide-react";

export default function WorkArea() {
  const areas = [
    { icon: <Wheat size={32} />, title: "गौ सेवा", desc: "गौ संरक्षण एवं संवर्धन के लिए निरंतर प्रयास।" },
    { icon: <BookOpen size={32} />, title: "धार्मिक आयोजन", desc: "भक्ति, साधना और आध्यात्मिक शिविरों का आयोजन।" },
    { icon: <HeartHandshake size={32} />, title: "समाज सेवा", desc: "निर्धनों एवं असहायों की सहायता और कल्याण।" },
    { icon: <Users size={32} />, title: "सामाजिक जागरूकता", desc: "सामाजिक कुरीतियों के विरुद्ध अभियान।" },
    { icon: <ShieldCheck size={32} />, title: "धर्म संरक्षण", desc: "भारतीय सनातन संस्कृति का व्यापक प्रसार।" },
    { icon: <GraduationCap size={32} />, title: "छात्र उत्थान", desc: "विद्यार्थियों के लिए प्रतिभा खोज और सहायता कार्यक्रम।" },
    { icon: <Sprout size={32} />, title: "पर्यावरण संरक्षण", desc: "प्रकृति की रक्षा और वृक्षारोपण अभियान।" },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-24 space-y-4">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="space-y-4"
        >
          <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">सेवा के आयाम</span>
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            कार्य क्षेत्र
          </h1>
        </motion.div>
        <p className="text-gray-500 max-w-2xl mx-auto text-xl font-hindi font-light italic">
          समिति विभिन्न क्षेत्रों में सक्रिय रूप से समाज कल्याण और धर्म संरक्षण का कार्य कर रही है।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="spiritual-card p-12 group hover:border-saffron/50 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white/5 text-gray-500 group-hover:bg-saffron group-hover:text-white rounded-2xl flex items-center justify-center transition-all duration-500 mb-10 shadow-lg group-hover:rotate-12 group-hover:scale-110">
              {area.icon}
            </div>
            <h3 className="text-3xl font-bold font-hindi mb-6 text-white group-hover:text-saffron transition-colors">{area.title}</h3>
            <p className="text-gray-400 text-lg leading-relaxed font-hindi font-light">{area.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
}
