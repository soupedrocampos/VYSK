import { motion } from 'framer-motion';
import { ArrowUpRight, Users, MessageSquare, Briefcase, LifeBuoy } from 'lucide-react';

const Community = () => {
    return (
        <section className="py-32 bg-human-bg font-satoshi relative overflow-hidden">

            {/* Floating Background Text */}
            <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-10 select-none overflow-hidden flex flex-col items-center justify-center space-y-4">
                <div className="text-8xl font-bold text-white whitespace-nowrap animate-marquee-slow">
                    MAN PORTUGUÊS CHINESE ITALIANO ESPAÑOL ENGLISH
                </div>
                <div className="text-8xl font-bold text-white whitespace-nowrap animate-marquee-reverse-slow">
                    RUSSIAN PORTUGUÊS 中文 HINDI ARABIC FRANÇAIS
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-20"
                >
                    <div className="mb-8 md:mb-0">
                        <div className="flex flex-col">
                            <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-2 tracking-widest uppercase">
                                REALISTIC <br /> CONNECTION
                            </h2>
                            <h2 className="text-6xl md:text-8xl font-bold font-cabinet text-white tracking-tighter loading-none">
                                COMMUNITY
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-4xl md:text-6xl font-cabinet font-light text-white">AI CREATORS</span>
                        <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                            <ArrowUpRight size={20} />
                        </div>
                    </div>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">

                    {/* Exclusive / Hands Image - Large Left Block */}
                    <div className="md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/5 bg-neutral-900/50 group">
                        <div className="absolute top-6 left-6 z-20">
                            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-black/50 backdrop-blur-md text-xs font-bold text-white uppercase tracking-wider">
                                EXCLUSIVE
                            </span>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                            alt="Abstract AI Hands"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    </div>

                    {/* Networking - Top Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 px-4">
                            <Users className="text-purple-400 w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Networking</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connect with hundreds of creatives who are already part of our community.
                        </p>
                    </motion.div>

                    {/* Conversations - Top Right - WHITE CARD */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group relative overflow-hidden"
                    >
                        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                            <MessageSquare className="text-purple-400 w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Conversations</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Real discussions about tools, creative processes, and trends.
                        </p>
                    </motion.div>

                    {/* Jobs - Bottom Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group"
                    >
                        <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6">
                            <Briefcase className="text-indigo-400 w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Jobs</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Exclusive opportunities at companies looking for creatives skilled in AI.
                        </p>
                    </motion.div>

                    {/* Support - Bottom Right */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:bg-neutral-800/50 transition-colors group"
                    >
                        <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                            <LifeBuoy className="text-blue-400 w-8 h-8" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">Support</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Get technical help, share learnings, and receive support from the Human team.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Community;
