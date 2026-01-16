import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Settings, Image, Sun, Moon,
    Plus, Terminal, Zap, Navigation,
    Cpu, Globe
} from 'lucide-react';

// Types for our lists
interface ToolItem {
    id: string;
    name: string;
    icon?: any;
}

const FloatingMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [newToolInput, setNewToolInput] = useState('');
    const [isAddingTool, setIsAddingTool] = useState(false);

    // Default Tools/APIs list
    const [tools, setTools] = useState<ToolItem[]>([
        { id: '1', name: 'React 18' },
        { id: '2', name: 'Tailwind V4' },
        { id: '3', name: 'Framer Motion' },
        { id: '4', name: 'OpenAI API' },
        { id: '5', name: 'N8N Workflows' },
        { id: '6', name: 'Supabase' }
    ]);

    const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'products', label: 'Modules' },
        { id: 'about', label: 'About' },
        { id: 'content', label: 'Content' },
        { id: 'certificate', label: 'Certificate' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faq', label: 'FAQ' },
    ];

    // Toggle scroll lock when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleAddTool = (e: React.FormEvent) => {
        e.preventDefault();
        if (newToolInput.trim()) {
            setTools([...tools, { id: Date.now().toString(), name: newToolInput }]);
            setNewToolInput('');
            setIsAddingTool(false);
        }
    };

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* FAB Trigger - Fixed Bottom Left */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-10 right-10 z-50 w-14 h-14 bg-[#00D60B] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,214,11,0.3)] hover:shadow-[0_0_30px_rgba(0,214,11,0.5)] transition-all duration-300 group"
            >
                <Menu className="text-black w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </motion.button>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 z-[60] flex flex-col bg-[#0b141a]/95 backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xl font-bold font-cabinet text-white tracking-widest">MENU</h2>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/5">v1.2.0</span>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Quick Utilities */}
                                <button className="p-3 rounded-full hover:bg-white/5 transition-colors group" title="Gallery (Coming Soon)">
                                    <Image className="w-5 h-5 text-gray-400 group-hover:text-[#FFE500] transition-colors" />
                                </button>
                                <button
                                    className="p-3 rounded-full hover:bg-white/5 transition-colors group"
                                    onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
                                >
                                    {theme === 'dark' ? (
                                        <Sun className="w-5 h-5 text-gray-400 group-hover:text-[#FFE500] transition-colors" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-gray-400 group-hover:text-[#FFE500] transition-colors" />
                                    )}
                                </button>
                                <button className="p-3 rounded-full hover:bg-white/5 transition-colors group">
                                    <Settings className="w-5 h-5 text-gray-400 group-hover:text-[#FFE500] transition-colors animate-spin-slow" />
                                </button>

                                <div className="w-px h-8 bg-white/10 mx-2" />

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:rotate-90 duration-300"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">

                                {/* Left Column (Mobile) / Left Side (Desktop): Navigation */}
                                <div className="md:col-span-8 flex flex-col justify-center">
                                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8 flex items-center gap-2">
                                        <Navigation className="w-3 h-3" /> Navigation
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {sections.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => scrollToSection(section.id)}
                                                className="group relative flex items-center p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#00D60B]/30 transition-all duration-300 text-left active:scale-[0.98]"
                                            >
                                                <div className="flex-1">
                                                    <span className="text-2xl md:text-3xl font-bold text-white/50 group-hover:text-white transition-colors font-cabinet">
                                                        {section.label}
                                                    </span>
                                                </div>
                                                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-2">
                                                    <Globe className="w-4 h-4 text-[#00D60B]" />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column (Desktop): Tools & Config */}
                                <div className="md:col-span-4 border-l border-white/5 md:pl-12 flex flex-col">
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
                                                <Terminal className="w-3 h-3" /> Stack & APIs
                                            </h3>
                                            <button
                                                onClick={() => setIsAddingTool(!isAddingTool)}
                                                className="text-[#00D60B] hover:text-[#00D60B]/80 transition-colors"
                                            >
                                                <Plus className={`w-4 h-4 transition-transform duration-300 ${isAddingTool ? 'rotate-45' : ''}`} />
                                            </button>
                                        </div>

                                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                            {isAddingTool && (
                                                <form onSubmit={handleAddTool} className="mb-4">
                                                    <input
                                                        autoFocus
                                                        type="text"
                                                        placeholder="Add tool name..."
                                                        value={newToolInput}
                                                        onChange={(e) => setNewToolInput(e.target.value)}
                                                        className="w-full bg-black/20 border border-[#00D60B]/50 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00D60B]"
                                                    />
                                                </form>
                                            )}

                                            {tools.map((tool) => (
                                                <div
                                                    key={tool.id}
                                                    className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 rounded-full bg-gray-600 group-hover:bg-[#00D60B] transition-colors" />
                                                        <span className="text-sm font-mono text-gray-400 group-hover:text-white transition-colors">{tool.name}</span>
                                                    </div>
                                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Zap className="w-3 h-3 text-[#FFE500]" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* System Status Mock */}
                                    <div className="mt-8 pt-8 border-t border-white/5">
                                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <Cpu className="w-3 h-3" /> System
                                        </h3>
                                        <div className="grid grid-cols-2 gap-2">
                                            <div className="p-3 rounded-lg bg-black/20 border border-white/5 text-center">
                                                <span className="block text-[10px] text-gray-500 uppercase">Memory</span>
                                                <span className="text-sm font-mono text-[#00D60B]">45%</span>
                                            </div>
                                            <div className="p-3 rounded-lg bg-black/20 border border-white/5 text-center">
                                                <span className="block text-[10px] text-gray-500 uppercase">Uptime</span>
                                                <span className="text-sm font-mono text-[#3b82f6]">99.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 border-t border-white/5 bg-black/20 flex justify-between items-center text-[10px] text-gray-500 font-mono">
                            <div>
                                <span>PEDROVYSK STUDIO</span>
                                <span className="mx-2 text-white/10">|</span>
                                <span>INTERNAL TOOLS V1.0</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00D60B] animate-pulse" />
                                    ONLINE
                                </span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingMenu;
