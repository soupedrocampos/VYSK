import { motion } from 'framer-motion';
import { Brain, Share2, Database, MessageSquare, BarChart3, FileText, Globe, Webhook } from 'lucide-react';

const aiTools = [
    {
        title: "Qualificação de Leads com IA",
        description: "Qualifique leads automaticamente usando inteligência artificial antes de passá-los para sua equipe de vendas.",
        icon: Brain,
        color: "from-yellow-500/20 to-amber-500/20",
        borderColor: "border-yellow-500/30",
        iconColor: "text-yellow-400",
        iconBg: "bg-yellow-500/20",
        span: "col-span-2 row-span-2"
    },
    {
        title: "Bot Social",
        description: "Automatize respostas em redes sociais",
        icon: Share2,
        color: "from-blue-500/10 to-cyan-500/10",
        borderColor: "border-blue-500/20",
        iconColor: "text-blue-400",
        iconBg: "bg-blue-500/20",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Sync CRM",
        description: "Sincronize dados com seu CRM",
        icon: Database,
        color: "from-green-500/10 to-emerald-500/10",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
        iconBg: "bg-green-500/20",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Auto-Resposta",
        description: "Respostas automáticas inteligentes",
        icon: MessageSquare,
        color: "from-pink-500/10 to-rose-500/10",
        borderColor: "border-pink-500/20",
        iconColor: "text-pink-400",
        iconBg: "bg-pink-500/20",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Análise de Sentimento",
        description: "Entenda o humor dos clientes",
        icon: BarChart3,
        color: "from-purple-500/10 to-violet-500/10",
        borderColor: "border-purple-500/20",
        iconColor: "text-purple-400",
        iconBg: "bg-purple-500/20",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Faturamento Auto",
        description: "Geração automática de faturas",
        icon: FileText,
        color: "from-orange-500/10 to-red-500/10",
        borderColor: "border-orange-500/20",
        iconColor: "text-orange-400",
        iconBg: "bg-orange-500/20",
        span: "col-span-1 row-span-1"
    },
    {
        title: "Web Scraper",
        description: "Extraia dados de qualquer site diretamente para o Google Sheets.",
        icon: Globe,
        color: "from-cyan-500/10 to-teal-500/10",
        borderColor: "border-cyan-500/20",
        iconColor: "text-cyan-400",
        iconBg: "bg-cyan-500/20",
        span: "col-span-2 row-span-1"
    },
    {
        title: "Webhooks Personalizados",
        description: "Conecte qualquer API às suas ferramentas internas instantaneamente.",
        icon: Webhook,
        color: "from-indigo-500/10 to-blue-500/10",
        borderColor: "border-indigo-500/20",
        iconColor: "text-indigo-400",
        iconBg: "bg-indigo-500/20",
        span: "col-span-2 row-span-1"
    }
];

const AIToolsBento = () => {
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
                        AUTOMAÇÕES <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">INTELIGENTES</span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4">Ferramentas de IA para otimizar seu negócio</p>
                    <div className="w-full h-px bg-white/10 mt-8" />
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-4 auto-rows-[160px] gap-4">
                    {aiTools.map((tool, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`${tool.span} bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-white/20 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-colors duration-500`}
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-gradient-to-br ${tool.color}`}>
                                <tool.icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-gray-200 group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">{tool.title}</h3>
                                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors duration-300">{tool.description}</p>
                            </div>

                            {/* Background Icon Watermark */}
                            <div className={`absolute bottom-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${tool.iconColor}`}>
                                <tool.icon size={120} />
                            </div>

                            {/* Hover Glow */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIToolsBento;
