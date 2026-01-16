import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Reviews = () => {
    return (
        <section id="reviews" className="py-24 bg-human-bg font-satoshi relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">COMMUNITY</span>
                        <span className="w-px h-3 bg-white/20" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">FEEDBACK</span>
                    </div>

                    <h2 className="font-cabinet font-light text-5xl md:text-8xl leading-none tracking-tighter text-white/20 uppercase whitespace-nowrap">
                        REVIEWS <span className="font-bold text-white">REVIEWS</span> REVIEWS
                    </h2>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Review 1 */}
                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                        <div className="flex text-yellow-500 mb-4 gap-1">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            "Curso incrível! A didática do Pedrovysk é sensacional. Aprendi a criar clones perfeitos e escalar minha produção de conteúdo em dias."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">R</div>
                            <div>
                                <p className="text-white font-bold text-sm">Mariana Costa</p>
                                <p className="text-gray-500 text-xs uppercase">Diretora de Arte</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="bg-white/[0.05] border border-white/20 p-8 rounded-3xl backdrop-blur-md transform md:-translate-y-4 shadow-xl shadow-purple-900/10">
                        <div className="flex text-yellow-500 mb-4 gap-1">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        <p className="text-white mb-6 leading-relaxed font-medium">
                            "Nunca vi nada igual no mercado brasileiro. O módulo de N8N mudou o jogo da minha agência. Automatizamos 80% do fluxo."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center font-bold text-purple-300">G</div>
                            <div>
                                <p className="text-white font-bold text-sm">Gabriel Silva</p>
                                <p className="text-gray-500 text-xs uppercase">Founder Agency X</p>
                            </div>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="bg-white/[0.02] border border-white/10 p-8 rounded-3xl backdrop-blur-md">
                        <div className="flex text-yellow-500 mb-4 gap-1">
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                            <Star size={16} fill="currentColor" />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            "Valeu cada centavo. O suporte é rápido e a comunidade é muito engajada. Já fechei 3 projetos grandes com o network daqui."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">L</div>
                            <div>
                                <p className="text-white font-bold text-sm">Lucas Mendes</p>
                                <p className="text-gray-500 text-xs uppercase">Motion Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
