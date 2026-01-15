import { motion } from 'framer-motion';
import { Zap, Share2, Database, MessageCircle, BarChart, FileText, Globe, Link } from 'lucide-react';

// Define types for Bento Card items
export interface BentoItem {
    colSpan: number;
    rowSpan: number;
    title: string;
    icon?: React.ReactNode;
    desc?: string;
}

// Default N8N Items
export const defaultBonuses: BentoItem[] = [
    { colSpan: 2, rowSpan: 2, title: "AI Lead Scoring", icon: <Zap className="w-6 h-6 text-yellow-400" />, desc: "Automatically qualify leads using AI analysis before they pass to your sales team." },
    { colSpan: 1, rowSpan: 1, title: "Social Bot", icon: <Share2 className="w-5 h-5 text-blue-400" /> },
    { colSpan: 1, rowSpan: 1, title: "CRM Sync", icon: <Database className="w-5 h-5 text-green-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Auto-Reply", icon: <MessageCircle className="w-5 h-5 text-pink-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Sentiment Analysis", icon: <BarChart className="w-5 h-5 text-purple-400" /> },
    { colSpan: 1, rowSpan: 1, title: "Auto Invoicing", icon: <FileText className="w-5 h-5 text-orange-400" /> },
    { colSpan: 2, rowSpan: 1, title: "Web Scraper", icon: <Globe className="w-5 h-5 text-cyan-400" />, desc: "Extract data from any website to Google Sheets." },
    { colSpan: 2, rowSpan: 1, title: "Custom Webhooks", icon: <Link className="w-5 h-5 text-red-400" />, desc: "Connect any API to your internal tools instantly." }
];

interface BonusesProps {
    title?: string;
    subtitle?: string;
    items?: BentoItem[];
    badge?: string;
}

const Bonuses = ({ title, subtitle, items = defaultBonuses, badge }: BonusesProps) => {
    return (
        <section className="py-24 bg-human-bg font-sans relative">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">PEDROVYSK</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">{badge || "GLOBAL"}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-bold font-cabinet text-white mb-4">
                        {title || "WHAT YOU CAN BUILD"}
                    </h2>
                    <p className="text-gray-400">
                        {subtitle || "Automate boring tasks and scale your creativity with n8n."}
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
                                <div className="absolute bottom-4 left-4 right-4 relative z-20">
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
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
        className={`md:col-span-${colSpan} md:row-span-${rowSpan} bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 cursor-default`}
        style={{ gridColumn: `span ${colSpan} / span ${colSpan}`, gridRow: `span ${rowSpan} / span ${rowSpan}` }}
    >
        {/* Background Image - n8n flow */}
        {/* Initially hidden (opacity 0) or grayscale? User asked for: "Passar mouse: coloridas. Sem mouse: opacas e mascara negra" */}
        {/* Let's interpret: Background image is always there but covered by a black mask. Hover reveals it colorfully. */}

        <img
            src="/assets/n8n-flow.png"
            alt="n8n workflow"
            className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
        />

        {/* Black Mask Overlay */}
        {/* By default (no hover), this is dark (bg-black/80). On hover, it becomes transparent (bg-black/20) to reveal the image. */}
        <div className="absolute inset-0 bg-black/90 group-hover:bg-black/40 transition-all duration-500 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between pointer-events-none">
            <div className="flex justify-between items-start">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md border border-white/10">
                    {icon}
                </div>
            </div>

            <div className="mt-auto">
                <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">{title}</h3>
                {children}
            </div>
        </div>
    </motion.div>
);

export default Bonuses;
