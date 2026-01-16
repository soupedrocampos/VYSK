import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
    title?: string;
    description?: string;
    cta?: string;
    badge?: string;
}

const Hero = ({ title, cta, badge }: HeroProps) => {
    const { t } = useLanguage();

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
                {/* Soft Gradient Overlay - Top and Bottom fade for better text readability and seamless transition */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-human-bg/90 z-10" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <div className="text-left max-w-2xl">
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
                            <div className="mb-12" />

                            <h1 className="font-cabinet font-bold text-5xl md:text-8xl leading-none tracking-tighter text-white mb-8">
                                {title || t('hero.title') ? <span dangerouslySetInnerHTML={{ __html: title || t('hero.title') }} /> : "MASTER THE CREATIVE FUTURE"}
                            </h1>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                                <a
                                    href="#products"
                                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold uppercase tracking-widest hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] w-full sm:w-auto"
                                >
                                    <span>{cta || t('hero.cta')}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>

                                <a
                                    href="#about"
                                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
                                >
                                    <span>READ MORE</span>
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
                        {/* Gradients removed from Image container as well */}
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-human-bg via-transparent to-transparent z-10" /> */}
                        {/* <div className="absolute inset-0 bg-gradient-to-l from-human-bg via-transparent to-transparent z-10" /> */}

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
