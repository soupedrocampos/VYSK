/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, LogIn, CheckCircle, AlertTriangle, BarChart, Activity, Zap, Video, Clock } from 'lucide-react';
import CustomVideoPlayer from '../components/CustomVideoPlayer';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { type IDiagnosticData } from '../data/diagnosticData';
import { diagnosticService } from '../utils/diagnosticService';
import { useAdmin } from '../context/AdminContext';
import PageSEO from '../components/PageSEO';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex items-center justify-center gap-4 text-red-500 font-bold mb-6 bg-red-500/10 py-3 px-6 rounded-full border border-red-500/20 animate-pulse">
            <Clock size={24} />
            <span className="text-xl tracking-widest font-mono">
                {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-sm uppercase tracking-wide">Oferta Expira em Breve</span>
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
    const [showPricePopup, setShowPricePopup] = useState(false);

    // Video State
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);

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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden"
                        >
                            {/* Hero Section */}
                            <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2000&auto=format&fit=crop"
                                        alt="Background"
                                        className="w-full h-full object-cover opacity-50 grayscale"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
                                </div>

                                <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl pt-20">
                                    <p className="text-green-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                                        {currentUser?.hero?.subtitle || 'Especialista em Performance'}
                                    </p>
                                    <h1 className="text-4xl md:text-6xl font-cabinet font-bold leading-tight mb-8 text-white drop-shadow-2xl">
                                        {currentUser?.hero?.title || 'Diagnóstico de Performance'}
                                    </h1>

                                    {currentUser?.videoUrl && (
                                        <div
                                            className={`w-full mx-auto mb-20 rounded-2xl overflow-hidden shadow-2xl border border-white/20 transition-all duration-700 ease-in-out cursor-pointer group ${isVideoExpanded ? 'max-w-[90vw] md:max-w-7xl scale-105 z-50' : 'max-w-5xl hover:scale-[1.02]'}`}
                                            onClick={() => setIsVideoExpanded(true)}
                                        >
                                            <div className="relative">
                                                {!isVideoExpanded && (
                                                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors pointer-events-none">
                                                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 text-white animate-pulse">
                                                            <span className="text-sm font-bold tracking-wider">CLIQUE PARA AMPLIAR</span>
                                                        </div>
                                                    </div>
                                                )}
                                                <CustomVideoPlayer url={currentUser.videoUrl} />
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById('price-section');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
                                    >
                                        {currentUser?.hero?.cta || 'Ver Meu Plano'}
                                    </button>
                                </div>
                            </div>

                            <div className="container mx-auto px-4 -mt-32 relative z-20 pb-20 space-y-20">
                                {/* Score & Summary Section */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                    {/* Score Card */}
                                    <motion.div
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="lg:col-span-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="w-40 h-40 relative flex items-center justify-center mb-6">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    className="text-white/10"
                                                />
                                                <circle
                                                    cx="80"
                                                    cy="80"
                                                    r="70"
                                                    stroke="currentColor"
                                                    strokeWidth="8"
                                                    fill="transparent"
                                                    strokeDasharray={440}
                                                    strokeDashoffset={440 - (440 * (currentUser?.score || 0)) / 100}
                                                    className="text-green-500 transition-all duration-1000 ease-out"
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <span className="text-5xl font-bold font-cabinet text-white">
                                                    {currentUser?.score}
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Pontuação Geral</h3>
                                        <p className="text-gray-400 text-sm">Análise de IA baseada em 4 pilares estratégicos.</p>
                                    </motion.div>

                                    {/* Summary Card */}
                                    <motion.div
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        className="lg:col-span-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-4 opacity-20">
                                            <BarChart size={100} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                            <Activity size={20} /> Resumo da Análise
                                        </h3>
                                        <p className="text-gray-100 text-lg md:text-xl leading-relaxed font-light">
                                            {currentUser?.summary}
                                        </p>
                                    </motion.div>
                                </div>

                                {/* Metrics Row */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {currentUser?.metrics.map((metric, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="bg-[#111] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-green-500/30 transition-colors"
                                        >
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <span className="text-gray-400 text-sm font-bold uppercase tracking-wider">{metric.label}</span>
                                                {metric.status === 'good' ? <CheckCircle size={18} className="text-green-500" /> : <AlertTriangle size={18} className="text-red-500" />}
                                            </div>
                                            <div className={`text-3xl font-bold mb-2 ${metric.status === 'good' ? 'text-green-400' : 'text-red-400'}`}>
                                                {metric.value}%
                                            </div>
                                            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full transition-all duration-1000 ${metric.status === 'good' ? 'bg-green-500' : 'bg-red-500'}`}
                                                    style={{ width: `${metric.value}%` }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Dynamic Analysis Sections */}
                                <div className="space-y-16">
                                    {currentUser?.analysisSections?.map((section, idx) => {
                                        // Specific Renderers based on 'type'
                                        if (section.type === 'stats_grid') {
                                            return (
                                                <div key={idx} className="space-y-6">
                                                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                                        {section.title}
                                                    </h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {section.items?.map((item: any, i: number) => (
                                                            <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] transition-colors">
                                                                <div className="flex items-center gap-2 mb-2">
                                                                    <div className={`w-2 h-2 rounded-full ${item.color === 'green' ? 'bg-green-500' : 'bg-blue-500'}`} />
                                                                    <span className={`font-bold ${item.color === 'green' ? 'text-green-400' : 'text-blue-400'}`}>{item.label}</span>
                                                                </div>
                                                                <div className="text-4xl font-cabinet font-bold text-white mb-2">{item.value}</div>
                                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        if (section.type === 'competitors') {
                                            return (
                                                <div key={idx} className="space-y-6">
                                                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                                                        {section.title}
                                                    </h3>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                        {section.items?.map((item: any, i: number) => (
                                                            <div key={i} className="bg-[#161616] rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group">
                                                                <div className="h-32 bg-gradient-to-br from-gray-800 to-black relative flex items-center justify-center">
                                                                    <span className="text-4xl">✈️</span>
                                                                    <div className={`absolute top-4 right-4 text-xs font-bold px-2 py-1 rounded bg-[${item.color === 'green' ? '#22c55e' : '#ef4444'}]/20 text-[${item.color === 'green' ? '#22c55e' : '#ef4444'}]`}>
                                                                        {item.stat}
                                                                    </div>
                                                                </div>
                                                                <div className="p-6">
                                                                    <h4 className="font-bold text-lg text-white mb-1">{item.name}</h4>
                                                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        if (section.type === 'ai_showcase') {
                                            return (
                                                <div key={idx} className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 p-8 md:p-12">
                                                    <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-20" />
                                                    <div className="relative z-10">
                                                        <h3 className="text-3xl font-cabinet font-bold text-white mb-8 text-center">{section.title}</h3>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                            {section.items?.map((item: any, i: number) => (
                                                                <div key={i} className="bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex items-start gap-4">
                                                                    <div className="bg-purple-500/20 p-3 rounded-lg text-purple-400">
                                                                        {item.icon === 'robot' ? <Zap size={24} /> : <Video size={24} />}
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                                                                        <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }

                                        // Default text renderer (Fallback)
                                        return (
                                            <div key={idx} className="bg-white/5 border border-white/10 rounded-3xl p-8">
                                                <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
                                                <div dangerouslySetInnerHTML={{ __html: section.content || '' }} className="text-gray-300" />
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Mockup Preview (Refined) */}
                                {currentUser?.mockups && (
                                    <div className="py-10">
                                        <div className="grid grid-cols-1 gap-8">
                                            {currentUser.mockups.map((mockup, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                                                >
                                                    <img src={mockup.image} alt="Mockup" className="w-full h-auto" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Price / CTA Section (Re-styled) */}
                                {currentUser?.price && (
                                    <div id="price-section" className="relative rounded-3xl overflow-hidden">

                                        {/* Confirmation Popup Modal */}
                                        <AnimatePresence>
                                            {showPricePopup && (
                                                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                                                        onClick={() => setShowPricePopup(false)}
                                                    />
                                                    <motion.div
                                                        initial={{ scale: 0.9, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        exit={{ scale: 0.9, opacity: 0 }}
                                                        className="bg-[#111] border border-white/20 p-8 rounded-3xl max-w-lg w-full relative z-10 shadow-2xl"
                                                    >
                                                        <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-500/30">
                                                            <AlertTriangle size={32} className="text-yellow-500" />
                                                        </div>
                                                        <h3 className="text-2xl font-cabinet font-bold text-center mb-4 text-white">Confirmação Necessária</h3>
                                                        <p className="text-gray-300 text-center mb-8 leading-relaxed">
                                                            Você está prestes a acessar uma <strong>Condição Comercial Exclusiva</strong>.
                                                            Ao revelar este investimento, você entende que esta oferta tem validade limitada de <strong>24 horas</strong>.
                                                        </p>
                                                        <div className="flex gap-4">
                                                            <button
                                                                onClick={() => setShowPricePopup(false)}
                                                                className="flex-1 py-4 rounded-xl font-bold text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                                                            >
                                                                Cancelar
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setShowPricePopup(false);
                                                                    setIsPriceRevealed(true);
                                                                }}
                                                                className="flex-1 bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-transform active:scale-95"
                                                            >
                                                                SIM, ESTOU PRONTO
                                                            </button>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            )}
                                        </AnimatePresence>

                                        <div className={`bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-3xl p-12 text-center relative transition-all duration-700 ${!isPriceRevealed ? 'filter blur-sm select-none' : ''}`}>
                                            <div className="relative z-10 max-w-3xl mx-auto">
                                                <h2 className="text-3xl md:text-5xl font-cabinet font-bold text-white mb-8">
                                                    Plano de Ação Recomendado
                                                </h2>

                                                {/* Deliverables List (Recommendations) */}
                                                <div className="bg-white/5 rounded-2xl p-8 mb-10 text-left">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        {currentUser.recommendations.map((rec, i) => (
                                                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                                                <CheckCircle size={18} className="text-green-500 shrink-0" />
                                                                <span className="text-sm">{rec}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="border-t border-white/10 pt-8">
                                                    {isPriceRevealed && <CountdownTimer />}

                                                    <p className="text-green-400 font-bold tracking-widest uppercase mb-2 text-sm">{currentUser.price.label}</p>
                                                    <h3 className="text-6xl md:text-7xl font-bold text-white mb-2">{currentUser.price.value}</h3>
                                                    {currentUser.price.originalValue && (
                                                        <span className="text-gray-500 line-through text-xl block mb-8">{currentUser.price.originalValue}</span>
                                                    )}

                                                    <a
                                                        href="https://wa.me/55999999999?text=Ol%C3%A1%2C%20gostaria%20de%20ativar%20o%20Plano%20de%20A%C3%A7%C3%A3o%202025"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-black font-bold px-10 py-5 rounded-full text-xl transition-all transform hover:scale-105"
                                                    >
                                                        ATIVAR PLANO DE AÇÃO 2025 <Zap size={24} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Overlay Button when Blurred */}
                                        {!isPriceRevealed && (
                                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                                                <button
                                                    onClick={() => setShowPricePopup(true)}
                                                    className="bg-green-600 hover:bg-green-500 text-white font-bold px-12 py-5 rounded-full text-xl transition-all shadow-[0_0_50px_rgba(34,197,94,0.3)] hover:scale-105 flex items-center gap-2"
                                                >
                                                    <Lock size={20} />
                                                    VER INVESTIMENTO
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            <Footer />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
};

export default Diagnostic;
