import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Globe } from 'lucide-react';

const SlotDigit = ({ duration = 1 }: { duration?: number }) => {
    const strip = [7, 2, 9, 0, 5, 1, 8, 3, 6, 4];
    return (
        <div className="relative h-[1.1em] w-[0.6em] overflow-hidden inline-block align-bottom">
            <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute left-0 top-0 flex flex-col items-center w-full leading-none"
            >
                {[...strip, ...strip].map((num, i) => (
                    <span key={i} className="h-[1.1em] flex items-center justify-center">
                        {num}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-human-bg font-satoshi relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-gradient-to-r from-purple-900/10 to-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">GLOBAL</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">PRICING</span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <h2 className="font-cabinet font-bold text-6xl md:text-8xl leading-none tracking-tighter text-white mb-8 flex flex-col">
                            <span>OFERTA</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ESPECIAL</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Soluções digitais completas para escalar seu negócio. Unimos design, tecnologia e estratégia para criar resultados extraordinários.
                        </p>

                        <div className="mt-8 relative group/price cursor-pointer w-fit mx-auto lg:mx-0">
                            <div className="flex items-baseline gap-1 transition-all duration-500 ease-in-out group-hover/price:opacity-0 group-hover/price:translate-y-4">
                                <span className="text-4xl md:text-6xl font-bold text-white font-cabinet select-none blur-[4px]">R$</span>
                                <div className="text-4xl md:text-6xl font-bold text-white font-cabinet select-none flex items-baseline blur-[4px]">
                                    <SlotDigit duration={8} />
                                    <SlotDigit duration={6} />
                                    <SlotDigit duration={9} />
                                    <SlotDigit duration={7} />
                                </div>
                            </div>

                            <div className="absolute inset-0 flex items-center justify-start opacity-0 group-hover/price:opacity-100 transition-all duration-500 ease-in-out translate-y-4 group-hover/price:translate-y-0">
                                <span className="text-xl md:text-2xl font-bold text-white font-cabinet tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 whitespace-nowrap">
                                    CONSULTAR VALOR
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - Pricing */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
                    >
                        {/* Card Glow */}
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

                        <div className="relative z-10">
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-2">
                                    <Globe className="text-white w-12 h-12" strokeWidth={1} />
                                    <h3 className="text-3xl font-bold text-white">SERVIÇOS EXCLUSIVOS</h3>
                                </div>
                                <h4 className="text-xl font-bold text-white mb-4 pl-[4rem]">PACOTE COMPLETO</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wide pl-[4rem]">
                                    Sites + Automação + Design + Inteligência Artificial
                                </p>
                            </div>

                            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] mb-10 hover:brightness-110">
                                GARANTIR ACESSO <ArrowUpRight size={18} />
                            </button>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Desenvolvimento Web High-End</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Automação com N8N e IA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Design UI/UX Premium</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Consultoria Estratégica</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Otimização de Processos</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Suporte Prioritário</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Entrega em 7 a 15 dias</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default Pricing;
