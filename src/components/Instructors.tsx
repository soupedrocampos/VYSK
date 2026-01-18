import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface InstructorsProps {
    title?: string;
    badge?: string;
    badgeSub?: string;
    bio?: string; // Corresponds to desc/bio
    image?: string;
}

const Instructors = ({ title, badge, badgeSub, bio, image }: InstructorsProps) => {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-24 bg-human-bg font-satoshi relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative group">
                            {/* Placeholder for Profile Image - Using a professional abstract look or a placeholder meant for replacement */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: image ? `url(${image})` : undefined }}
                            />
                            {!image && <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" />}

                            {/* Text Texture / Pattern */}
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

                            {!image && <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-cabinet font-bold text-9xl text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">PV</span>
                            </div>}

                            {/* Floating Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-human-green/20 flex items-center justify-center text-human-green">
                                        <ArrowUpRight size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">8+ Anos de Mercado</p>
                                        <p className="text-gray-400 text-xs">Expertise Comprovada</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="text-xs font-bold tracking-widest uppercase text-white/80">{badge || t('instructors.badge')}</span>
                            <span className="w-px h-3 bg-white/20" />
                            <span className="text-xs font-bold tracking-widest uppercase text-white/80">{badgeSub || t('instructors.badge_sub')}</span>
                        </div>

                        <h2 className="font-cabinet font-bold text-5xl md:text-7xl leading-none tracking-tighter text-white mb-8 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: title || t('instructors.title') }}>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                            {bio || t('instructors.desc')}
                        </p>

                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <span>{t('instructors.cta')}</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>

                        {/* Stats or extra info */}
                        <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
                            <div>
                                <p className="text-3xl font-bold text-white font-cabinet">800+</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projetos</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white font-cabinet">15k+</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Alunos</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white font-cabinet">50M+</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Faturamento</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Instructors;
