import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "Which AI softwares and tools will be covered in the course?",
        answer: "The Academy Pass gives you access to a complete ecosystem of courses that explore the most powerful AI tools for image, video, text, and sound creation. Each tool is presented in a practical way, showing how to use it creatively and integrate it into your professional workflow."
    },
    {
        question: "Do I need previous experience in audiovisual production to participate?",
        answer: "No, the course is designed to take you from beginner to advanced levels. We start with the basics of setting up accounts and navigating the interfaces, progressing to advanced techniques. Whether you are a total beginner or an experienced creator, you will find value."
    },
    {
        question: "Will participants receive a certificate at the end of the course?",
        answer: "Yes, upon completing the course modules, you will receive a certificate of completion from Human Academy, validating your comprehensive knowledge in AI-driven creative workflows."
    },
    {
        question: "How can I apply the techniques learned to my current work?",
        answer: "The techniques taught are applicable across various creative fields including graphic design, video editing, marketing, content creation, and more. You'll learn workflows that can speed up your production, enhance quality, and open new creative possibilities."
    },
    {
        question: "Does the course focus only on creating videos with AI?",
        answer: "No. While video is a major component (AI Video Creator Pro), the Global Pass also covers Image Generation (Midjourney, etc.), Clone Creation, and Upscaling. It's a holistic approach to AI media production."
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
                        <span className="text-xs font-bold tracking-widest uppercase text-white/80">Doubts</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold font-cabinet mb-4">
                        COMMON <span className="text-gray-500">QUESTIONS</span>
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
