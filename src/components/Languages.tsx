import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Webhook,
    Globe,
    Bot,
    Table,
    MessageCircle,
    Mail,
    Clock,
    Code,
    GitBranch,
    Database,
    Hash,
    Cloud
} from 'lucide-react';

// Tool/Node Definitions based on Clock Positions
const toolData = [
    { id: 'webhook', label: 'Webhook', icon: <Webhook className="w-8 h-8 text-white" />, clock: 10, angle: 300, color: 'from-pink-500/20 to-rose-500/20' },
    { id: 'http', label: 'HTTP Request', icon: <Globe className="w-8 h-8 text-white" />, clock: 8, angle: 240, color: 'from-blue-500/20 to-cyan-500/20' },
    { id: 'openai', label: 'OpenAI', icon: <Bot className="w-8 h-8 text-white" />, clock: 7, angle: 210, color: 'from-green-500/20 to-emerald-500/20' },
    { id: 'sheets', label: 'Google Sheets', icon: <Table className="w-8 h-8 text-white" />, clock: 0, angle: 0, color: 'from-green-600/20 to-green-400/20' },
    { id: 'telegram', label: 'Telegram', icon: <MessageCircle className="w-8 h-8 text-white" />, clock: 1, angle: 30, color: 'from-sky-500/20 to-blue-500/20' },
    { id: 'email', label: 'Email', icon: <Mail className="w-8 h-8 text-white" />, clock: 2, angle: 60, color: 'from-yellow-500/20 to-orange-500/20' },
    { id: 'schedule', label: 'Schedule', icon: <Clock className="w-8 h-8 text-white" />, clock: 3, angle: 90, color: 'from-purple-500/20 to-violet-500/20' },
    { id: 'function', label: 'Code', icon: <Code className="w-8 h-8 text-white" />, clock: 4, angle: 120, color: 'from-gray-500/20 to-gray-400/20' },
    { id: 'switch', label: 'Switch', icon: <GitBranch className="w-8 h-8 text-white" />, clock: 5, angle: 150, color: 'from-indigo-500/20 to-purple-500/20' },
    { id: 'database', label: 'Database', icon: <Database className="w-8 h-8 text-white" />, clock: 6, angle: 180, color: 'from-amber-500/20 to-orange-500/20' },
    { id: 'slack', label: 'Slack', icon: <Hash className="w-8 h-8 text-white" />, clock: 9, angle: 270, color: 'from-pink-600/20 to-rose-600/20' },
    { id: 'storage', label: 'Storage', icon: <Cloud className="w-8 h-8 text-white" />, clock: 11, angle: 330, color: 'from-cyan-500/20 to-blue-500/20' },
];

const Languages = () => {
    return (
        <section className="relative w-full h-[900px] bg-black overflow-hidden flex flex-col items-center justify-center font-satoshi">

            {/* Center Content */}
            <div className="relative z-50 text-center flex flex-col items-center max-w-4xl px-4">
                <p className="text-white font-sans text-xl md:text-2xl font-medium tracking-widest mb-2 text-purple-400">
                    ECOSSISTEMA DIGITAL
                </p>
                <h2 className="font-cabinet font-bold text-7xl md:text-8xl leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] tracking-tighter text-white mb-6">
                    INTEGRAÇÕES <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">DE ELITE</span>
                </h2>

                <p className="text-[#a0a0a0] text-lg md:text-[18px] max-w-2xl mx-auto mb-10 leading-relaxed border-t border-white/10 pt-6 mt-6">
                    Especialista em N8N, SEO e SaaS. Do aquecimento de chips a automações complexas, construo a infraestrutura invisível que escala seu negócio.
                </p>

                <a
                    href="#"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#9b87c4] hover:bg-[#8a76b0] text-white rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_20px_rgba(155,135,196,0.4)]"
                >
                    <span>VER SOLUÇÕES</span>
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>

            {/* Floating Tools Container */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Center Reference Point */}
                <div className="absolute top-1/2 left-1/2 w-0 h-0">
                    {toolData.map((tool, index) => {
                        const radius = 420;
                        const x = radius * Math.sin(tool.angle * (Math.PI / 180));
                        const y = -radius * Math.cos(tool.angle * (Math.PI / 180));

                        // Slight random rotation for depth
                        const rot = (index % 2 === 0 ? 1 : -1) * (4 + index);
                        const delay = index * 0.5;

                        return (
                            <motion.div
                                key={tool.id}
                                className="absolute pointer-events-auto"
                                style={{
                                    left: x,
                                    top: y,
                                    x: "-50%",
                                    y: "-50%",
                                    zIndex: 20
                                }}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    opacity: { duration: 0.8, delay: 0.2 },
                                    scale: { duration: 0.8, delay: 0.2 }
                                }}
                            >
                                {/* Wrapper for Hover & Float */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{
                                        duration: 4 + (index % 2),
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: delay
                                    }}
                                >
                                    <div
                                        className={`relative group w-[70px] h-[70px] md:w-[80px] md:h-[80px] bg-neutral-900 border border-white/10 flex flex-col items-center justify-center rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer transition-all duration-300 ease-out hover:border-purple-500/50`}
                                        style={{
                                            transform: `rotate(${rot}deg)`,
                                        }}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                                        <div className="relative z-10 transform transition-transform duration-300 group-hover:scale-110">
                                            {/* Clone icon with smaller size if possible, or just rely on parent sizing if strictly controlled, but here icons are passed as elements.
                                                Actually, the icons are defined in toolData with strictly hardcoded className="w-10 h-10". 
                                                I need to update toolData if I want to change icon size, OR strictly size them here via CSS if simpler.
                                                However, checking toolData, they have `w-10 h-10`. I should probably update toolData for cleaner consistent size.
                                            */}
                                            {/* Since I cannot easily cloneElement with new classes here without more code, I will update toolData definitions in a separate edit or assume the user just wants the CARD smaller. 
                                                If the card is 80px and icon is 40px (w-10), that's half the card, which is quite big. 
                                                Let's stick to the card resize first. 40px icon in 80px card is acceptable. 
                                                Wait, I can just update the replacement content for the toolData too if I want, but I am aiming for this block currently.
                                                Let's resize the card first.
                                            */}
                                            {tool.icon}
                                        </div>

                                        <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap border border-white/10">
                                            {tool.label}
                                        </div>

                                        {/* Hover Shadow & Glow */}
                                        <div className="absolute inset-0 rounded-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(147,51,234,0.3)]" />
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Languages;
