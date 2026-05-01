import { motion } from "motion/react";
import { Mail, Phone, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-0 bg-spiritual-bg selection:bg-saffron selection:text-white min-h-screen spiritual-gradient-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep Traditional Aesthetic Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2073&auto=format&fit=crop" 
             className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale brightness-50"
             alt="Temple Background"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-spiritual-bg via-transparent to-spiritual-bg" />
           <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-saffron/10 rounded-full blur-[150px] -mr-96 -mt-96 animate-pulse" />
           <div className="absolute inset-0 mandala-bg opacity-30" />
        </div>

        <div className="relative z-10 text-center max-w-6xl px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
             <div className="relative mb-12 animate-float">
               <div className="absolute -inset-4 bg-saffron/20 rounded-full blur-xl animate-pulse" />
               <img 
                 src="https://i.ibb.co/1f7XqfN8/In-Shot-20251225-133758888.jpg" 
                 className="h-28 w-28 rounded-full border-4 border-saffron/50 shadow-2xl relative z-10 bg-black p-1"
                 alt="Samiti Logo"
               />
             </div>
             
             <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-6">
               <span className="block text-white opacity-90">श्री सीताराम</span>
               <span className="text-gradient-saffron font-serif italic pb-4 block">भक्ति प्रचार समिति</span>
             </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-3xl text-gray-400 max-w-3xl mx-auto font-hindi font-light leading-relaxed border-l-4 border-saffron pl-8"
          >
            "गौ सेवा, संस्कार निर्माण और मानवता की निस्वार्थ सेवा ही हमारा परम लक्ष्य है।"
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-6 pt-12"
          >
            <Link
              to="/join"
              className="px-12 py-5 bg-gradient-to-r from-saffron to-deep-orange text-white rounded-full font-bold shadow-[0_20px_40px_-15px_rgba(255,153,51,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(255,153,51,0.6)] hover:scale-105 transition-all duration-300"
            >
              समिति से जुड़ें
            </Link>
            <Link
              to="/about"
              className="px-12 py-5 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              हमारे बारे में
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-saffron/50"
        >
          <ArrowRight className="rotate-90" size={32} />
        </motion.div>
      </section>

      {/* Ornamental Line */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="ornamental-line" />
      </div>

      {/* Founder Preview */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-spiritual-bg to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-spiritual-bg to-transparent" />
        <div className="absolute inset-0 mandala-bg opacity-10 rotate-45" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="spiritual-card p-12 md:p-24 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center glow-orange"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10"
              >
                <img 
                  src="https://i.ibb.co/twgpRwX6/Screenshot-20251222-061837-2.png"
                  alt="Sansthapak"
                  className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl transition-all duration-700 hover:grayscale-0"
                />
              </motion.div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-saffron/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-saffron font-bold tracking-[0.2em] uppercase text-xs">संस्थापक परिचय</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">जितेंद्र राम त्रिपाठी जी</h2>
                <p className="text-lg text-saffron font-medium italic">भागवत प्रवक्ता एवं समाज सुधारक</p>
              </div>
              <p className="text-xl text-gray-400 font-hindi leading-relaxed">
                जितेंद्र राम त्रिपाठी जी भागवत प्रवक्ता एवं समाज सुधारक हैं। वे श्री सीताराम भक्ति प्रचार समिति के संस्थापक हैं। गौ माता को राष्ट्रमाता घोषित कराने हेतु वे निरंतर जनजागरण अभियान चला रहे हैं। समाज में व्याप्त कुरीतियों को समाप्त करना उनका मुख्य संकल्प है। देशभर में आध्यात्मिक कार्यक्रमों के माध्यम से वे जनता को जागरूक करते हैं।
              </p>
              <div className="pt-4">
                <Link 
                  to="/founder" 
                  className="inline-flex items-center gap-2 text-saffron font-bold hover:gap-4 transition-all"
                >
                  विस्तार से जानें <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ornamental Line */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="ornamental-line" />
      </div>

      {/* Hero Goal Section */}
      <section className="py-40 relative overflow-hidden overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1524492459426-ed4304856b3e?q=80&w=2070&auto=format&fit=crop" 
             className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
             alt="Varanasi Background"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-spiritual-bg via-transparent to-spiritual-bg" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-gray-300 font-hindi leading-relaxed italic"
          >
            "श्री सीताराम भक्ति प्रचार समिति का उद्देश्य समाज में आध्यात्मिक चेतना, नैतिक मूल्यों एवं भारतीय सनातन संस्कृति का व्यापक और सतत प्रसार करना है।"
          </motion.p>
          <Link
             to="/goal"
             className="inline-block text-saffron font-bold text-xs uppercase tracking-widest hover:tracking-[0.2em] transition-all"
          >
             पूरा लक्ष्य पढ़ें
          </Link>
        </div>
      </section>

      {/* Quick Contact Card */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="spiritual-card p-12 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-16 glow-orange">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white">संपर्क करें</h2>
            <p className="text-gray-400 text-lg">धर्म और सेवा के कार्यों से जुड़ने के लिए हमसे बात करें।</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
               whileHover={{ y: -5, scale: 1.05 }}
               href="mailto:jitendrakumart557@gmail.com"
               className="flex items-center gap-3 p-5 px-8 bg-white/5 border border-white/10 rounded-2xl text-saffron font-bold hover:bg-white/10 transition-all"
            >
              <Mail className="text-saffron" /> Email
            </motion.a>
            <motion.a
               whileHover={{ y: -5, scale: 1.05 }}
               href="https://wa.me/919140227239"
               target="_blank"
               className="flex items-center gap-3 p-5 px-8 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 font-bold hover:bg-green-500/20 transition-all"
            >
              <Phone className="text-green-500" /> WhatsApp
            </motion.a>
            <motion.a
               whileHover={{ y: -5, scale: 1.05 }}
               href="https://www.youtube.com/@BhagwatNikunj"
               target="_blank"
               className="flex items-center gap-3 p-5 px-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 font-bold hover:bg-red-500/20 transition-all"
            >
              <Youtube className="text-red-500" /> YouTube
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
