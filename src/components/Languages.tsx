import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const flags = [
    { country: 'br', label: 'Portuguese' },
    { country: 'us', label: 'English' },
    { country: 'es', label: 'Spanish' },
    { country: 'fr', label: 'French' },
    { country: 'it', label: 'Italian' },
    { country: 'cn', label: 'Chinese' },
    { country: 'in', label: 'Hindi' },
    { country: 'sa', label: 'Arabic' },
    { country: 'ru', label: 'Russian' },
    { country: 'jp', label: 'Japanese' },
    { country: 'de', label: 'German' },
    { country: 'pt', label: 'Portuguese (PT)' },
    { country: 'gb', label: 'English (UK)' },
    { country: 'tr', label: 'Turkish' },
    { country: 'kr', label: 'Korean' },
];

const Languages = ({ isStatic = false }: { isStatic?: boolean }) => {
    // Generate text rows content - using Title Case
    const textRow = flags.map(f => f.label).join(" • ");

    return (
        <section className="py-32 bg-human-bg relative overflow-hidden font-satoshi flex flex-col justify-center min-h-[900px]">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-human-bg/80 to-human-bg z-20 pointer-events-none" />

            {/* Marquee Background - Slower & Title Case & Straight */}
            <div className="absolute inset-0 flex flex-col justify-center opacity-20 select-none pointer-events-none">
                <div className="flex flex-col gap-24 origin-center">
                    {/* Row 1 */}
                    <div className="flex overflow-hidden mask-image-gradient-sides">
                        <motion.div
                            className="flex gap-12 w-max whitespace-nowrap"
                            animate={isStatic ? undefined : { x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 200, ease: "linear" }}
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <span key={i} className="text-9xl font-thin tracking-tighter text-white/10 font-cabinet">
                                    {textRow} • {textRow} •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                    {/* Row 2 */}
                    <div className="flex overflow-hidden mask-image-gradient-sides">
                        <motion.div
                            className="flex gap-12 w-max whitespace-nowrap"
                            animate={isStatic ? undefined : { x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, duration: 220, ease: "linear" }}
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <span key={i} className="text-9xl font-thin tracking-tighter text-white/10 font-cabinet">
                                    {textRow} • {textRow} •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                    {/* Row 3 */}
                    <div className="flex overflow-hidden mask-image-gradient-sides">
                        <motion.div
                            className="flex gap-12 w-max whitespace-nowrap"
                            animate={isStatic ? undefined : { x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, duration: 240, ease: "linear" }}
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <span key={i} className="text-9xl font-thin tracking-tighter text-white/10 font-cabinet">
                                    {textRow} • {textRow} •
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Rotating Flags Circle - Half Moon Effect */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full mt-10 overflow-hidden min-h-[600px]">

                {/* Gradient Mask for fading out at edges/bottom */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 z-40 bg-gradient-to-t from-human-bg via-human-bg to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-human-bg to-transparent z-40" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-human-bg to-transparent z-40" />

                <div className="relative w-[1200px] h-[1200px] flex justify-center items-center translate-y-[450px]">
                    <motion.div
                        className="absolute w-full h-full"
                        animate={isStatic ? undefined : { rotate: 360 }}
                        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    >
                        {flags.map((flag, index) => {
                            const totalFlags = flags.length;
                            const angleStep = 360 / totalFlags;
                            const angle = index * angleStep;
                            const radius = 600; // Increased Radius for flatter arc

                            return (
                                <div
                                    key={flag.country}
                                    className="absolute left-1/2 top-1/2"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    <motion.div
                                        animate={isStatic ? undefined : { rotate: -360 }}
                                        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                                    >
                                        <div className="p-0 transform hover:scale-125 transition-all duration-300 cursor-pointer group">
                                            {/* Flag Style */}
                                            <img
                                                src={`https://flagcdn.com/w160/${flag.country}.png`}
                                                alt={flag.label}
                                                className="w-20 md:w-24 aspect-[3/2] object-cover rounded-xl shadow-2xl border-2 border-white/20"
                                            />
                                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap text-white pointer-events-none z-50 border border-white/10 backdrop-blur-md">
                                                {flag.label}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Central Text - Positioned inside the arc */}
                <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-center w-full max-w-3xl px-4 mt-20">
                    <h2 className="text-8xl md:text-[10rem] font-bold font-cabinet text-white tracking-tighter mb-4 drop-shadow-2xl leading-[0.8]">
                        SEO
                    </h2>

                    <p className="text-lg md:text-xl text-white/90 font-bold uppercase tracking-[0.2em] mb-8">
                        {flags.length} Languages Available
                    </p>

                    <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto leading-relaxed border-t border-white/10 pt-6">
                        Complete optimization including high-authority backlinks, RankMath integration, and advanced keyword strategy for global reach.
                    </p>

                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transform hover:-translate-y-1"
                        >
                            <span>Enroll Now</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Languages;
