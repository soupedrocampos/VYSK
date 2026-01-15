import { motion } from 'framer-motion';
import { PlayCircle, Zap, Camera, Box, Layers, Split, Clock } from 'lucide-react';
// Removed Monitor from imports to fix lint error

const workflowItems = [
    { title: "Lightning", icon: <Zap />, color: "from-blue-500/20 to-cyan-500/20", colSpan: "md:col-span-2" },
    { title: "Multi Scenes", icon: <Layers />, color: "from-red-500/20 to-orange-500/20", colSpan: "md:col-span-1" },
    { title: "Camera Movements", icon: <Camera />, color: "from-purple-500/20 to-pink-500/20", colSpan: "md:col-span-1" },
    { title: "Boomtown", icon: <Box />, color: "from-amber-500/20 to-yellow-500/20", colSpan: "md:col-span-1" },
    { title: "Product Mockup", icon: <Box />, color: "from-yellow-400/20 to-amber-600/20", colSpan: "md:col-span-1" },
    { title: "Visual Effects", icon: <Zap />, color: "from-cyan-400/20 to-blue-600/20", colSpan: "md:col-span-2" },
    { title: "Realistic Acting", icon: <PlayCircle />, color: "from-emerald-500/20 to-green-500/20", colSpan: "md:col-span-1" },
    { title: "3D Animation", icon: <Box />, color: "from-indigo-500/20 to-purple-500/20", colSpan: "md:col-span-1" },
    { title: "Timelapse", icon: <Clock />, color: "from-sky-500/20 to-blue-500/20", colSpan: "md:col-span-1" },
    { title: "Split Screen", icon: <Split />, color: "from-fuchsia-500/20 to-pink-500/20", colSpan: "md:col-span-1" },
];

const Workflow = () => {
    return (
        <section className="py-32 bg-human-bg font-satoshi">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-16 relative z-10">
                    <div>
                        <div className="inline-flex items-center space-x-2 mb-4">
                            <h2 className="text-4xl md:text-6xl font-bold font-cabinet text-white uppercase tracking-tight">
                                Workflow N8N <span className="text-sm align-top">®</span>
                            </h2>
                        </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                    </div>
                </div>

                {/* Workflow Background Image with Gradient Mask ("Pontas em gradiente") */}
                <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
                    <img
                        src="/assets/workflow-bg.png"
                        alt="N8N Workflow"
                        className="w-full h-full object-cover opacity-30 mask-image-radial-center"
                    />
                    {/* Additional gradient overlay for smooth integration */}
                    <div className="absolute inset-0 bg-gradient-to-b from-human-bg via-transparent to-human-bg" />
                    <div className="absolute inset-0 bg-gradient-to-r from-human-bg via-transparent to-human-bg" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] md:h-auto">
                    {workflowItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`relative group overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 h-48 md:h-64 ${item.colSpan}`}
                        >
                            {/* Placeholder generic image or gradient since specific assets missing */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-40 group-hover:opacity-60 transition-opacity`} />

                            {/* Blur effect/Detail */}
                            <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-10" />

                            <div className="absolute bottom-0 left-0 w-full p-6 flex items-center justify-between z-10">
                                <span className="text-white font-medium tracking-wide flex items-center gap-2">
                                    <span className="p-1 rounded-full bg-white/10 backdrop-blur-md">
                                        {item.icon}
                                    </span>
                                    {item.title}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
