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

                    <h2 className="font-cabinet font-light text-4xl md:text-8xl leading-none tracking-tighter text-white/20 uppercase whitespace-nowrap">
                        REVIEWS <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">REVIEWS</span> REVIEWS
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
                            "A transformação digital da nossa empresa foi completa. O novo site não só é visualmente impactante, mas a estratégia por trás dele dobrou nossa conversão em 30 dias."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">R</div>
                            <div>
                                <p className="text-white font-bold text-sm">Ricardo Alves</p>
                                <p className="text-gray-500 text-xs uppercase">CEO TechFlow</p>
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
                            "Nunca imaginei que automação pudesse economizar tanto tempo. A equipe da Pedrovysk implementou fluxos que reduziram nosso trabalho manual em 80%. Impecável."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center font-bold text-purple-300">A</div>
                            <div>
                                <p className="text-white font-bold text-sm">Ana Clara</p>
                                <p className="text-gray-500 text-xs uppercase">Diretora Operacional</p>
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
                            "Excelência e sofisticação definem. O branding e a identidade visual criados elevaram o patamar da nossa marca no mercado de luxo. Recomendo de olhos fechados."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold text-white">M</div>
                            <div>
                                <p className="text-white font-bold text-sm">Marcos Vinicius</p>
                                <p className="text-gray-500 text-xs uppercase">Fundador LuxeGroup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
