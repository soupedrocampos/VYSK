import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, LogOut, ShieldCheck, Menu, X } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';
import { useState } from 'react';

const AdminLayout = () => {
    const { isAuthenticated, logout } = useAdmin();
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Redirect if not authenticated
    // In a real app, this should be a ProtectedRoute wrapper, but strict check here works for MVP
    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/admin');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) return null;

    const handleLogout = () => {
        logout();
        navigate('/admin');
    };

    const navItems = [
        { path: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/admin/crm', icon: Users, label: 'CRM / Clientes' },
        { path: '/admin/content', icon: FileText, label: 'Conteúdo' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-satoshi flex overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/grid.svg')] bg-center opacity-20" />
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />
            </div>

            {/* Sidebar (Desktop) */}
            <aside className="hidden md:flex flex-col w-64 h-screen border-r border-white/10 bg-black/40 backdrop-blur-xl z-20 relative">
                <div className="p-8 border-b border-white/10 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="font-cabinet font-bold text-lg tracking-tight leading-none">ADMIN</h1>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">Panel</p>
                    </div>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                    ? 'bg-white/10 text-white border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium text-sm">{item.label}</span>
                            {/* Glow effect on active */}
                        </NavLink>
                    ))}
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        <span className="font-medium text-sm">Sair</span>
                    </button>
                    <div className="mt-4 text-center">
                        <div className="inline-flex items-center justify-center w-full gap-2 px-2 py-1 rounded bg-white/5 border border-white/5">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] text-gray-500 font-mono">SYSTEM ONLINE</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/10 z-30 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-white" />
                    <span className="font-cabinet font-bold text-lg">ADMIN</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-white">
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-20 bg-black/95 pt-20 px-4 md:hidden">
                    <nav className="space-y-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-4 py-4 rounded-xl transition-all ${isActive ? 'bg-white/10 text-white' : 'text-gray-400'}`
                                }
                            >
                                <item.icon className="w-6 h-6" />
                                <span className="text-lg">{item.label}</span>
                            </NavLink>
                        ))}
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-3 px-4 py-4 w-full rounded-xl text-red-400 hover:bg-red-500/10 mt-8 border border-red-500/20"
                        >
                            <LogOut className="w-6 h-6" />
                            <span className="text-lg">Sair</span>
                        </button>
                    </nav>
                </div>
            )}

            {/* Main Content Area */}
            <main className="flex-1 relative z-10 overflow-y-auto h-screen pt-20 md:pt-0">
                <div className="max-w-7xl mx-auto p-6 md:p-12">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
