import { motion } from 'framer-motion';
import { Check, ArrowUpRight, Globe } from 'lucide-react';

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
                        <h2 className="font-cabinet font-bold text-7xl md:text-8xl leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] tracking-tighter text-white mb-8">
                            INVESTIMENTO
                        </h2>
                        <p className="text-xl text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            Este pacote exclusivo inclui todos os módulos, atualizações e acesso à comunidade global.
                        </p>
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
                                <Globe className="text-white w-12 h-12 mb-6" strokeWidth={1} />
                                <h3 className="text-3xl font-bold text-white mb-2">ACESSO GLOBAL</h3>
                                <h4 className="text-xl font-bold text-white mb-4">OFERTA ESPECIAL</h4>
                                <p className="text-gray-500 text-xs uppercase tracking-wide">
                                    Criação de Vídeo + Imagem + Clones IA + Upscale PRO
                                </p>
                            </div>

                            <div className="mb-10">
                                <p className="text-gray-500 text-lg mb-1 line-through">De R$ 997</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-6xl font-bold text-white font-cabinet">R$ 497</span>
                                    <span className="text-gray-400 text-sm uppercase tracking-wider">PAGAMENTO ÚNICO</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#9d8bb1] to-[#715e8b] text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-purple-900/30 mb-10 group-hover:from-[#b3a1c7] group-hover:to-[#836ea1]">
                                GARANTIR ACESSO <ArrowUpRight size={18} />
                            </button>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Oferta por tempo limitado</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">4 módulos completos</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Suporte em português</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">150+ aulas gravadas</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Metodologia N8N Exclusiva</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Acesso vitalício</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Check className="text-white w-5 h-5" />
                                    <span className="text-gray-300 text-sm">Início imediato</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
