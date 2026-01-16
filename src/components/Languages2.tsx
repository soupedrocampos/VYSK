import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const flags = [
    { country: 'es', label: 'Spanish' },
    { country: 'us', label: 'English' },
    { country: 'br', label: 'Portuguese' },
    { country: 'fr', label: 'French' },
    { country: 'it', label: 'Italian' },
    { country: 'cn', label: 'Chinese' },
    { country: 'in', label: 'Hindi' },
    { country: 'sa', label: 'Arabic' },
    { country: 'ru', label: 'Russian' },
    { country: 'jp', label: 'Japanese' },
    { country: 'gb', label: 'English (UK)' },
    { country: 'kr', label: 'Korean' },
    { country: 'tr', label: 'Turkish' },
    { country: 'ca', label: 'English (CA)' },
    { country: 'ar', label: 'Spanish (AR)' },
    { country: 'cl', label: 'Spanish (CL)' },
    { country: 'mx', label: 'Spanish (MX)' }, // Added Mexico, Removed Germany
];

const Languages2 = () => {
    const { t } = useLanguage();
    return (
        <section className="relative w-full h-[800px] md:h-[1100px] bg-black overflow-hidden flex flex-col items-center justify-center font-satoshi perspective-[1000px]">

            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-[70] pointer-events-none" />

            {/* Central Text */}
            <div className="relative z-50 text-center flex flex-col items-center max-w-4xl px-4 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-white font-cabinet font-bold text-4xl md:text-6xl lg:text-8xl leading-none mb-4 tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            {t('languages2.title')}
                        </span>
                    </h2>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white font-sans font-normal text-2xl md:text-3xl leading-tight mb-8 uppercase tracking-[0.2em]">
                        {t('languages2.subtitle')}
                    </h2>

                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
                        {t('languages2.description')}
                    </p>
                </motion.div>

                <a
                    href="#"
                    className="pointer-events-auto inline-flex items-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] border border-purple-400/30"
                >
                    <span>{t('languages2.cta')}</span>
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>

            {/* Rotating Wheel Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[60]">
                {/* The Wheel */}
                <motion.div
                    className="relative w-[900px] h-[900px] rounded-full border border-white/5 shadow-[0_0_100px_rgba(147,51,234,0.1)] scale-[0.35] md:scale-90 origin-center transition-transform duration-500"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 130, // 2 minutes and 10 seconds
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Flags - Clean Single Loop */}
                    {flags.map((flag, index) => {
                        const total = flags.length;
                        const angle = (index * (360 / total));
                        const radius = 450; // Increased radius for better spacing

                        return (
                            <div
                                key={flag.country}
                                className="absolute top-1/2 left-1/2 w-32 h-20 -ml-16 -mt-10"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`
                                }}
                            >
                                {/* Main Flag - Clean, no overlays, no trails */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 opacity-60 blur-[0.5px] overflow-hidden"
                                    style={{ backgroundImage: `url(https://flagcdn.com/w160/${flag.country}.png)` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                            </div>
                        );
                    })}


                </motion.div>

            </div>

            {/* Bottom Gradient Fade - Stronger & Matching Next Section (#050505) */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-[70] pointer-events-none" />
        </section>
    );
};

export default Languages2;
