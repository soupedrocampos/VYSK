import { motion } from 'framer-motion';

interface InstructorsProps {
    badge?: string;
    badgeSub?: string;
    title?: string;
    bio?: string;
    image?: string;
}

import { useLanguage } from '../context/LanguageContext';

const Instructors = ({ badge, badgeSub, title, bio, image }: InstructorsProps) => {
    const { t } = useLanguage();

    const displayBadge = badge || t('instructors.badge');
    const displayBadgeSub = badgeSub || t('instructors.badge_sub');
    const displayTitle = title || t('instructors.title');
    const displayBio = bio || t('instructors.bio');
    // Default image if not provided
    const displayImage = image || "/assets/pedrovysk-profile.png";

    return (
        <section id="about" className="py-24 bg-human-bg font-sans overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-tr from-human-green/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
                            <img
                                src={displayImage}
                                alt="Instructor"
                                className="relative w-full h-full object-cover rounded-3xl bg-white/5 border border-white/10 shadow-2xl z-10"
                            />

                            {/* Stats Card */}
                            <div className="absolute -bottom-6 -right-6 z-20 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl font-bold text-human-green font-cabinet">8+</div>
                                    <div className="text-sm text-white/80 leading-tight uppercase tracking-widest">
                                        Anos de<br />Experiência
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="inline-flex items-center space-x-2 bg-white/[0.02] border border-white/10 rounded-full px-4 py-1.5 mb-8">
                                <span className="text-xs font-bold tracking-widest uppercase text-white/80">{displayBadge}</span>
                                <span className="w-px h-3 bg-white/20" />
                                <span className="text-xs font-bold tracking-widest uppercase text-white/80">{displayBadgeSub}</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-sans text-white tracking-tight leading-[0.9] mb-6 uppercase whitespace-pre-line">
                                {displayTitle.split(/<\/?b>/).map((part, i) => (
                                    <span key={i} className={i % 2 === 1 ? "font-bold" : "font-light"}>
                                        {part}
                                    </span>
                                ))}
                            </h2>

                            <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed">
                                <p className="whitespace-pre-wrap">{displayBio}</p>
                            </div>

                            <div className="mt-10 pt-10 border-t border-white/10 flex gap-8">
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">15k+</div>
                                    <div className="text-xs uppercase tracking-widest text-white/40">Alunos</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                                    <div className="text-xs uppercase tracking-widest text-white/40">Projetos</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-white mb-1">4.9/5</div>
                                    <div className="text-xs uppercase tracking-widest text-white/40">Avaliação</div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructors;
