import { motion } from 'framer-motion';
import { ArrowUpRight, Cloud, Database, Globe, Code, Cpu, MessageSquare, Mail, Share2, LayoutGrid, Clock, Hash, Terminal, Bot } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { useState, useEffect } from 'react';

const icons = [
    { icon: Cloud, label: "Cloud Infra" },
    { icon: LayoutGrid, label: "Scalable Architecture" },
    { icon: MessageSquare, label: "Communication" },
    { icon: Share2, label: "Integration" },
    { icon: Mail, label: "Email Marketing" },
    { icon: Code, label: "Clean Code" },
    { icon: Clock, label: "Optimization" },
    { icon: Globe, label: "Global Reach" },
    { icon: Hash, label: "SMM" },
    { icon: Terminal, label: "DevOps" },
    { icon: Bot, label: "Automation" },
    { icon: Database, label: "Data Management" },
    { icon: Cpu, label: "AI Processing" },
];

const TechStack = () => {
    const { openModal } = useLeadModal();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
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
                    className="flex flex-col items-center w-full"
                >
                    <h2 className="text-white font-cabinet font-bold text-6xl md:text-8xl leading-none mb-8 tracking-tighter pb-4 uppercase">
                        SEO <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            DE ELITE
                        </span>
                    </h2>

                    <div className="h-auto md:h-20 mb-12 flex items-center justify-center px-4">
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide pointer-events-auto">
                            Especialista em N8N, SEO e SaaS. Do aquecimento de chips a automações complexas, construo a infraestrutura invisível que escala seu negócio.
                        </p>
                    </div>

                    <div className="w-full max-w-md flex flex-col items-center gap-4 pointer-events-auto mb-20">
                        <input
                            type="url"
                            placeholder="Seu site para análise..."
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all text-center backdrop-blur-sm"
                        />
                        <button
                            onClick={openModal}
                            className="w-full inline-flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:brightness-110"
                        >
                            <span>SOLICITAR DIAGNÓSTICO</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Rotating Wheel Container */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-[60]">
                {/* The Wheel */}
                <motion.div
                    className="relative w-[1100px] h-[1100px] rounded-full border border-white/5 shadow-[0_0_100px_rgba(147,51,234,0.1)] scale-[0.875] md:scale-90 origin-center transition-transform duration-500"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 120,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Icons Loop */}
                    {icons.map((item, index) => {
                        const total = icons.length;
                        const angle = (index * (360 / total));
                        const radius = isMobile ? 300 : 550;

                        return (
                            <div
                                key={item.label}
                                className="absolute top-1/2 left-1/2 w-24 h-24 -ml-12 -mt-12"
                                style={{
                                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle - 90}deg)` // Counter-rotate to keep upright if needed, or just let them spin
                                    // Actually, in the image flags are rotated. For icons in squares, often we want them upright relative to viewer or rotated relative to center.
                                    // In Languages2, it was `rotate(90deg)`. Let's stick to `rotate(-angle)` if we want them upright, or just `rotate(90deg)` if we want them aligned to circle.
                                    // Image shows icons upright relative to the screen usually? No, let's look at the image.
                                    // The icons seem to be upright relative to the Viewer?
                                    // Actually, let's try keeping them upright relative to the viewer: `rotate(${-angle}deg)`.
                                    // But wait, the parent rotates. To keep them upright, we need to counter-rotate the parent's rotation.
                                    // Since parent rotates continuously, we can't just static counter-rotate.
                                    // We'll just let them rotate with the wheel for now as that's easier and usually looks fine for "orbiting" elements.
                                    // I'll stick to a simple rotation for alignment.
                                }}

                            >
                                <div className="absolute inset-0 bg-[#0A0A0A] rounded-2xl border border-white/10 flex items-center justify-center shadow-lg transform -rotate-90"> {/* Counter rotate 90 to fix orientation if needed or just align */}
                                    <item.icon className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-[70] pointer-events-none" />
        </section>
    );
};

export default TechStack;
