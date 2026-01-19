import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLeadModal } from '../context/LeadModalContext';
import { useAdmin } from '../context/AdminContext';

const LeadModal = () => {
    const { isModalOpen, closeModal } = useLeadModal();
    const { addClient } = useAdmin();

    const [step, setStep] = useState<'form' | 'success'>('form');
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        description: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Add to CRM via AdminContext
        addClient({
            name: formData.name,
            contact: formData.contact,
            status: 'Prospect',
            lastContact: new Date().toISOString().split('T')[0],
            notes: formData.description
        });

        setIsLoading(false);
        setStep('success');

        // Reset form after delay and close
        setTimeout(() => {
            closeModal();
            setTimeout(() => {
                setStep('form');
                setFormData({ name: '', contact: '', description: '' });
            }, 300);
        }, 3000);
    };

    return (
        <AnimatePresence>
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                    >
                        {/* Blob Background Effect */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
                        >
                            <X size={24} />
                        </button>

                        <div className="relative z-10">
                            <AnimatePresence mode="wait">
                                {step === 'form' ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                    >
                                        <h3 className="font-cabinet font-bold text-3xl text-white mb-2">Vamos escalar? 🚀</h3>
                                        <p className="text-gray-400 mb-8">Preencha os dados abaixo para que nossa equipe entre em contato.</p>

                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-300 ml-1 uppercase tracking-wide">Seu Nome</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Como podemos te chamar?"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-300 ml-1 uppercase tracking-wide">Contato</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="WhatsApp ou E-mail"
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                                                    value={formData.contact}
                                                    onChange={e => setFormData({ ...formData, contact: e.target.value })}
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-300 ml-1 uppercase tracking-wide">O que você precisa?</label>
                                                <textarea
                                                    required
                                                    placeholder="Descreva brevemente seu projeto ou desafio..."
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all h-32 resize-none"
                                                    value={formData.description}
                                                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-xl shadow-[0_0_30px_rgba(147,51,234,0.3)] hover:shadow-[0_0_50px_rgba(147,51,234,0.5)] hover:brightness-110 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? (
                                                    <Loader2 className="animate-spin" size={20} />
                                                ) : (
                                                    <>
                                                        <span>ENVIAR SOLICITAÇÃO</span>
                                                        <Send size={18} />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="py-12 text-center flex flex-col items-center justify-center"
                                    >
                                        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="text-green-400 w-10 h-10" />
                                        </div>
                                        <h3 className="font-cabinet font-bold text-3xl text-white mb-2">Recebemos!</h3>
                                        <p className="text-gray-400 max-w-xs mx-auto">Sua solicitação foi enviada para nossa equipe. Entraremos em contato em breve.</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default LeadModal;
