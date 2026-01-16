import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Quais softwares e ferramentas de IA serão abordados?",
        answer: "O Pacote Global dá acesso a um ecossistema completo de estratégias que exploram as ferramentas de IA mais poderosas para criação de imagem, vídeo, texto e som. Cada ferramenta é apresentada de forma prática, mostrando como usá-la criativamente e integrá-la ao seu fluxo de trabalho profissional."
    },
    {
        question: "Preciso de experiência anterior em produção audiovisual?",
        answer: "Não, o conteúdo foi desenhado para te levar do zero ao avançado. Começamos com os fundamentos de configuração de contas e navegação nas interfaces, progredindo para técnicas avançadas. Seja você um iniciante total ou um criador experiente, encontrará valor."
    },
    {
        question: "Receberei um certificado ao final do curso?",
        answer: "Sim, ao completar os módulos, você receberá um certificado de conclusão, validando seu conhecimento abrangente em fluxos de trabalho criativos impulsionados por IA."
    },
    {
        question: "Como posso aplicar as técnicas aprendidas no meu trabalho atual?",
        answer: "As técnicas ensinadas são aplicáveis em vários campos criativos, incluindo design gráfico, edição de vídeo, marketing, criação de conteúdo e mais. Você aprenderá workflows que podem acelerar sua produção, melhorar a qualidade e abrir novas possibilidades criativas."
    },
    {
        question: "O curso foca apenas em criar vídeos com IA?",
        answer: "Não. Embora o vídeo seja um componente importante, o Pacote Global também cobre Geração de Imagem, Criação de Clones e Upscaling. É uma abordagem holística para a produção de mídia com IA."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-human-bg font-satoshi relative">
            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">Dúvidas</span>
                    </div>
                    <h2 className="font-cabinet font-bold text-6xl md:text-8xl leading-none tracking-tighter text-white mb-8">
                        PERGUNTAS <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">FREQUENTES</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index
                                ? 'bg-human-card-bg border-white/20'
                                : 'bg-transparent border-white/10 hover:border-white/20'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 ${openIndex === index ? 'bg-white text-black border-white' : 'border-white/20 text-white group-hover:border-white/50'
                                    }`}>
                                    <AnimatePresence mode='wait'>
                                        {openIndex === index ? (
                                            <motion.div
                                                key="minus"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute"
                                            >
                                                <Minus size={16} />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="plus"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute"
                                            >
                                                <Plus size={16} />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0">
                                            <p className="text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
