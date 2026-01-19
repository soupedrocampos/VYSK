import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useLeadModal } from '../context/LeadModalContext';

interface HeroProps {
    title?: string;
    description?: string;
    cta?: string;
    badge?: string;
}

const Hero = ({ badge }: HeroProps) => {
    const { t } = useLanguage();
    const { openModal } = useLeadModal();
    const [wordIndex, setWordIndex] = useState(0);
    const words = ["EMPRESA", "MARCA", "LOJA"];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative h-[100dvh] w-full bg-human-bg text-white overflow-hidden selection:bg-human-green/30 selection:text-white font-sans flex items-center">
            {/* Background Assets */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-center"
                    poster="/assets/hero-poster.webp"
                >
                    <source src="/assets/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Soft Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-human-bg/90 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20 max-w-6xl">
                <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                                <span className="text-xs font-bold tracking-widest uppercase text-white/90">GLOBAL</span>
                                <span className="w-px h-3 bg-white/20" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white/90">{badge || t('hero.badge')}</span>
                            </div>
                            <div className="mb-8" />

                            <h1 className="font-cabinet font-bold text-5xl md:text-8xl leading-none tracking-tighter text-white mb-8">
                                O FUTURO DA <br />
                                SUA <div className="h-[1em] relative overflow-hidden inline-block align-top min-w-[20px]">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={words[wordIndex]}
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -50, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className="absolute left-0 block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap"
                                        >
                                            {words[wordIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </h1>


                            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                                <button
                                    onClick={openModal}
                                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] w-full sm:w-auto text-sm"
                                >
                                    <span>COMEÇA AGORA</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                                </button>

                                <a
                                    href="#about"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <span>SAIBA MAIS</span>
                                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative hidden lg:block h-[800px]"
                    >
                        {/* Placeholder for "Woman in White Jacket" - Using a verified Unsplash High Fashion image that matches the aesthetic */}
                        <img
                            src="https://images.unsplash.com/photo-1548142340-9a997d983949?q=80&w=1287&auto=format&fit=crop"
                            alt="Human Academy Global"
                            className="w-full h-full object-cover object-center rounded-3xl opacity-90 mask-image-gradient"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Adjusted Bottom spacing */}
            <div className="absolute bottom-16 left-10 z-20 animate-bounce pointer-events-none hidden md:flex flex-col items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 vertical-text py-2" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
                <ArrowDown className="w-4 h-4 text-white/30" />
            </div>
        </section>
    );
};

export default Hero;
