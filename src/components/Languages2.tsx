import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLeadModal } from '../context/LeadModalContext';
import { useState, useEffect } from 'react';

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
    { country: 'cl', label: 'Spanish (CL)' },
    { country: 'mx', label: 'Spanish (MX)' }, // Added Mexico, Removed Germany
];

const keywords = [
    { label: "SEO", desc: "Search Engine Optimization. Posicionamento orgânico para estar sempre à frente." },
    { label: "ADS", desc: "Gestão de Tráfego. Campanhas de alta performance no Meta e Google Ads." },
    { label: "AEO", desc: "Answer Engine Optimization. Otimização para motores de resposta baseados em IA." },
    { label: "GMB", desc: "Google My Business. Dominação local para atrair clientes da sua região." },
    { label: "SAAS", desc: "Software as a Service. Soluções tecnológicas escaláveis e recorrentes." },
    { label: "EMAIL", desc: "Email Marketing & CRM. Retenção e LTV maximizados com estratégias inteligentes." },
    { label: "MKT", desc: "Marketing 360º. Estratégias completas para posicionamento de liderança de mercado." },
    { label: "GROWTH", desc: "Growth Hacking. Experimentação rápida para crescimento exponencial." },
    { label: "FUNNEL", desc: "Funnel Hacking. Modelagem de funis vencedores para alta conversão." },
    { label: "DESIGN", desc: "Design & Creative. Identidade visual única que desperta desejo." },
    { label: "WEB", desc: "Web Development. Sites de alta performance e velocidade." },
    { label: "WPP", desc: "Disparo de WPP. Automação e escala no canal de venda mais direto." },
    { label: "RATEIO", desc: "Ferramentas para compartilhamento. Acesso facilitado às melhores tecnologias." }
];

const Languages2 = () => {
    const { t } = useLanguage();
    const { openModal } = useLeadModal();
    const [currentKeyword, setCurrentKeyword] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[1100px] md:h-[1300px] bg-black overflow-hidden flex flex-col items-center justify-center font-satoshi perspective-[1000px]">

            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent z-[50] pointer-events-none" />

            {/* Central Text */}
            <div className="relative z-[90] text-center flex flex-col items-center max-w-4xl px-4 pointer-events-none mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Rotating Keywords */}
                    <div className="h-12 md:h-20 lg:h-24 overflow-visible mb-0 flex items-end justify-center w-full relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={keywords[currentKeyword].label}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="block text-white font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter uppercase"
                            >
                                {keywords[currentKeyword].label}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <h2 className="text-white font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-8 tracking-tighter pb-4 -mt-1 md:-mt-2">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            SERVICE
                        </span>
                    </h2>

                    <div className="h-24 md:h-20 mb-8 flex items-center justify-center px-4">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={keywords[currentKeyword].label}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide pointer-events-auto"
                            >
                                {keywords[currentKeyword].desc}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </motion.div>

                <button
                    onClick={openModal}
                    className="pointer-events-auto inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:brightness-110 border border-purple-400/30 mb-20"
                >
                    <span>{t('languages2.cta')}</span>
                    <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>

            {/* Rotating Wheel Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[60]">
                {/* The Wheel */}
                <motion.div
                    className="relative w-[1100px] h-[1100px] rounded-full border border-white/5 shadow-[0_0_100px_rgba(147,51,234,0.1)] scale-[0.875] md:scale-90 origin-center transition-transform duration-500"
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
                        const radius = isMobile ? 360 : 550; // Responsive radius logic

                        return (
                            <div
                                key={flag.country}
                                className="absolute top-1/2 left-1/2 w-40 h-24 -ml-20 -mt-12"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(90deg)`
                                }}

                            >
                                {/* Main Flag - Clean, no overlays, no trails */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-white/10 opacity-60 blur-[0.5px] overflow-hidden"
                                    style={{ backgroundImage: `url(https://flagcdn.com/w160/${flag.country}.png)` }}
                                />
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
