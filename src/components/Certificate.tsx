import { motion } from 'framer-motion';

const Certificate = () => {
    return (
        <section id="certificate" className="py-32 bg-human-bg font-satoshi overflow-hidden flex flex-col items-center justify-center relative">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-human-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">GLOBAL</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">CERTIFICATE</span>
                </div>

                <h2 className="font-cabinet font-bold text-6xl md:text-8xl leading-none tracking-tighter text-white mb-20 uppercase">
                    OBTENHA <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CERTIFICAÇÃO</span>
                </h2>

                {/* Certificate Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto bg-[#Fdfbf7] rounded-[40px] p-8 md:p-16 relative shadow-[0_0_100px_rgba(255,255,255,0.1)] text-neutral-900 border-[12px] border-white/20"
                    style={{
                        background: 'linear-gradient(135deg, #fdfbf7 0%, #f5f0e6 100%)'
                    }}
                >
                    {/* Ring/Logo Graphic */}
                    <div className="w-24 h-24 mx-auto mb-8 relative animate-spin-slow opacity-80">
                        {/* Simple SVG placeholder for the circular logo in the reference */}
                        <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-900">
                            <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                            <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
                        </svg>
                    </div>

                    <h3 className="text-5xl md:text-8xl font-bold font-cabinet tracking-tight mb-4 text-neutral-800">
                        CERTIFICATE
                    </h3>

                    <p className="text-neutral-500 text-sm md:text-base uppercase tracking-widest mb-12">
                        This certificate is awarded by Pedrovysk to
                    </p>

                    <div className="flex items-center justify-center gap-4 mb-16">
                        <span className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            {/* GG STUDIO fake logo */}
                            <img src="/favicon.png" alt="GG" className="h-8 w-8 rounded-sm object-contain" /> STUDIO
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between border-t border-neutral-200 pt-8 mt-12 gap-8 text-left">

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 border border-neutral-300 rounded-lg flex items-center justify-center text-4xl font-handwriting">
                                M
                            </div>
                            <div>
                                <p className="font-bold text-sm">Marioo</p>
                                <p className="text-[10px] text-neutral-500 uppercase">Creative Director at <br /> Pedrovysk</p>
                            </div>
                        </div>

                        <div className="text-center md:text-left border-l border-r border-neutral-200 px-12 py-2">
                            <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Date of Issue: 03/11/2025</p>
                        </div>

                        <div className="text-right">
                            <p className="text-[10px] text-neutral-500 uppercase leading-tight">
                                12 hours workload <br /> divided across 2 days
                            </p>
                        </div>
                    </div>

                    {/* Floating Tags */}
                    <div className="absolute top-1/2 -right-12 md:-right-24 transform -translate-y-1/2 flex flex-col gap-4">
                        <div className="bg-black/80 backdrop-blur-md text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                            100+ HOURS
                        </div>
                        <div className="bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                            BE HUMAN
                        </div>
                    </div>
                </motion.div>

                {/* Recognized By Marquee */}
                <div className="mt-24 w-full overflow-hidden mask-image-gradient-sides opacity-60">
                    <p className="text-sm font-bold tracking-widest uppercase text-white/40 mb-8">Recognized By</p>
                    <motion.div
                        className="flex gap-16 w-max items-center"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-16 items-center">
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">GOOGLE</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">META</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">OPENAI</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">MICROSOFT</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">AMAZON</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">NETFLIX</span>
                                <span className="text-2xl font-bold text-white/50 hover:text-white transition-colors">DISNEY</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Certificate;
