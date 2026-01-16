import { motion } from 'framer-motion';

interface FeatureCard {
    category: string;
    titleKey: string;
    descKey: string;
    image: string;
    gradient: string;
    border: string;
}

const defaultCourses: FeatureCard[] = [
    {
        category: "01",
        titleKey: "features.card1.title", // "Automação Inteligente"
        descKey: "features.card1.desc",
        image: "/assets/card-other.png",
        gradient: "from-yellow-200/20 to-yellow-900/20",
        border: "group-hover:border-yellow-200/30"
    },
    {
        category: "02",
        titleKey: "features.card2.title", // "Marketing de Performance"
        descKey: "features.card2.desc",
        image: "/assets/card-image-creator.png",
        gradient: "from-orange-200/20 to-orange-900/20",
        border: "group-hover:border-orange-200/30"
    },
    {
        category: "03",
        titleKey: "features.card3.title", // "Consultoria"
        descKey: "features.card3.desc",
        image: "/assets/card-gpt-pro.png",
        gradient: "from-blue-200/20 to-blue-900/20",
        border: "group-hover:border-blue-200/30"
    },
    {
        category: "04",
        titleKey: "features.card4.title", // "Produtos Digitais"
        descKey: "features.card4.desc",
        image: "/assets/card-video-creator.png",
        gradient: "from-purple-200/20 to-purple-900/20",
        border: "group-hover:border-purple-200/30"
    }
];

import { useLanguage } from '../context/LanguageContext';

const Features = ({ cards = defaultCourses }: { cards?: FeatureCard[] }) => {
    const { t } = useLanguage();
    return (
        <section id="products" className="py-24 bg-human-bg font-sans overflow-hidden">
            <div className="container mx-auto px-4 relative">
                {/* Top Transition Gradient */}
                <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-human-bg pointer-events-none z-10" />

                {/* Content Container */}
                <div className="relative z-20">

                    {/* Header */}
                    <div className="mb-20">
                        <div className="inline-flex items-center space-x-2 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="text-xs font-bold tracking-widest uppercase text-white/80">{t('features.badge')}</span>
                            <span className="w-px h-3 bg-white/20" />
                            <span className="text-xs font-bold tracking-widest uppercase text-white/80">{t('features.badge_sub')}</span>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-cabinet font-light text-4xl md:text-6xl leading-none tracking-tighter text-white max-w-6xl whitespace-pre-line mb-10"
                        >
                            {t('features.title').split(/<\/?b>/).map((part, i) => (
                                <span key={i} className={i % 2 === 1 ? "font-bold" : "font-light"}>
                                    {part}
                                </span>
                            ))}
                        </motion.h2>
                    </div>

                    {/* Continuous Marquee */}
                    <div className="relative w-full overflow-hidden mask-image-gradient-sides">
                        <motion.div
                            className="flex gap-8 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                        >
                            {/* Render cards twice for seamless loop */}
                            {[...cards, ...cards].map((card, index) => (
                                <div
                                    key={index}
                                    className={`group relative w-[300px] aspect-[3/4] bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${card.border} shrink-0`}
                                >
                                    {/* Background Image */}
                                    <img
                                        src={card.image}
                                        alt={card.titleKey}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                        <div className="flex-1 relative">
                                            <div className="mt-8">
                                                <span className="text-white/50 text-sm font-light tracking-widest">{card.category}</span>
                                                <h3 className="text-2xl font-bold text-white mt-2 leading-tight">
                                                    {t(card.titleKey)}
                                                </h3>
                                                {/* Optional: Show description on hover or always if space allows. For Bento style maybe just title is cleaner, but user gave descriptions. */}
                                                {/* Let's try adding it hidden and reveal on hover */}
                                                <p className="text-gray-400 text-xs mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    {t(card.descKey)}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Bottom Tags */}
                                        <div className="flex justify-between items-end border-t border-white/10 pt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                                            <span className="text-[10px] uppercase tracking-widest text-white/60">2025</span>
                                            <div className="flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-human-green shadow-[0_0_10px_rgba(0,255,178,0.5)]" />
                                                <span className="text-[10px] uppercase tracking-widest text-white/60">{t('features.included')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Features;
