import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
    const { t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
            <motion.div
                layout
                className={`
                    pointer-events-auto
                    relative flex items-center justify-between px-2 py-2 transition-all duration-500 ease-out
                    ${isScrolled
                        ? 'w-auto bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pl-4 pr-2'
                        : 'w-full max-w-7xl bg-transparent border-transparent'
                    }
                `}
            >
                {/* Logo */}
                <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'mr-4' : ''}`}>
                    <a href="/">
                        <img
                            src="/assets/logo-pedrovysk.png"
                            alt="Pedrovysk"
                            className={`object-contain transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'}`}
                        />
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-1">
                    {[
                        { name: t('nav.products'), href: '#products' },
                        { name: t('nav.research'), href: '#research' },
                        { name: t('nav.careers'), href: '#careers' },
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`
                                relative px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300
                                ${isScrolled ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-white/80 hover:text-white'}
                            `}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className={`flex items-center transition-all duration-300 ${isScrolled ? 'ml-2' : ''}`}>
                    <a
                        href="#"
                        className={`
                            group relative inline-flex items-center justify-center rounded-full font-bold uppercase tracking-wide transition-all duration-300 overflow-hidden
                            ${isScrolled
                                ? 'bg-white text-black px-5 py-2 text-sm hover:scale-105'
                                : 'bg-white text-black px-6 py-2.5 text-sm hover:bg-gray-200'
                            }
                        `}
                    >
                        <span className="relative z-10">Access</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-human-green to-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden flex items-center ml-2">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-white hover:bg-white/10' : 'text-white/80 hover:bg-white/10'}`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-24 left-4 right-4 bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 pointer-events-auto md:hidden flex flex-col space-y-4"
                    >
                        {[
                            { name: t('nav.products'), href: '#products' },
                            { name: t('nav.research'), href: '#research' },
                            { name: t('nav.careers'), href: '#careers' },
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white/80 hover:text-white font-bold uppercase tracking-wider text-lg py-2 border-b border-white/5 last:border-0"
                            >
                                {item.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
