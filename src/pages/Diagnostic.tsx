/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, LogIn, LogOut, CheckCircle, AlertTriangle, XCircle, BarChart } from 'lucide-react';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { type IDiagnosticData } from '../data/diagnosticData';
import { diagnosticService } from '../utils/diagnosticService';
import { useAdmin } from '../context/AdminContext';
import PageSEO from '../components/PageSEO';

const MockupCard = ({ mockup }: { mockup: { title: string; image: string } }) => {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div className="space-y-4">
            <h4 className="text-xl font-bold font-cabinet text-purple-300 text-center">{mockup.title}</h4>
            <div
                className="relative rounded-2xl overflow-hidden cursor-pointer group border border-white/10"
                onClick={() => setIsRevealed(true)}
            >
                {/* Image */}
                <img
                    src={mockup.image}
                    alt={mockup.title}
                    className={`w-full transition-all duration-700 ${isRevealed ? 'scale-100 blur-0' : 'scale-105 blur-md'}`}
                />

                {/* Glass Camouflage Overlay */}
                {!isRevealed && (
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-xl flex flex-col items-center justify-center transition-opacity duration-500 hover:bg-white/10">
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center backdrop-blur-md border border-purple-500/30 mb-4 group-hover:scale-110 transition-transform">
                            <Lock className="text-purple-300" size={24} />
                        </div>
                        <p className="font-cabinet font-bold text-white text-lg">CLIQUE PARA VISUALIZAR</p>
                        <p className="text-sm text-gray-400">Design Exclusivo</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Diagnostic = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState<IDiagnosticData | null>(null);
    // Initialize username from URL parameter 'u' if present
    const [username, setUsername] = useState(() => {
        const params = new URLSearchParams(window.location.search);
        return params.get('u') || '';
    });
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Price Reveal State
    const [isPriceRevealed, setIsPriceRevealed] = useState(false);
    const [showPriceConfirm, setShowPriceConfirm] = useState(false);

    // Admin Backdoor
    const secretClickCount = useRef(0);
    const secretClickTimeout = useRef<any>(null);
    const { login: adminLogin } = useAdmin();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Admin Login Check
        if (username === 'admin') {
            if (adminLogin(password)) {
                window.location.href = '/admin/dashboard';
                return;
            } else {
                setError('Credenciais de administrador inválidas.');
                return;
            }
        }

        const users = diagnosticService.getAll();
        const user = users.find(
            (u) => u.username === username && u.password === password
        );

        if (user) {
            setCurrentUser(user);
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Usuário ou senha incorretos.');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setCurrentUser(null);
        setUsername('');
        setPassword('');
        setIsPriceRevealed(false);
        setShowPriceConfirm(false);
    };

    const getStatusColor = (status: 'good' | 'warning' | 'critical') => {
        switch (status) {
            case 'good': return 'text-green-400 bg-green-500/10 border-green-500/20';
            case 'warning': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
            case 'critical': return 'text-red-400 bg-red-500/10 border-red-500/20';
            default: return 'text-gray-400';
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30 font-satoshi">
            <PageSEO path="/diagnostico" />
            <Navbar />

            <div className="pt-32 pb-20 container mx-auto px-4 min-h-[80vh] flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    {!isAuthenticated ? (
                        <motion.div
                            key="login"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="w-full max-w-md bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl"
                        >
                            <div className="flex flex-col items-center mb-8">
                                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 text-purple-400 border border-purple-500/30">
                                    <Lock size={32} />
                                </div>
                                <h1 className="text-2xl font-bold font-cabinet">Área Restrita</h1>
                                <p className="text-gray-400 text-sm">Acesse seu diagnóstico personalizado</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Usuário</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <input
                                            type="text"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                            placeholder="Seu usuário"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Senha</label>
                                    <div className="relative">
                                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                            placeholder="Sua senha"
                                        />
                                    </div>
                                </div>

                                {error && (
                                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400 text-sm">
                                        <AlertTriangle size={16} />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    onClick={(e) => {
                                        // Backdoor: 10 consecutive clicks to go to admin
                                        if (secretClickTimeout.current) clearTimeout(secretClickTimeout.current);

                                        secretClickCount.current += 1;

                                        if (secretClickCount.current >= 10) {
                                            e.preventDefault();
                                            window.location.href = '/admin';
                                            secretClickCount.current = 0;
                                        } else {
                                            secretClickTimeout.current = setTimeout(() => {
                                                secretClickCount.current = 0;
                                            }, 1000);
                                        }
                                    }}
                                    className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 select-none active:scale-95 duration-200"
                                >
                                    <LogIn size={18} />
                                    ACESSAR DIAGNÓSTICO
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="dashboard"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-5xl space-y-8"
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h1 className="text-3xl md:text-5xl font-bold font-cabinet mb-2">
                                        Olá, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{currentUser?.name}</span>
                                    </h1>
                                    <p className="text-xl text-gray-400">{currentUser?.company} • Diagnóstico de Performance</p>
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-sm text-gray-300"
                                >
                                    <LogOut size={16} /> Sair
                                </button>
                            </div>

                            {/* Video Section */}
                            {currentUser?.videoUrl && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CustomVideoPlayer url={currentUser.videoUrl} />
                                </motion.div>
                            )}

                            {/* Main Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Score Card */}
                                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                    <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center mb-4 relative">
                                        <span className="text-4xl font-bold">{currentUser?.score}</span>
                                        <div className="absolute inset-0 border-4 border-t-purple-500 rounded-full rotate-45" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Pontuação Geral</h3>
                                    <p className="text-gray-400 text-sm">Baseado em 4 pilares</p>
                                </div>

                                {/* Summary */}
                                <div className="md:col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <BarChart size={24} className="text-purple-400" />
                                        <h3 className="text-xl font-bold">Resumo da Análise</h3>
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-lg">
                                        {currentUser?.summary}
                                    </p>
                                </div>

                                {/* Metrics Breakdown */}
                                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    {currentUser?.metrics.map((metric, idx) => (
                                        <div key={idx} className={`p-6 rounded-2xl border ${getStatusColor(metric.status)}`}>
                                            <div className="flex justify-between items-start mb-4">
                                                <h4 className="font-bold">{metric.label}</h4>
                                                {metric.status === 'good' && <CheckCircle size={20} />}
                                                {metric.status === 'warning' && <AlertTriangle size={20} />}
                                                {metric.status === 'critical' && <XCircle size={20} />}
                                            </div>
                                            <div className="text-3xl font-bold mb-1">{metric.value}%</div>
                                            <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-current opacity-50"
                                                    style={{ width: `${metric.value}%` }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Analysis Sections (Persuasive Content) */}
                                {currentUser?.analysisSections?.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="md:col-span-3 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
                                        <h3 className="text-2xl md:text-3xl font-cabinet font-bold mb-6 text-white">{section.title}</h3>
                                        <div
                                            className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap [&>img]:rounded-xl [&>img]:w-full [&>img]:my-4"
                                            dangerouslySetInnerHTML={{ __html: section.content }}
                                        />
                                    </motion.div>
                                ))}

                                {/* Recommendations */}
                                <div className="md:col-span-3 bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-white/10 rounded-3xl p-8">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <CheckCircle className="text-green-400" />
                                        Plano de Ação Recomendado
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {currentUser?.recommendations.map((rec, idx) => (
                                            <div key={idx} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold shrink-0">
                                                    {idx + 1}
                                                </div>
                                                <p className="text-gray-200">{rec}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Mockups Section */}
                                {currentUser?.mockups && (
                                    <div className="md:col-span-3">
                                        <h3 className="text-2xl font-bold font-cabinet mb-6 text-white text-center">
                                            Modelos de Site - Escolha o seu
                                        </h3>
                                        <div className={`grid grid-cols-1 ${currentUser.mockups.length > 1 ? 'md:grid-cols-2' : ''} gap-8`}>
                                            {currentUser.mockups.map((mockup, idx) => (
                                                <MockupCard key={idx} mockup={mockup} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Price Reveal Section */}
                                {currentUser?.price && (
                                    <div className="md:col-span-3 mt-8 mb-20">
                                        {!isPriceRevealed ? (
                                            <motion.div
                                                className="w-full bg-white/5 border border-white/10 rounded-3xl p-12 text-center cursor-pointer hover:bg-white/10 transition-colors group relative overflow-hidden"
                                                onClick={() => setShowPriceConfirm(true)}
                                                whileHover={{ scale: 1.01 }}
                                            >
                                                <div className="relative z-10 flex flex-col items-center gap-4">
                                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                        <Lock className="text-white w-8 h-8" />
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white">VISUALIZAR INVESTIMENTO</h3>
                                                    <p className="text-gray-400 max-w-md mx-auto">
                                                        O plano de ação desenvolvido é exclusivo e de alto impacto. Clique para confirmar que você entende o valor da proposta.
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="w-full bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/30 rounded-3xl p-12 text-center relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10" />
                                                <div className="relative z-10">
                                                    <p className="text-purple-300 font-bold tracking-widest uppercase mb-4 text-sm">
                                                        {currentUser.price.label}
                                                    </p>
                                                    <div className="flex flex-col items-center justify-center gap-2">
                                                        {currentUser.price.originalValue && (
                                                            <span className="text-gray-500 line-through text-2xl font-cabinet">
                                                                {currentUser.price.originalValue}
                                                            </span>
                                                        )}
                                                        <h2 className="text-6xl md:text-8xl font-cabinet font-bold text-white mb-2 tracking-tighter">
                                                            {currentUser.price.value}
                                                        </h2>
                                                        <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-xs font-bold uppercase border border-purple-500/20">
                                                            Oferta Especial
                                                        </span>
                                                        <button
                                                            className="mt-8 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                                                            onClick={() => window.location.href = "https://wa.me/55999999999"} // Example WhatsApp link
                                                        >
                                                            GARANTIR MINHA VAGA
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Popup Confirmation */}
                            <AnimatePresence>
                                {showPriceConfirm && (
                                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="bg-[#111] border border-white/20 rounded-3xl p-8 max-w-md w-full relative"
                                        >
                                            <button
                                                onClick={() => setShowPriceConfirm(false)}
                                                className="absolute top-4 right-4 text-gray-500 hover:text-white"
                                            >
                                                <XCircle size={24} />
                                            </button>

                                            <div className="flex flex-col items-center text-center">
                                                <div className="w-16 h-16 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-6">
                                                    <AlertTriangle size={32} />
                                                </div>
                                                <h3 className="text-2xl font-bold font-cabinet text-white mb-4">Atenção: Alto Valor</h3>
                                                <p className="text-gray-400 mb-8 leading-relaxed">
                                                    Esta oferta inclui acompanhamento exclusivo e garantia de resultado. O investimento reflete a qualidade e o retorno esperado. Você está pronto para escalar seu negócio?
                                                </p>
                                                <div className="grid grid-cols-2 gap-4 w-full">
                                                    <button
                                                        onClick={() => setShowPriceConfirm(false)}
                                                        className="px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-gray-400 font-bold text-sm"
                                                    >
                                                        VOLTAR
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            setShowPriceConfirm(false);
                                                            setIsPriceRevealed(true);
                                                        }}
                                                        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg shadow-purple-900/20"
                                                    >
                                                        SIM, ESTOU PRONTO
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
};

export default Diagnostic;
