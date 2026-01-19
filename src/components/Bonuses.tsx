import { motion } from 'framer-motion';
import { Share2, Mail, Users, MessageSquare, RefreshCw, Globe, BarChart, ShoppingBag, Terminal, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Define types for Bento Card items
interface BentoItem {
    colSpan: number;
    rowSpan: number;
    title: string;
    icon?: React.ReactNode;
    desc?: string;
}

interface BonusesProps {
    title?: string;
    subtitle?: string;
    items?: BentoItem[];
    badge?: string;
}

const Bonuses = ({ title, subtitle, badge }: BonusesProps) => {
    const { t } = useLanguage();

    const items: BentoItem[] = [
        // Row 1 & 2 (Left Big)
        {
            colSpan: 2,
            rowSpan: 2,
            title: t('bonuses.card1.title'),
            desc: t('bonuses.card1.desc'),
            icon: <Share2 className="w-6 h-6 text-purple-400" />
        },
        // Row 1 (Right Small)
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card2.title'),
            desc: t('bonuses.card2.desc'),
            icon: <Mail className="w-5 h-5 text-blue-400" />
        },
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card3.title'),
            desc: t('bonuses.card3.desc'),
            icon: <Users className="w-5 h-5 text-green-400" />
        },
        // Row 2 (Right Small)
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card4.title'),
            desc: t('bonuses.card4.desc'),
            icon: <MessageSquare className="w-5 h-5 text-pink-400" />
        },
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card5.title'),
            desc: t('bonuses.card5.desc'),
            icon: <RefreshCw className="w-5 h-5 text-orange-400" />
        },
        // Row 3 (Wide)
        {
            colSpan: 2,
            rowSpan: 1,
            title: t('bonuses.card6.title'),
            desc: t('bonuses.card6.desc'),
            icon: <Globe className="w-5 h-5 text-cyan-400" />
        },
        {
            colSpan: 2,
            rowSpan: 1,
            title: t('bonuses.card7.title'),
            desc: t('bonuses.card7.desc'),
            icon: <BarChart className="w-5 h-5 text-yellow-400" />
        },
        // Row 4 (Mixed)
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card8.title'),
            desc: t('bonuses.card8.desc'),
            icon: <ShoppingBag className="w-5 h-5 text-red-400" />
        },
        {
            colSpan: 1,
            rowSpan: 1,
            title: t('bonuses.card9.title'),
            desc: t('bonuses.card9.desc'),
            icon: <Terminal className="w-5 h-5 text-gray-400" />
        },
        {
            colSpan: 2,
            rowSpan: 1,
            title: t('bonuses.card10.title'),
            desc: t('bonuses.card10.desc'),
            icon: <Zap className="w-5 h-5 text-purple-500" />
        }
    ];

    return (
        <section className="py-24 bg-human-bg font-sans relative">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">PEDROVYSK</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">{badge || t('bonuses.badge_sub')}</span>
                    </div>
                    <h2
                        className="font-cabinet font-bold text-5xl md:text-8xl leading-none tracking-tighter text-white mb-6 uppercase"
                        dangerouslySetInnerHTML={{ __html: title || t('bonuses.title') }}
                    />
                    <p className="text-gray-400">
                        {subtitle || t('bonuses.desc')}
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
                    {items.map((item, i) => (
                        <BentoCard
                            key={i}
                            colSpan={item.colSpan}
                            rowSpan={item.rowSpan}
                            title={item.title}
                            icon={item.icon}
                        >
                            {item.desc && (
                                <div className="absolute inset-0 top-12 p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                    <p className="text-gray-200 text-sm text-center leading-relaxed font-medium bg-black/60 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                                        {item.desc}
                                    </p>
                                </div>
                            )}
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section >
    );
};

const BentoCard = ({ colSpan, rowSpan, title, icon, children }: { colSpan: number, rowSpan: number, title: string, icon: React.ReactNode, children?: React.ReactNode }) => (
    <motion.div
        whileHover="hover"
        initial="initial"
        className={`md:col-span-${colSpan} md:row-span-${rowSpan} bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 cursor-default hover:border-white/20 hover:bg-white/[0.05]`}
        style={{ gridColumn: `span ${colSpan} / span ${colSpan}`, gridRow: `span ${rowSpan} / span ${rowSpan}` }}
    >
        {/* Background Image - n8n flow */}
        <img
            src="/assets/n8n-flow.png"
            alt="n8n workflow"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
        />

        {/* Black Mask Overlay */}
        <div className="absolute inset-0 bg-black/90 group-hover:bg-black/40 transition-all duration-500 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
            <div className="flex justify-between items-start">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/10">
                    {icon}
                </div>
            </div>

            <div className="mt-auto">
                <h3 className="text-white font-bold text-lg leading-tight mb-2">{title}</h3>
            </div>
        </div>

        {/* Description overlay (Children) handled outside to allow pointer events if needed, but keeping simple for now */}
        {children}
    </motion.div>
);

export default Bonuses;
