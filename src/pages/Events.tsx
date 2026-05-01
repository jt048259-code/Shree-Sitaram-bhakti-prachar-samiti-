import { motion } from "motion/react";
import { Calendar, Trophy, GraduationCap, Info } from "lucide-react";

export default function Events() {
  const events = [
    {
      id: 1,
      title: "प्रतिभा खोज परीक्षा",
      date: "2 फरवरी 2025",
      type: "प्रतियोगिता",
      winners: ["शुभजीत राम त्रिपाठी", "अमन मिश्र", "पुनीत निर्मल"],
      desc: "हमारी समिति हर वर्ष इसी तरह के आध्यात्मिक और सांस्कृतिक कार्यक्रम आयोजित करती है।",
    },
    {
      id: 2,
      title: "✨ ब्रेनवेव बैटल 2026 ✨",
      date: "12 जनवरी 2026",
      type: "प्रस्तुति",
      desc: "अबकी बार, अपनी प्रतिभा से धनराशि कमाने का सबसे शानदार मौका! विषय: गणित, विज्ञान, संस्कृत, हिन्दी, सामान्य ज्ञान।",
      isPremium: true
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen spiritual-gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 mandala-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 mb-24"
      >
        <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">गतिविधियां</span>
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tight">
          इवेंट्स
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        {events.map((ev, idx) => (
          <motion.div
            key={ev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 border border-white/5 rounded-[3rem] space-y-8 ${
                ev.isPremium ? 'bg-gradient-to-br from-gray-900 to-black text-white' : 'bg-white/5 backdrop-blur-md text-white'
            }`}
          >
            <div className="flex justify-between items-start">
               <div className="text-sm font-bold uppercase tracking-widest text-saffron/60">
                 {ev.date}
               </div>
               {ev.isPremium && (
                 <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 bg-saffron text-white rounded-full animate-pulse">
                   आगामी Event
                 </span>
               )}
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-saffron transition-colors">
                {ev.title}
              </h3>
              <p className={`text-lg font-hindi font-light leading-relaxed ${ev.isPremium ? 'text-gray-300' : 'text-gray-400'}`}>
                {ev.desc}
              </p>
            </div>
            
            {ev.winners && (
               <div className="pt-6 border-t border-white/10 space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">विजेता</span>
                  <div className="flex flex-wrap gap-3">
                    {ev.winners.map((w, i) => (
                      <span key={i} className="text-base font-bold font-hindi text-saffron bg-saffron/10 px-5 py-2 rounded-xl">
                        {w}
                      </span>
                    ))}
                  </div>
               </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Event 3 - Notice Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="spiritual-card p-8 md:p-16 relative overflow-hidden mb-32 group glow-orange"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-saffron/10 rounded-full blur-[100px] -mr-64 -mt-64" />
        <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
            <motion.div 
               whileHover={{ scale: 1.05, rotate: -2 }}
               className="lg:w-1/3"
            >
                <img 
                    src="https://i.ibb.co/4n0BsB1j/notice.jpg" 
                    alt="Notice" 
                    className="w-full rounded-3xl shadow-2xl border-4 border-white/10" 
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://i.ibb.co/4n0BsB1j/notice.jpg";
                    }}
                />
            </motion.div>
            <div className="lg:w-2/3 space-y-6">
                <div className="inline-flex items-center gap-2 text-saffron font-bold text-xs uppercase tracking-widest bg-white/5 px-6 py-2.5 rounded-full border border-white/10">
                    <Info size={16} /> महत्वपूर्ण सूचना
                </div>
                <h3 className="text-4xl font-bold text-white">इवेंट 3 - सूचना पत्र</h3>
                <p className="text-xl text-gray-400 font-hindi font-light leading-relaxed">
                    समिति के आगामी कार्यक्रमों और विशेष सूचनाओं के लिए इस पत्र को ध्यानपूर्वक पढ़ें। अधिक जानकारी के लिए संपर्क पृष्ठ पर जाएं।
                </p>
            </div>
        </div>
      </motion.div>

      {/* Event 4 - Results Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto space-y-24 mb-20"
      >
        <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-white leading-tight tracking-tight">प्रतियोगिता परिणाम</h2>
            <p className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">ब्रेनवेव बैटल 2K26</p>
        </div>

        <div className="space-y-32">
            {/* Junior Category */}
            <div className="space-y-12">
                <h3 className="text-xl font-bold text-saffron uppercase tracking-widest border-b border-white/5 pb-6">कनिष्ठ वर्ग (कक्षा 6 से 8)</h3>
                <div className="divide-y divide-white/5 text-2xl font-hindi">
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">उत्कर्ष पाण्डेय</p>
                          <p className="text-sm text-gray-500">ऑक्सफोर्ड चिल्ड्रेन एकेडमी, गोरखपुर</p>
                        </div>
                        <span className="text-saffron font-bold text-lg">प्रथम</span>
                    </div>
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">संस्कार शुक्ल</p>
                          <p className="text-sm text-gray-500">संत ऋषि विद्यामन्दिर, गोरखपुर</p>
                        </div>
                        <span className="text-gray-500 font-bold text-lg">द्वितीय</span>
                    </div>
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">आदित्य नारायण शुक्ला</p>
                          <p className="text-sm text-gray-500">श्री योगवल गुरुकुल संस्कृत विद्यालय, मेरठ</p>
                        </div>
                        <span className="text-orange-900 font-bold text-lg">तृतीय</span>
                    </div>
                </div>
            </div>

            {/* Senior Category */}
            <div className="space-y-12">
                <h3 className="text-xl font-bold text-saffron uppercase tracking-widest border-b border-white/5 pb-6">वरिष्ठ वर्ग (कक्षा 9 से 12)</h3>
                <div className="divide-y divide-white/5 text-2xl font-hindi">
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">अनुष्का पाण्डेय</p>
                          <p className="text-sm text-gray-500">महाराणा प्रताप बालिका इण्टर कॉलेज, गोरखपुर</p>
                        </div>
                        <span className="text-saffron font-bold text-lg">प्रथम</span>
                    </div>
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">नन्दिनी</p>
                          <p className="text-sm text-gray-500">आदर्श भारती संस्कृत माध्यमिक विद्यालय, जौनपुर</p>
                        </div>
                        <span className="text-gray-500 font-bold text-lg">द्वितीय</span>
                    </div>
                    <div className="py-8 flex justify-between items-center group">
                        <div className="space-y-2">
                          <p className="font-bold text-white">अंश पाण्डेय</p>
                          <p className="text-sm text-gray-500">एल.पी.एम. पब्लिक स्कूल, गोरखपुर</p>
                        </div>
                        <span className="text-orange-900 font-bold text-lg">तृतीय</span>
                    </div>
                </div>
            </div>

            {/* Consolation Prizes */}
            <div className="p-12 bg-white/5 border border-white/10 rounded-[3rem] italic font-hindi text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto text-center">
                <p>
                    "प्रथम, द्वितीय एवं तृतीय स्थान प्राप्त करने वाले प्रतिभागियों को क्रमशः ₹100, ₹70 एवं ₹50 की धनराशि के साथ प्रशस्ति-पत्र प्रदान किया गया।"
                </p>
            </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
}
