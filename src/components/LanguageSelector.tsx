import { Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const flags = {
        EN: '🇺🇸',
        PT: '🇧🇷',
        ES: '🇪🇸'
    };

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2">
            <div className="relative group">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 shadow-lg relative"
                >
                    <Globe className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00D60B] text-xs shadow-sm border border-black/10">
                        {flags[language]}
                    </span>
                </button>

                {/* Tooltip / Menu */}
                <div className={`absolute right-14 top-0 bg-black/90 border border-white/10 rounded-xl p-2 flex flex-col gap-1 transition-all duration-300 origin-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}>
                    {['EN', 'PT', 'ES'].map((l) => (
                        <button
                            key={l}
                            onClick={() => { setLanguage(l as "EN" | "PT" | "ES"); setIsOpen(false); }}
                            className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors flex items-center gap-2 ${language === l ? 'bg-white text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            <span className="text-lg">{flags[l as "EN" | "PT" | "ES"]}</span>
                            {l}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LanguageSelector;
