import { motion } from 'framer-motion';
import { ArrowUpRight, Users, MessageSquare, Briefcase, LifeBuoy } from 'lucide-react';

const Community = () => {
    return (
        <section className="py-32 bg-human-bg font-satoshi relative overflow-hidden">

            {/* Floating Background Text */}
            <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-10 select-none overflow-hidden flex flex-col items-center justify-center space-y-4">
                <div className="text-8xl font-thin text-white whitespace-nowrap animate-marquee2 md:animate-marquee">
                    SEO  •  GOOGLE ADS  •  FACEBOOK  •  INSTAGRAM  •  TIKTOK  •  COPYWRITING  •  SEO  •  GOOGLE ADS  •  FACEBOOK  •  INSTAGRAM  •  TIKTOK  •  COPYWRITING  •
                </div>
                <div className="text-8xl font-thin text-white whitespace-nowrap animate-marquee md:animate-marquee2">
                    INTELIGÊNCIA ARTIFICIAL  •  AUTOMAÇÃO  •  WORDPRESS  •  BLOG  •  ANALYTICS  •  INTELIGÊNCIA ARTIFICIAL  •  AUTOMAÇÃO  •  WORDPRESS  •  BLOG  •  ANALYTICS  •
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-human-bg via-human-bg/80 to-transparent z-20 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20"
                >
                    <div className="mb-8 md:mb-0">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-2 tracking-widest uppercase">
                                CONEXÃO <br /> REAL
                            </h2>
                            <h2 className="font-cabinet font-bold text-6xl md:text-8xl leading-none tracking-tighter text-white mb-6">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">COMUNIDADE</span>
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-3xl md:text-6xl font-cabinet font-light text-white">CRIADORES IA</span>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">

                    {/* Exclusive / Hands Image - Large Left Block */}
                    <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/50 group">
                        <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                                EXCLUSIVO
                            </span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                            alt="Abstract AI Hands"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    {/* Networking - Top Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group relative overflow-hidden"
                    >
                        <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 px-4">
                            <Users className="text-purple-400 w-10 h-10 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Networking</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Conecte-se com centenas de criativos que já fazem parte da nossa comunidade.
                        </p>
                    </motion.div>

                    {/* Conversations - Top Right - WHITE CARD */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group relative overflow-hidden"
                    >
                        <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                            <MessageSquare className="text-purple-400 w-10 h-10 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Conversas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Discussões reais sobre ferramentas, processos criativos e tendências de mercado.
                        </p>
                    </motion.div>

                    {/* Jobs - Bottom Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group"
                    >
                        <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6">
                            <Briefcase className="text-indigo-400 w-10 h-10 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Vagas</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Oportunidades exclusivas em empresas que buscam criativos especializados em IA.
                        </p>
                    </motion.div>

                    {/* Support - Bottom Right */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group"
                    >
                        <div className="w-20 h-20 md:w-16 md:h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                            <LifeBuoy className="text-blue-400 w-10 h-10 md:w-8 md:h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Suporte</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Obtenha ajuda técnica, compartilhe aprendizados e receba suporte da equipe.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Community;
