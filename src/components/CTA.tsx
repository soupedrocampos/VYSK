import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-human-bg font-satoshi border-t border-white/5">
            <div className="container mx-auto px-4">

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">GLOBAL</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">PACKAGE</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-bold font-cabinet text-white tracking-tighter leading-none"
                    >
                        HERE'S WHAT <br />
                        YOU'LL GET
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <a
                            href="https://pay.kiwify.com.br/W711S1B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B3A1C7] to-[#8E7BB0] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(179,161,199,0.4)] transition-all transform hover:-translate-y-1"
                        >
                            <span>OBTAIN CREATIVE PACK</span>
                            <ArrowUpRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
