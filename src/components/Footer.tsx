import { Instagram, Youtube, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-human-bg pt-20 pb-12 px-4 overflow-hidden font-satoshi relative border-t border-white/5">
            <div className="container mx-auto">

                {/* Top Section - Large Logo */}
                <div className="flex justify-center mb-20">
                    <h1 className="text-[12vw] leading-none font-bold font-cabinet tracking-tighter text-white select-none mix-blend-overlay opacity-50">
                        PEDROVYSK
                    </h1>
                </div>

                {/* Middle Section - Links */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-32 px-4 md:px-12">
                    <div className="flex flex-col gap-4 text-center md:text-left mb-8 md:mb-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Contact</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-xs uppercase tracking-widest">Buy Now</a>
                    </div>

                    <div className="text-center md:text-right">
                        <h3 className="text-xl md:text-3xl font-light text-white uppercase tracking-widest">THE FUTURE <br /> AWAITS <br /> <span className="font-bold">NOW</span></h3>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left - Copyright */}
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">2025 Pedrovysk</h4>
                        <p className="text-gray-600 text-[10px]">All Rights Reserved.</p>
                    </div>

                    {/* Center - Spinner */}
                    <div className="order-first md:order-none">
                        <div className="w-8 h-8 rounded-full border border-dashed border-white/50 animate-spin-slow" />
                    </div>

                    {/* Right - Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-gray-400 hover:scale-110">
                            <Instagram size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-gray-400 hover:scale-110">
                            <Youtube size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-gray-400 hover:scale-110">
                            <MessageCircle size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-gray-400 hover:scale-110">
                            <Phone size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
