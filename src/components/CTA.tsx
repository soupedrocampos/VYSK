import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <section id="careers" className="py-24 bg-human-bg font-satoshi border-t border-white/5">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12">
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">GLOBAL</span>
                    <span className="w-px h-3 bg-white/20" />
                    <span className="text-xs font-bold tracking-widest uppercase text-white/80">PACKAGE</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex flex-col gap-6 w-full md:w-3/4">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="font-cabinet font-bold text-6xl md:text-8xl leading-none tracking-tighter text-white"
                        >
                            O QUE VOCÊ <br />
                            QUER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">RECEBER?</span>
                        </motion.h2>

                        <motion.textarea
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            placeholder="Escreva aqui o que você precisa..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 resize-none h-32 text-lg"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-auto"
                    >
                        <a
                            href="https://pay.kiwify.com.br/W711S1B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] hover:brightness-110 w-full md:w-auto"
                        >
                            <span className="uppercase text-center">{inputValue.length > 0 ? "SOLUCIONAR MEU PROBLEMA AGORA" : "OBTENHA O PACOTE CRIATIVO"}</span>
                            <ArrowUpRight size={20} />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
