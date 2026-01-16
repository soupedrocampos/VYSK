import { motion } from 'framer-motion';
import { Bot, MessageCircle, Instagram, UserPlus, Share2, Mail, Filter, BarChart3, CreditCard, Globe } from 'lucide-react';

const n8nFeatures = [
    {
        title: "Atendimento com IA",
        icon: Bot,
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/30",
        iconColor: "text-blue-400",
        span: "col-span-2 row-span-1"
    },
    {
        title: "WhatsApp API",
        icon: MessageCircle,
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/30",
        iconColor: "text-green-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Direct Instagram",
        icon: Instagram,
        color: "from-pink-500/20 to-rose-500/20",
        borderColor: "border-pink-500/30",
        iconColor: "text-pink-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Captura de Leads",
        icon: UserPlus,
        color: "from-amber-500/20 to-orange-500/20",
        borderColor: "border-amber-500/30",
        iconColor: "text-amber-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Postagens Sociais",
        icon: Share2,
        color: "from-purple-500/20 to-violet-500/20",
        borderColor: "border-purple-500/30",
        iconColor: "text-purple-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Nutrição de Email",
        icon: Mail,
        color: "from-indigo-500/20 to-blue-500/20",
        borderColor: "border-indigo-500/30",
        iconColor: "text-indigo-400",
        span: "col-span-2 row-span-1"
    },
    {
        title: "Qualificação de Leads",
        icon: Filter,
        color: "from-teal-500/20 to-green-500/20",
        borderColor: "border-teal-500/30",
        iconColor: "text-teal-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Dashboards ROI",
        icon: BarChart3,
        color: "from-red-500/20 to-orange-500/20",
        borderColor: "border-red-500/30",
        iconColor: "text-red-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Pagamentos",
        icon: CreditCard,
        color: "from-yellow-500/20 to-amber-500/20",
        borderColor: "border-yellow-500/30",
        iconColor: "text-yellow-400",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Web Scraping",
        icon: Globe,
        color: "from-cyan-500/20 to-sky-500/20",
        borderColor: "border-cyan-500/30",
        iconColor: "text-cyan-400",
        span: "col-span-1 row-span-1"
    }
];

const FeaturesBento = () => {
    return (
        <section className="py-24 bg-human-bg font-satoshi">
            <div className="container mx-auto px-4 max-w-[85vw] 2xl:max-w-[80vw]">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="font-cabinet font-bold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-4 uppercase">
                        AUTOMAÇÕES <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">N8N</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4">As automações mais lucrativas do mercado prontas para uso</p>
                    <div className="w-full h-px bg-white/10 mt-8" />
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-4 auto-rows-[180px] gap-4">
                    {n8nFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`${feature.span} bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden group cursor-pointer transition-colors duration-500`}
                        >
                            {/* Background Icon - Large & Faded - Reveals color on hover */}
                            <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${feature.iconColor}`}>
                                <feature.icon size={80} />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className={`w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br ${feature.color}`}>
                                    <feature.icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-gray-300 group-hover:text-white font-bold text-lg transition-colors duration-300">{feature.title}</h3>
                            </div>

                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesBento;
