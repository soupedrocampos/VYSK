import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, LogIn, LogOut, CheckCircle, AlertTriangle, XCircle, BarChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { diagnosticUsers, type IDiagnosticData } from '../data/diagnosticData';

const Diagnostic = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState<IDiagnosticData | null>(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const user = diagnosticUsers.find(
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
                                    className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
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
                            className="w-full max-w-5xl"
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
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

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Score Card */}
                                <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
                                    <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center mb-4 relative">
                                        <span className="text-4xl font-bold">{currentUser?.score}</span>
                                        <div className="absolute inset-0 border-4 border-t-purple-500 rounded-full rotate-45" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Pontuação Geral</h3>
                                    <p className="text-gray-400 text-sm">Baseado em nossos 4 pilares de análise</p>
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
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
};

export default Diagnostic;
